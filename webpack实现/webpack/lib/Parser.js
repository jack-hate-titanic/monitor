/*
 * @Author: your name
 * @Date: 2021-10-24 17:32:14
 * @LastEditTime: 2021-10-24 17:36:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/lib/Parser.js
 */

const babylon = require("babylon");
const { Tapable } = require("tapable");
class Parser extends Tapable {
  parse(source) {
    return babylon.parse(source, {
      sourceType: "module", //源代码是一个模块
      plugins: ["dynamicImport"],
    });
  }
}

module.exports = Parser;
