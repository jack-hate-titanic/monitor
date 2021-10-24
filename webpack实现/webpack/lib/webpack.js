/*
 * @Author: your name
 * @Date: 2021-10-20 22:49:49
 * @LastEditTime: 2021-10-24 22:36:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/index.js
 */
const NodeEnvironmentPlugin = require("./plugins/NodeEnvironmentPlugin");
const WebpackOptionsApply = require("./WebpackOptionsApply");
const Compiler = require("./Compiler");
const path = require("path");
function webpack(options, callback) {
  // 验证配置文件是否合法，如果不合法，报错
  options.context = options.context || path.resolve(process.cwd());
  //创建compiler
  let compiler = new Compiler(options.context);
  //给compiler指定options
  compiler.options = Object.assign(compiler.options, options);
  //设置读写文件的API
  new NodeEnvironmentPlugin().apply(compiler);
  //调用配置文件里配置的插件并依次调用
  if (options.plugins && Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
      plugin.apply(compiler);
    }
  }
  // 挂载内置插件
  new WebpackOptionsApply().process(options, compiler); //处理参数
  return compiler;
}

module.exports = webpack;
