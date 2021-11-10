/*
 * @Author: your name
 * @Date: 2021-11-05 17:32:32
 * @LastEditTime: 2021-11-05 17:42:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/config/webpack.config.dev.js
 */

const { merge } = require("webpack-merge");
const common = require("./webpack.base");
module.exports = merge(common, {
  mode: "development",
});
