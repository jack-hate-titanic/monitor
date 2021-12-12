/*
 * @Author: your name
 * @Date: 2021-12-12 16:03:58
 * @LastEditTime: 2021-12-12 17:11:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /webpack03/src/store/reducers/count.reducer.js
 */
import { handleActions as createReducer } from "redux-actions";
import { addCount, reduceCount } from "../actions/count.action";

const initialState = { count: 0 };

const handleAddCount = (state, action) => {
  return { ...state, count: action.payload + state.count };
};

export default createReducer(
  {
    [addCount]: handleAddCount,
  },
  initialState
);
