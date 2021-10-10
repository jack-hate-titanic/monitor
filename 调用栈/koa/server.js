/*
 * @Author: your name
 * @Date: 2021-10-10 18:48:31
 * @LastEditTime: 2021-10-10 18:49:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/调用栈/koa/server.js
 */
const Koa = require("koa");

let app = new Koa();

app.listen(3000, () => {
  console.log("server start");
});
