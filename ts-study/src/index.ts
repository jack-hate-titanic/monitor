/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-18 20:40:23
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-19 12:24:53
 * @FilePath: /ts-study/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function compose(...funcs: Function[]) {
  return funcs.reduce((pre, cur) => (...args:any) => cur(pre(...args)));
}

let getName = (str: string[]) => {
  return "hello," + str.join("and");
}

let toUpper = (str: string) => {
  console.log(str);
  return str.toUpperCase();
}


let combin = compose(getName, toUpper);
console.log(combin(['xm','ws']));
