/*
 * @Author: your name
 * @Date: 2021-12-12 16:23:18
 * @LastEditTime: 2021-12-12 16:24:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/store/actions/counter.actions.js
 */
import { createAction } from "redux-actions";

export const addCount = createAction("addCount");

export const reduceCount = createAction("reduceCount");
