/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-28 19:27:59
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-28 20:03:04
 * @FilePath: /frontDemo/curry.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function curry(fn, ...args) {
  
  let length = fn.length;
  return function () {
    args = args.concat([...arguments])
    if (args.length < length) {
      return curry.call(this,fn,...args)
    } else {
     
      return fn.apply(this, args);
    }
  }
}

function getName(name1, name2) {
  return name1 + name2;
}

const curryFn = curry(getName);

console.log(curryFn(1));
console.log(curryFn(2));