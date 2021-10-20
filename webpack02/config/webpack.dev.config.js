/*
 * @Author: your name
 * @Date: 2021-10-19 22:49:56
 * @LastEditTime: 2021-10-20 08:26:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack02/config/webpack.dev.config.js
 */
const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");

module.exports = merge(base, {
  mode: "development",
});
