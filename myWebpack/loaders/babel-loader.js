/*
 * @Author: your name
 * @Date: 2022-01-20 20:35:20
 * @LastEditTime: 2022-01-25 23:09:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/loaders/babel-loader.js
 */

const babel = require("@babel/core");

const loader = function (source, options) {
  let result = babel.transform(source, {
    presets: options.presets,
  });
  console.log(result.code);
  return result.code;
};

module.exports = loader;
