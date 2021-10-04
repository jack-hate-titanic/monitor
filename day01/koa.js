/*
 * @Author: your name
 * @Date: 2021-09-14 22:15:30
 * @LastEditTime: 2021-09-14 22:29:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/day01/koa.js
 */
const Koa = require("koa");
const app = new Koa();
app.use(async (ctx, next) => {
  console.log(1);
  await next(5);
  console.log(1.1);
});
app.use(async (ctx, next) => {
  console.log(2);
  await next();
  console.log(2.1);
});
app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log(3.1);
});
app.listen(8080, () => {
  console.log("8080");
});
// 输出结果 1-->2-->3-->3.1-->2.1-->1.1
