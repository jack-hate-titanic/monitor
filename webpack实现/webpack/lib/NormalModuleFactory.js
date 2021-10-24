/*
 * @Author: your name
 * @Date: 2021-10-24 11:27:40
 * @LastEditTime: 2021-10-24 18:39:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/lib/NormalModuleFactory.js
 */

const NormalModule = require("./NormalModule");

class NormalModuleFactory {
  create(data) {
    return new NormalModule(data);
  }
}

module.exports = NormalModuleFactory;
