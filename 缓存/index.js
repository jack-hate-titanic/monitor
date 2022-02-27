/*
 * @Author: your name
 * @Date: 2022-02-19 17:04:41
 * @LastEditTime: 2022-02-19 18:00:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /缓存/index.js
 */
const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const app = new Koa();

const staticPath = './static';

app.use(conditional());
app.use(etag());
app.use(static(
  path.join(__dirname, staticPath),
  {
    maxage: 20 * 1000,
  }));

app.listen(3002, () => {
  console.log('server is starting');
  })