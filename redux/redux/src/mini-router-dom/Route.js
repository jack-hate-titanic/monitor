/*
 * @Author: your name
 * @Date: 2021-12-21 22:45:20
 * @LastEditTime: 2021-12-22 21:44:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /redux/redux/src/mini-router-dom/Route.js
 */
import { useContext } from "react";
import { RouterContext } from "./BrowserRouter";
export default function Route(props) {
  const { path: RoutePath, component: RouteComponent } = props;
  const path = useContext(RouterContext);
  return path === RoutePath ? <RouteComponent /> : null;
}
