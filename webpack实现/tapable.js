/*
 * @Author: your name
 * @Date: 2021-10-20 23:24:20
 * @LastEditTime: 2021-10-20 23:28:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack实现/tapable.js
 */

const { SyncHook } = require("tapable");

const hook = new SyncHook(["arg1", "arg2"]);

hook.tap("log", (...args) => {
  console.log("打印" + args);
});

hook.call(111, 222);
