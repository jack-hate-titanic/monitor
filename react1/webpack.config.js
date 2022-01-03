/*
 * @Author: your name
 * @Date: 2022-01-03 14:58:30
 * @LastEditTime: 2022-01-03 16:16:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react1/webpack.config.js
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.[hash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "/dist"),
    open: true,
  },
};
