/*
 * @Author: your name
 * @Date: 2021-10-04 13:22:25
 * @LastEditTime: 2021-10-04 13:27:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/手写题/extends.js
 */
// 通过原型去扩展函数

function coreFn() {
  console.log("fn函数");
}

coreFn.prototype.before = function () {
  console.log("before");
};

coreFn.before();
