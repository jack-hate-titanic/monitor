import React,{ memo, useCallback, useEffect, useState, useRef,forwardRef, useImperativeHandle } from "react";

/*
 * @Author: your name
 * @Date: 2022-04-10 10:59:59
 * @LastEditTime: 2022-05-03 14:12:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/实现hooks/hooks/src/App.tsx
 */
function App() {
  const buttonRef = useRef(null);
  return (
    <div onClick={()=>buttonRef.current.alert()}>
      <Button2 ref={buttonRef}>按钮</Button2>
    </div>
  )
}

const Button2 = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      alert: () => {
        alert('111');
      }
    }
  })
  
  return <button className="red">{ props.children}</button>
})

export default App;