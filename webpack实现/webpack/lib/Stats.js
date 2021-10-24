/*
 * @Author: your name
 * @Date: 2021-10-24 17:58:01
 * @LastEditTime: 2021-10-24 18:33:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack/lib/Stats.js
 */
class Stats {
  constructor(compilation) {
    this.entries = compilation.entries;
    this.modules = compilation.modules;
  }
  toJson() {
    return this;
  }
}

module.exports = Stats;
