/*
 * @Author: your name
 * @Date: 2021-10-30 18:30:20
 * @LastEditTime: 2021-10-30 18:31:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现1/webpack/lib/NodeEnvironmentPlugin.js
 */
const fs = require("fs");
class NodeEnvironmentPlugin {
  apply(compiler) {
    compiler.inputFileSystem = fs; // 设置读文件的模块
    compiler.outputFileSystem = fs; // 设置写文件的模块
  }
}
module.exports = NodeEnvironmentPlugin;
