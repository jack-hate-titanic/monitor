/*
 * @Author: your name
 * @Date: 2022-01-28 22:10:11
 * @LastEditTime: 2022-01-28 22:11:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/myWebpack/plugins/DonePlugin.js
 */
module.exports = class RunPlugin {
  // 注册插件
  apply(compiler) {
    compiler.hooks.done.tap("RunPlugin", () => {
      console.log("打包结束");
    });
  }
};
