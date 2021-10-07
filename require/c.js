/*
 * @Author: your name
 * @Date: 2021-10-07 18:57:11
 * @LastEditTime: 2021-10-07 18:59:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/require/c.js
 */
const promise = new Promise((resolve, reject) => {
  resolve("success1");
  reject("error");
  resolve("success2");
});
promise
  .then((res) => {
    console.log(res, 1111);
    throw "111";
  })
  .then((res) => {
    console.log(res);
  });
