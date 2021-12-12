/*
 * @Author: your name
 * @Date: 2021-12-12 16:03:22
 * @LastEditTime: 2021-12-12 17:00:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/store/reducers/root.reducer.js
 */
import { combineReducers } from "redux";
import countReducer from "./count.reducer";

export default combineReducers({
  count: countReducer,
});
