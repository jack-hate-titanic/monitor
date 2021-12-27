/*
 * @Author: your name
 * @Date: 2021-12-11 19:06:36
 * @LastEditTime: 2021-12-22 21:29:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /redux/redux/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "./mini-router-dom";
import "./index.css";
import User from "./view/User";
import Name from "./view/Name";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={User} />
    <Route path="/name" component={Name} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
