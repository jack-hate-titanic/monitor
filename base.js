/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-08-06 16:09:54
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-08-06 16:17:09
 * @FilePath: /frontDemo/base.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function add(num) {
  return num + 1;
}

function add1(num) {
  return num + 2;
}
function compose(...funs) {
  // 判断如果funs只有一个的时候
  if (funs.length === 1) {
    return funs[0];
  }  
  return funs.reduce((a, b) => {
    return (...args) => b(a(...args));
  })
}


let a = compose(add,add1);
console.log(a(2));