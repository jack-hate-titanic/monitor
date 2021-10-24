/*
 * @Author: your name
 * @Date: 2021-10-20 22:51:32
 * @LastEditTime: 2021-10-20 22:51:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/Compiler.js
 */
const {
  Tapable,
  SyncHook,
  SyncBailHook,
  AsyncSeriesHook,
  AsyncParallelHook,
} = require("tapable");
class Compiler extends Tapable {
  constructor(context) {
    super();
    this.hooks = {
      environment: new SyncHook([]),
      afterEnvironment: new SyncHook([]),
      afterPlugins: new SyncHook(["compiler"]),
    };
    this.options = {};
    this.context = context; //设置上下文路径
  }
  run() {
    console.log("开始编译");
  }
}
module.exports = Compiler;
