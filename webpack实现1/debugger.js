/*
 * @Author: your name
 * @Date: 2021-10-30 17:28:19
 * @LastEditTime: 2021-10-30 17:54:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现1/debugger.js
 */
const webpack = require("./webpack");
const webpackOptions = require("./webpack.config");
const compiler = webpack(webpackOptions);
compiler.run((err, stats) => {
  console.log(
    stats.toJson({
      chunks: true,
    })
  );
});
