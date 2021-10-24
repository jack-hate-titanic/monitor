/*
 * @Author: your name
 * @Date: 2021-10-20 22:28:03
 * @LastEditTime: 2021-10-24 09:05:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/webpack.config.js
 */
const path = require("path");
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
};
