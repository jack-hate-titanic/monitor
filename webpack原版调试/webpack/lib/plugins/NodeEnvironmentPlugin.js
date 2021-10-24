/*
 * @Author: your name
 * @Date: 2021-10-20 22:53:31
 * @LastEditTime: 2021-10-20 22:53:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/plugins/NodeEnvironmentPlugin.js
 */
const fs = require("fs");
class NodeEnvironmentPlugin {
  apply(compiler) {
    compiler.inputFileSystem = fs; //设置读文件的模块
    compiler.outputFileSystem = fs; //设置写文件的模块
  }
}
module.exports = NodeEnvironmentPlugin;
