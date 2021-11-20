/*
 * @Author: your name
 * @Date: 2021-11-11 06:39:26
 * @LastEditTime: 2021-11-19 06:55:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/about/about.js
 */

import React, {
  useReducer,
  useMemo,
  memo,
  useCallback,
  useState,
  useRef,
} from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
  }
}

const Section = memo((props) => {
  console.log("组件重新渲染");
  return <div>{props.hello()}</div>;
});

function About() {
  const [count, setCount] = useState(0);
  const username = useRef();
  const result = useMemo(() => {
    return count * 2;
  }, [count]);
  const func = useCallback(() => {
    return <div>22222</div>;
  }, [setCount]);
  return (
    <div>
      about
      <span
        onClick={() => console.log(username.current.innerHTML)}
        ref={username}
      >
        现在一共有{count}个,还有{result}
      </span>
      <Section hello={func} />
    </div>
  );
}

export default About;

function App() {
  const username = useRef();
  const handler = () => console.log(username);
  return <div ref={username} onClick={handler}></div>;
}
