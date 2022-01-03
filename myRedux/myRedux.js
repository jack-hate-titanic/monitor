/*
 * @Author: your name
 * @Date: 2021-12-30 22:28:02
 * @LastEditTime: 2021-12-30 22:39:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myRedux/myRedux.js
 */
function createStore(reducer, preloadedState) {
  //store  对象中存储的状态
  // currentState不能执行完就消失，所以要使用闭包
  var currentState = preloadedState;
  // 存放订阅者函数
  var currentListeners = [];
  function getState() {
    return currentState;
  }
  // 触发action
  function dispatch(action) {
    currentState = reducer(currentState, action);
    // 循环数组 调用订阅者
    for (var i = 0; i < currentListeners.length; i++) {
      // 获取订阅者
      var listener = currentListeners[i];
      // 调阅订阅者
      listener();
    }
  }
  // 订阅状态
  function subscribe(listener) {
    currentListeners.push(listener);
  }
  const store = {
    dispatch,
    getState,
    subscribe,
  };
  return store;
}
