/*
 * @Author: your name
 * @Date: 2022-01-16 13:27:23
 * @LastEditTime: 2022-01-22 21:04:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /MyKoa/koa/lib/application.js
 */
const http = require("http");
const context = require("./context");
const request = require("./request");
const response = require("./response");

class Application {
  constructor() {
    this.middleware = [];
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }

  // 异步递归遍历处理函数
  compose(funcArr) {
    return function (context) {
      const dispatch = (index) => {
        if (index >= funcArr.length) return Promise.resolve();
        const fn = funcArr[index];
        return Promise.resolve(fn(context, () => dispatch(index + 1)));
      };

      return dispatch(0);
    };
  }

  createContext(req, res) {
    const context = Object.create(this.context);
    // koa自己的req,res
    const request = (context.request = Object.create(this.request));
    const response = (context.response = Object.create(this.response));
    context.app = request.app = response.app = this;
    // 继承http的req,res;
    context.req = request.req = response.req = req;
    context.res = request.res = response.res = res;
    return context;
  }

  callback() {
    const middlewareCompose = this.compose(this.middleware);
    const handleCallBack = (req, res) => {
      const context = this.createContext(req, res);
      middlewareCompose(context).then(() => {
        res.end("hello koa");
      });
    };
    return handleCallBack;
  }

  use(fn) {
    this.middleware.push(fn);
  }
}

module.exports = Application;
