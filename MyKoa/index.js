/*
 * @Author: your name
 * @Date: 2022-01-16 13:27:54
 * @LastEditTime: 2022-01-16 18:13:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /MyKoa/index.js
 */
const Koa = require("./koa");

const koa = new Koa();

koa.use((ctx, next) => {
  console.log(ctx.request.method);
});

koa.listen(3000);
