/*
 * @Author: your name
 * @Date: 2022-01-23 11:55:18
 * @LastEditTime: 2022-01-23 11:56:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myWebpack/tapable.js
 */

let { SyncHook } = require("tapable");
let hook = new SyncHook();

// 监听
hook.tap("some name", () => {
  console.log("some name");
});

// 触发
hook.call();
