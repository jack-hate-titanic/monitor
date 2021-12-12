/*
 * @Author: your name
 * @Date: 2021-12-12 16:01:59
 * @LastEditTime: 2021-12-12 17:01:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/store/index.js
 */
import { createStore } from "redux";
import rootReducer from "./reducers/root.reducer";
export const store = createStore(rootReducer);
