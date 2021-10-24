/*
 * @Author: your name
 * @Date: 2021-10-20 22:49:49
 * @LastEditTime: 2021-10-20 23:02:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/index.js
 */
const NodeEnvironmentPlugin = require("./plugins/NodeEnvironmentPlugin");
const WebpackOptionsApply = require("./WebpackOptionsApply");
const Compiler = require("./Compiler");
const path = require("path");
function webpack(options) {
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
  compiler.hooks.environment.call(); //设置变量
  compiler.hooks.afterEnvironment.call(); //设置变量完成后
  new WebpackOptionsApply().process(options, compiler); //处理参数
  return compiler;
}

module.exports = webpack;
