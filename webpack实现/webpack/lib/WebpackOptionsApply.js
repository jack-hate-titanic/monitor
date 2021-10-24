/*
 * @Author: your name
 * @Date: 2021-10-20 22:54:04
 * @LastEditTime: 2021-10-24 11:36:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/WebpackOptionsApply.js
 */

const EntryOptionPlugin = require("./EntryOptionPlugin");

// 用于挂载各种历史插件
class WebpackOptionsApply {
  process(options, compiler) {
    // 注册插件
    new EntryOptionPlugin().apply(compiler);
    // 触发entryOption钩子，context是webpack地址，entry入口地址
    compiler.hooks.entryOption.call(options.context, options.entry);

    // //插件绑定结束
    // compiler.hooks.afterPlugins.call(compiler);
  }
}

module.exports = WebpackOptionsApply;
