/*
 * @Author: your name
 * @Date: 2021-10-24 09:06:21
 * @LastEditTime: 2021-10-24 09:16:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/debuuger.js
 */
const webpack = require("webpack");
const webpackOptions = require("./webpack.config");
debugger;
const compiler = webpack(webpackOptions);

compiler.run((err, stats) => {
  console.log(err);
  console.log(
    stats.toJson({
      entries: true,
      chunks: true,
      modules: true,
      _modules: true,
      assets: true,
    })
  );
});
