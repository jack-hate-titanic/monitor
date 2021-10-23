/*
 * @Author: your name
 * @Date: 2021-10-19 22:50:09
 * @LastEditTime: 2021-10-21 22:14:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack02/config/webpack.prod.config.js
 */
const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");

module.exports = merge(base, {
  mode: "production",
});
