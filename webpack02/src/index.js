/*
 * @Author: your name
 * @Date: 2021-10-14 22:53:31
 * @LastEditTime: 2021-10-20 08:36:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack02/src/index.js
 */
import "./index.less";
import webpackImg from "../public/webpack.png";
if (module && module.hot) {
  module.hot.accept();
}
document.querySelector("#root").innerHTML = "777";
