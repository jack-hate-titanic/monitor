/*
 * @Author: your name
 * @Date: 2021-10-24 10:35:43
 * @LastEditTime: 2021-10-24 18:39:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/lib/SingleEntryPlugin.js
 */
class SingleEntryPlugin {
  constructor(context, entry, name) {
    this.context = context; //入口上下文绝对路径
    this.entry = entry; // 入口模块路径
    this.name = name; // 入口的名字
  }

  apply(compiler) {
    compiler.hooks.make.tapAsync(
      "SingleEntryPlugin",
      (compilation, callback) => {
        const { context, entry, name } = this;
        // 从此入口开始编译，编译入口文件和他的依赖
        compilation.addEntry(context, entry, name, callback);
        console.log("singleEntryPlugin make触发");
        callback();
        // 开始编译一个新的入口context根目录entry入口文件的相对路径name main callback
      }
    );
  }
}

module.exports = SingleEntryPlugin;
