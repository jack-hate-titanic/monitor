/*
 * @Author: your name
 * @Date: 2022-01-19 20:58:50
 * @LastEditTime: 2022-01-27 22:26:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/webpack.config.js
 */
const path = require("path");

module.exports = {
  context: process.cwd(), // 当前的根目录
  mode: "development", // 工作模式
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.join(__dirname, "./loaders/babel-loader.js"),
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [new RunPlugin(), new DonePlugin()],
  devServer: {},
};
