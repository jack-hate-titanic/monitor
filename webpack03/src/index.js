/*
 * @Author: your name
 * @Date: 2021-11-05 17:30:45
 * @LastEditTime: 2021-12-12 17:31:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/index.js
 */
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import App from "./App";
import About from "./About/index";
import Home from "./Home/index";

ReactDom.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
