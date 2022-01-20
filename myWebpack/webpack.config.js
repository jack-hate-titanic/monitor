/*
 * @Author: your name
 * @Date: 2022-01-19 20:58:50
 * @LastEditTime: 2022-01-20 21:02:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/webpack.config.js
 */
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.join(__dirname, "loaders", "babel-loader.js")],
      },
    ],
  },
};
