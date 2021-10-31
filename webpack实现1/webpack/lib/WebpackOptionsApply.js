/*
 * @Author: your name
 * @Date: 2021-10-30 18:34:44
 * @LastEditTime: 2021-10-30 19:30:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现1/webpack/lib/WebpackOptionsApply.js
 */

const EntryOptionPlugin = require("./EntryOptionPlugin");

class WebpackOptionsApply {
  process(options, compiler) {
    //注册插件
    new EntryOptionPlugin().apply(compiler);
    // 触发入口钩子
    compiler.hooks.entryOption.call(options.context, options.entry);
  }
}
module.exports = WebpackOptionsApply;
