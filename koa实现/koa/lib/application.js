/*
 * @Author: your name
 * @Date: 2021-10-10 18:57:26
 * @LastEditTime: 2021-10-10 20:01:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /frontDemo/koa实现/koa/lib/application.js
 */
const http = require("http");
const context = require("./context");
const request = require("./request");
const response = require("./response");

// 整个的应用
class Application {
  constructor() {
    // this.context.__proto__=context;
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(request);
  }

  use(fn) {
    this.fn = fn;
  }

  handleRequest = (req, res) => {
    this.fn(req, res);
  };

  listen() {
    const server = http.createServer(this.handleRequest);
    server.listen(...arguments);
  }
}

module.exports = Application;
