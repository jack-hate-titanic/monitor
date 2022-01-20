/*
 * @Author: your name
 * @Date: 2022-01-19 20:34:05
 * @LastEditTime: 2022-01-20 22:28:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/lib/Compiler.js
 */
const path = require("path");
const fs = require("fs");
const babel = require("@babel/core");
const t = require("@babel/types");
// 通过EJS生成模板
const ejs = require("ejs");

// 用于实现 emit 钩子
const { AsyncSeriesHook } = require("tapable");

// 传递给hooks钩子的参数，包含配置信息，编译的文件信息等
const Compilation = require("./Compilation");

class Compiler {
  constructor(options) {
    this.options = options;
    this.modules = {};
    this.entryPath = "";
    this.root = process.cwd();
    this.hooks = Object.freeze({
      // 生成资源到 output 目录之前，这里实现自定义清理 dist 目录的插件 CleanDistPlugin
      emit: new AsyncSeriesHook(["compilation"]),
    });
  }
  getSource(modulePath) {
    console.log(`循环加载loader`);
    try {
      let rules = this.options.module.rules;
      let content = fs.readFileSync(modulePath, "utf-8");
      for (let i = 0; i < rules.length; i++) {
        let { test, use } = rules[i];
        let len = use.length - 1;
        if (test.test(modulePath)) {
          // 递归所有loader
          function loopLoader() {
            // 按照从右往左执行
            let loader = require(use[len--]);
            content = loader(content);
            if (len >= 0) {
              loopLoader();
            }
          }
          loopLoader();
        }
      }
      return content;
    } catch (e) {
      console.log(e);
      throw new Error(`获取数据错误:${modulePath}`);
    }
  }
  // 根据模块的源码进行解析
  parse(source, moduleName) {
    console.log("解析模块" + moduleName);
    let dirname = path.dirname(moduleName);
    let dependencies = []; //模块依赖项列表
    const requirePlugin = {
      visitor: {
        CallExpression(p) {
          const node = p.node;
          if (node.callee.name === "require") {
            node.callee.name = "__webpack_require__";
            // 路径替换
            let modulePath = node.arguments[0].value;
            modulePath =
              "./" + path.join(dirname, modulePath).replace(/\\/g, "/");
            node.arguments = [t.stringLiteral(modulePath)];
            dependencies.push(modulePath);
          }
        },
      },
    };
    const result = babel.transform(source, {
      plugins: [requirePlugin],
    });
    console.log(result.code);
    return {
      sourceCode: result.code,
      dependencies,
    };
  }
  // 构建模块，并进行广度优先遍历所有依赖的子模块
  buildModule(modulePath, isEntry) {
    // 模块的源代码
    let source = this.getSource(modulePath);
    // 模块的路径
    let moduleName =
      "./" + path.relative(this.root, modulePath).replace(/\\/g, "/");
    if (isEntry) {
      this.entryPath = moduleName;
    }
    // 从主入口出发, 分别获取模块的路径以及对应的代码块, 并把代码块中的require方法改为__webpack_require__方法
    let { sourceCode, dependencies } = this.parse(source, moduleName);

    // 保存模块
    this.modules[moduleName] = JSON.stringify(sourceCode);

    // 递归获取所有的模块依赖，并保存所有的路径与依赖的模块
    dependencies.forEach((d) => {
      this.buildModule(path.join(this.root, d));
    }, false);
  }
  mkdirp(outputPath, filePath) {
    console.log("simple-webpack ------------------> 文件输出");
    const { modules, entryPath } = this;
    //创建文件夹
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath);
    }
    ejs
      .renderFile(path.join(__dirname, "Template.ejs"), { modules, entryPath })
      .then((code) => {
        fs.writeFileSync(filePath, code);
        console.log("simple-webpack ------------------> 打包完成");
      });
  }
  run() {
    console.log("webpack-------->开始打包");
    const { entry } = this.options;
    this.buildModule(entry, true);
    const compilation = new Compilation(this);
    this.hooks.emit.callAsync(compilation, (err) => {
      if (err) {
        throw new Error("emit钩子执行错误");
      } else {
        const outputPath = path.resolve(this.root, this.options.output.path);
        const filePath = path.resolve(outputPath, this.options.output.filename);
        // 输出文件
        this.mkdirp(outputPath, filePath);
      }
    });
  }
}

module.exports = Compiler;
