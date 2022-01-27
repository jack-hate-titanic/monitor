/*
 * @Author: your name
 * @Date: 2022-01-23 11:50:20
 * @LastEditTime: 2022-01-23 11:50:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/plugins/RunPlugin.js
 */

module.exports = class RunPlugin {
  // 注册插件
  apply(compiler) {
    compiler.hooks.run.tap("RunPlugin", () => {
      console.log("RunPlugin");
    });
  }
};
