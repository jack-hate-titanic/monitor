/*
 * @Author: your name
 * @Date: 2021-11-20 06:11:39
 * @LastEditTime: 2021-11-20 06:23:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/Home/index.js
 */
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  let timer = useRef();
  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);
  }, []);
  const stopInterval = () => {
    console.log(timer.current);
    clearInterval(timer.current);
  };
  return (
    <div onClick={stopInterval}>
      Home<span>{count}</span>
    </div>
  );
};

export default Home;
