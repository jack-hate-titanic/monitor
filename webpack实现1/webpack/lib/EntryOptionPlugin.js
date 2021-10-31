/*
 * @Author: your name
 * @Date: 2021-10-30 18:36:34
 * @LastEditTime: 2021-10-30 19:46:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现1/webpack/lib/EntryOptionPlugin.js
 */
const SingleEntryPlugin = require("./SingleEntryPlugin");

const itemToPlugin = (context, item, name) => {
  return new SingleEntryPlugin(context, item, name);
};

class EntryOptionPlugin {
  apply(compiler) {
    compiler.hooks.entryOption.tap("EntryOptionsPlugin", (context, entry) => {
      itemToPlugin(context, entry, "main").apply(compiler);
    });
  }
}

module.exports = EntryOptionPlugin;
