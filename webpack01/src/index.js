/*
 * @Author: your name
 * @Date: 2021-10-04 10:30:36
 * @LastEditTime: 2021-10-06 14:38:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack01/src/index.js
 */
import App from "./App.js";
import "./index.less";
if (module && module.hot) {
  module.hot.accept();
}
document.getElementById("root").innerHTML = App.name;
