/*
 * @Author: your name
 * @Date: 2022-01-20 20:35:20
 * @LastEditTime: 2022-01-20 21:00:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/loaders/babel-loader.js
 */

const babel = require("@babel/core");
const loaderUtils = require("loader-utils");

const loader = function (source) {
  return source;
};

module.exports = loader;
