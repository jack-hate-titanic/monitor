/*
 * @Author: your name
 * @Date: 2021-10-30 18:09:35
 * @LastEditTime: 2021-10-30 21:20:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现1/webpack/lib/Compiler.js
 */
const { Tapable } = require("tapable");
class Compiler extends Tapable {
  constructor(context) {
    super();
    this.hooks = {
      entryOption: new SyncBailHook(["context", "entry"]),
      // context项目根目录的绝对路径
      entryOption: new SyncBailHook(["params"]),
      beforeRun: new AsyncSeriesHook(["compiler"]),
    };
    this.options = {};
    this.context = context;
  }

  run(callback) {
    console.log("开始编译");

    const finalCallback = (err, stats) => {};

    this.hooks.beforeRun.callSync(this, (err) => {
      this.hooks.run.callAsync(this, (err) => {
        this.compile();
      });
    });
  }
}
module.exports = Compiler;
