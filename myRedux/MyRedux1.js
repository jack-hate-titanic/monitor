/*
 * @Author: your name
 * @Date: 2022-01-13 20:45:25
 * @LastEditTime: 2022-01-13 22:14:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myRedux/MyRedux1.js
 */
// 创建store，返回三个方法
function createStore(reducer, initialState) {
  // 闭包存储状态
  let state = initialState;
  // 存储订阅者函数
  const listeners = [];
  // 获取所有state
  function getState() {
    return state;
  }
  // 执行订阅方法
  function subscribe(func) {
    listeners.push(func);
  }
  // 触发state变化
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }
  return {
    getState,
    subscribe,
    dispatch,
  };
}
