/*
 * @Author: your name
 * @Date: 2021-12-21 22:45:15
 * @LastEditTime: 2021-12-22 21:48:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /redux/redux/src/mini-router-dom/BrowserRouter.js
 */
import { useEffect, useState, createContext } from "react";
/**
 * @description: 1.监听路由变化(popState) 2.改变path变量 3.页面跳转(pushState) 4.页面刷新
 * @param {*}
 * @return {*}
 */
export const RouterContext = createContext();
export const HistoryContext = createContext();
export default function BrowserRouter(props) {
  // 页面刷新
  const [path, setPath] = useState(() => {
    const pathname = window.location.pathname;
    return pathname || "/";
  });

  // 改变path
  const handlePopState = () => {
    // ui同步
    const { pathname } = window.location;
    setPath(pathname);
  };

  // 监听popstate
  useEffect(() => {
    // 路由操作
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const push = (path) => {
    // 路由操作
    window.history.pushState({ path }, null, path);
    // ui同步
    setPath(path);
  };

  return (
    <RouterContext.Provider value={path}>
      <HistoryContext.Provider
        value={{
          push,
        }}
      >
        {props.children}
      </HistoryContext.Provider>
    </RouterContext.Provider>
  );
}
