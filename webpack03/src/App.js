/*
 * @Author: your name
 * @Date: 2021-11-05 17:54:29
 * @LastEditTime: 2021-11-11 07:06:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/desc.js
 */

import React from "react";
import { Link } from "react-router-dom";
import styles from "./App.less";

function App() {
  return (
    <div className={styles.App}>
      Hello react
      <Link to="/about">about</Link>
    </div>
  );
}

export default App;
