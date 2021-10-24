/*
 * @Author: your name
 * @Date: 2021-10-24 11:41:01
 * @LastEditTime: 2021-10-24 18:41:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/lib/Compilation.js
 */
const { Tapable, SyncHook } = require("tapable");
const NormalModuleFactory = require("./NormalModuleFactory");
const normalModuleFactory = new NormalModuleFactory();
const Parser = require("./Parser");
let parser = new Parser();
const path = require("path");

class Compilation extends Tapable {
  constructor(compiler) {
    super();
    this.compiler = compiler;
    this.options = compiler.options; //选项一样
    this.context = compiler.context; // 根目录一样
    this.inputFileSystem = compiler.inputFileSystem;
    this.outputFileSystem = compiler.outputFileSystem;
    this.entries = []; //入口模块所有数组
    this.modules = []; //模块的数组，这里放着所有的模块
    this.hooks = {
      // 当你成功构建完成一个模块后就会触发此钩子执行
      succeedModule: new SyncHook(["module"]),
    };
  }

  //开始编译一个新的入口
  addEntry(context, entry, name, callback) {
    this._addModuleChain(context, entry, name, (err, module) => {
      callback(err, module);
    });
  }

  _addModuleChain(context, rawRequest, name, callback) {
    // 通过模块工厂创建一个模块
    let entryModule = normalModuleFactory.create({
      name, // main
      context, // 根目录
      rawRequest,
      parser,
      resource: path.posix.join(context, rawRequest), // 入口的绝对路径
    });
    this.entries.push(entryModule); //给入口模块添加一个模块
    this.modules.push(entryModule); //给模块数组添加模块
    const afterBuild = (err) => {
      //TODO 编译依赖的模块
      return callback(err, entryModule);
    };
    this.buildModule(entryModule, afterBuild);
  }

  /**
   * 编译模块
   * @param {*} module  要编译的模块
   * @param {*} afterBuild 编译完成后的回调
   */
  buildModule(module, afterBuild) {
    // 模块的真正的编译逻辑是放在module内部完成
    module.build(this, (err) => {
      // 走到这意味着一个模块已经编译成功了
      this.hooks.succeedModule.call(module);
      afterBuild(err);
    });
  }
}
module.exports = Compilation;
