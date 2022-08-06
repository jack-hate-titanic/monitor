/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-26 15:10:48
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-26 15:16:17
 * @FilePath: /frontDemo/koa1/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa');
const app = new Koa();
app.use(ctx => {
  ctx.response.body = 'hello world'
})

app.listen(3001);