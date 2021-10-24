/*
 * @Author: your name
 * @Date: 2021-10-24 10:19:27
 * @LastEditTime: 2021-10-24 11:43:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/lib/EntryOptionPlugin.js
 */

const SingleEntryPlugin = require("./SingleEntryPlugin");

const itemToPlugin = (context, item, name) => {
  return new SingleEntryPlugin(context, item, name);
};

class EntryOptionPlugin {
  apply(compiler) {
    // tap是注册时间
    compiler.hooks.entryOption.tap("EntryOptionsPlugin", (context, entry) => {
      itemToPlugin(context, entry, "main").apply(compiler);
    });
  }
}

module.exports = EntryOptionPlugin;
