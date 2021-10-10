/*
 * @Author: your name
 * @Date: 2021-10-08 21:29:53
 * @LastEditTime: 2021-10-08 21:39:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/基础知识/子类继承父类原型上的方法.js
 */
const events = require("events");
const util = require("util");

function Girl() {}
const girl = new Girl();
// 子类继承父类
// Girl.prototype.__proto__ = EventEmitter.prototype;
// Object.setPrototypeOf(Girl.prototype, events.prototype);
util.inherits(Girl, events);

const g1 = (...args) => {
  console.log(args);
};

girl.on("女生失恋了", g1);

girl.emit("女生失恋了", "男朋友跑了么");
