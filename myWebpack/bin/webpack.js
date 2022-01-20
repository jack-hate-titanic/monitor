/*
 * @Author: your name
 * @Date: 2022-01-19 20:30:01
 * @LastEditTime: 2022-01-19 20:57:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/bin/webpack.js
 */
const path = require("path");
const Compiler = require("../lib/Compiler");

// 1.获取打包配置
const config = require(path.resolve("webpack.config.js"));

// 2.创建一个compiler实例

const createCompiler = function () {
  // 创建compiler实例
  const compiler = new Compiler(config);
  // 加载插件
  if (Array.isArray(config.plugins)) {
    for (const plugin of config.plugins) {
      plugin.apply(compiler);
    }
  }
  return compiler;
};

const compiler = createCompiler();
// 3.开启编译
compiler.run();
