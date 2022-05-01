import { memo, useCallback, useEffect, useState } from "react";

/*
 * @Author: your name
 * @Date: 2022-04-10 10:59:59
 * @LastEditTime: 2022-04-16 09:00:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/实现hooks/hooks/src/App.tsx
 */
function App() {
  const [count, setCount] = useState(0);
 
  const onSet = useCallback(() => {
    setCount(preCount => {
      return preCount + 1
    } );
  },[]);



  return (
    <div>
      <div>{count}</div>
      <Child onSet={onSet}></Child>
    </div>
  );
}

const Child = memo((props)=> {
  console.log(props);
  return (
    <div onClick={props.onSet}>2222</div>
  )
})

export default App;