/*
 * @Author: your name
 * @Date: 2022-01-24 21:44:31
 * @LastEditTime: 2022-01-27 21:58:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/lib/Compiler2.js
 */
const { SyncHook } = require("tapable");
const path = require("path");
const fs = require("fs");
const babel = require("@babel/core");
const t = require("@babel/types");
const ejs = require("ejs");

class Compiler {
  constructor(options) {
    this.options = options;
    this.modules = [];
    this.root = process.cwd();
    this.entryPath = "";
    this.hooks = {
      run: new SyncHook(),
      done: new SyncHook(),
    };
  }

  run() {
    this.hooks.run.call();
    const entry = this.options.entry;
    this.buildModule(entry, true);
    const outputPath = path.resolve(this.root, this.options.output.path);
    const filePath = path.resolve(outputPath, this.options.output.filename);
    // 输出文件
    this.mkdirp(outputPath, filePath);
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
  // 构建模块，并进行广度优先遍历所有依赖的子模块
  buildModule(modulePath, isEntry) {
    // 模块源代码
    const source = this.getSource(modulePath);
    // replace是在兼容windows系统
    modulePath =
      "./" + path.relative(this.root, modulePath).replace(/\\/g, "/");
    if (isEntry) {
      this.entryPath = modulePath;
    }
    const { sourceCode, dependencies } = this.parse(source, modulePath);
    // 这里一个完整的模块就好了，保存到modules中
    this.modules[modulePath] = JSON.stringify(sourceCode);
    // 递归获取所有的模块依赖，并保存所有的路径与依赖的模块
    dependencies.forEach((d) => {
      this.buildModule(path.join(this.root, d));
    }, false);
  }
  // 根据模块的源码进行解析
  parse(source, moduleName) {
    let dependencies = [];
    const dirname = path.dirname(moduleName);
    const requirePlugin = {
      visitor: {
        // 替换源码中的require为__webpack_require__
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
    let result = babel.transform(source, {
      plugins: [requirePlugin],
    });
    return {
      sourceCode: result.code,
      dependencies,
    };
  }

  getSource(modulePath) {
    // 读取文件内容
    let content = fs.readFileSync(modulePath, "utf-8");
    const rules = this.options.module.rules;
    for (let rule of rules) {
      const { test, use } = rule;
      if (test.test(modulePath)) {
        // 递归所有loader
        // use此处我们当做数组来处理，按照从右往左的方式执行
        let length = use.length - 1;
        function loopLoader() {
          // 按照从右往左执行
          const { loader, options } = use[length--];
          let loaderFunc = require(loader);
          // loader是一个函数
          content = loaderFunc(content, options);
          if (length >= 0) {
            loopLoader();
          }
        }
        if (length >= 0) {
          loopLoader();
        }
      }
    }
    return content;
  }
}

module.exports = Compiler;
