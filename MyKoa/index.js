/*
 * @Author: your name
 * @Date: 2022-01-16 13:27:54
 * @LastEditTime: 2022-01-22 21:53:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /MyKoa/index.js
 */
const Koa = require("./koa");

const koa = new Koa();

koa.use((ctx, next) => {
  ctx.res.end("hello world");
  next();
});

koa.use(() => {
  console.log("测试");
});

koa.listen(3000, () => {
  console.log("服务已开启");
});
