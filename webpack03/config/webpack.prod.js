/*
 * @Author: your name
 * @Date: 2021-11-05 17:32:45
 * @LastEditTime: 2021-11-06 07:25:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/config/webpack.config.prod.js
 */
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.base");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
    },
  },
  plugin: [new CleanWebpackPlugin()],
});
