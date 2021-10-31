/*
 * @Author: your name
 * @Date: 2021-10-30 17:50:26
 * @LastEditTime: 2021-10-30 18:33:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现1/webpack/lib/webpack.js
 */
const NodeEnvironmentPlugin = require("./NodeEnvironmentPlugin");
const Compiler = require("./Compiler");
const path = require("path");
function webpack(options) {
  options.context = options.context || path.resolve(process.cwd());
  // 用options参数初始化compiler对象
  let compiler = new Compiler(options.context);
  compiler.options = Object.assign(compiler.options, options);
  // 设置读写文件的api
  new NodeEnvironmentPlugin.apply(compiler);
  // 挂在内置插件

  return compiler;
}

module.exports = webpack;
