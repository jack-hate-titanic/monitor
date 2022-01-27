/*
 * @Author: your name
 * @Date: 2022-01-23 11:36:09
 * @LastEditTime: 2022-01-23 12:37:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/lib/Compiler1.js
 */
const fs = require("fs");
let { SyncHook } = require("tapable");

class Compiler {
  constructor(options) {
    this.options = options;
    this.hooks = {
      run: new SyncHook(),
      done: new SyncHook(),
    };
  }

  run() {
    let modules = [];
    let chunks = [];
    let files = [];
    this.hooks.run.call(); // 触发run钩子执行
    let entry = path.join(this.options.context, this.options.entry);
    // 1.读取模块内容
    let entryContent = fs.readFileSync(entry, "utf-8");
    // 编译为es5
    let entrySource = babelLoader(entryContent);
    // 模块
    let entryModule = { id: entry, source: entrySource };
    modules.push(entryModule);
    // 把入口模块的代码转成抽象语法树，分析里面的import和require依赖

    let chunk = { name: "main", modules };
    chunks.push(chunk);
    let file = {
      file: this.options.output,
      source: ``,
    };
    files.push(file);
    //写入文件系统
    let outputPath = path.join(
      this.options.output.path,
      this.options.output.filename
    );
    fs.writeFileSync(outputPath, file.source, "utf-8");
    this.hooks.done.call();
  }
}
let options = require("../webpack.config");
let compiler = new Compiler(options);
if (options.plugins && Array.isArray(options.plugins)) {
  for (const plugin of options.plugins) {
    // 调用插件的注册方法
    plugin.apply(compiler);
  }
}

function babelLoader(source) {
  return;
}
