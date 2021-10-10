/*
 * @Author: your name
 * @Date: 2021-10-10 18:59:28
 * @LastEditTime: 2021-10-10 19:03:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/koa/server.js
 */
const Koa = require("./koa");
let app = new Koa();

app.use((req, res) => {});

app.listen(3000, () => {
  console.log("server start 3000");
});
