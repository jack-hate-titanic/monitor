/*
 * @Author: your name
 * @Date: 2021-12-21 22:06:36
 * @LastEditTime: 2021-12-22 21:54:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /redux/redux/src/view/user.js
 */
import { useContext } from "react";
import { HistoryContext } from "../mini-router-dom/BrowserRouter";
export default function User() {
  const { push } = useContext(HistoryContext);

  const onGoToName = () => {
    console.log(push, "push");
    push("/name");
  };
  return (
    <div>
      user<button onClick={onGoToName}>跳转</button>
    </div>
  );
}
