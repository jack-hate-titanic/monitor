/*
 * @Author: your name
 * @Date: 2022-01-22 19:02:40
 * @LastEditTime: 2022-01-22 21:53:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /MyKoa/koa/lib/application1.js
 */
const Emitter = require("events");
const http = require("http");

class Application extends Emitter {
  constructor() {
    // 先执行父类的构造函数
    // 在进行一些初始化工作
    super();
    // 用来存储中间件函数
    this.middleware = [];
    this.context = {};
  }
  use(func) {
    // 中间件必须是一个函数，不然就报错
    if (typeof func !== "function") {
      throw new TypeError("middleware must be a function");
    }
    this.middleware.push(func);
    // 实现链式调用
    return this;
  }

  // 异步递归遍历函数
  compose(middleware) {
    return function (context) {
      const dispatch = (i) => {
        let fn = middleware[i];
        if (i === middleware.length) {
          return Promise.resolve();
        }
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      };
      // 执行第一个中间件
      return dispatch(0);
    };
  }

  createContext(req, res) {
    const context = Object.create(this.context);
    context.app = this;
    context.req = req;
    context.res = res;
    return context;
  }

  callback() {
    // 把所有的中间件传给compose，来返回一个函数
    const middlewareCompose = this.compose(this.middleware);
    // callback返回值必须符合http.createServer参数形式
    const handleRequest = (req, res) => {
      // 创建格式化上下文
      const context = this.createContext(req, res);
      middlewareCompose(context);
    };
    return handleRequest;
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
}

module.exports = Application;
