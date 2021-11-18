/*
 * @Author: your name
 * @Date: 2021-11-11 06:39:26
 * @LastEditTime: 2021-11-18 21:47:35
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/about/about.js
 */

import React, { useReducer, useMemo } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
  }
}

function About() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      about
      <span onClick={() => dispatch({ type: "increment" })}>
        现在一共有{count}个
      </span>
    </div>
  );
}

export default About;
