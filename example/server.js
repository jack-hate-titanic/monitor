/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-08-13 21:28:52
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-13 21:44:09
 * @FilePath: /monitor/example/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa');
const chalk = require('chalk');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack')
const static = require('koa-static');
const path = require('path');

const app = new Koa();
const config = require('./webpack.config');

async function start() {
  const compiler = webpack(config);
  try { 
    const middleware = await koaWebpack({
      compiler
    })
    const port = process.env.PORT || 3000;
    app.use(middleware)
    app.use(static(path.join(__dirname)));
    app.listen(port, () => {
      console.log(chalk.red(`启动成功,端口号为${port}`));
    })
  } catch (e) {
    console.log(chalk.red(e))
  }
}
start();
