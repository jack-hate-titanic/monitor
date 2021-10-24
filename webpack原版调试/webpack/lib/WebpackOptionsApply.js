/*
 * @Author: your name
 * @Date: 2021-10-20 22:54:04
 * @LastEditTime: 2021-10-20 22:54:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/WebpackOptionsApply.js
 */
module.exports = class WebpackOptionsApply {
  process(options, compiler) {
    //插件绑定结束
    compiler.hooks.afterPlugins.call(compiler);
  }
};
