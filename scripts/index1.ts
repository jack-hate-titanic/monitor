/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-06-10 20:26:17
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-06-12 21:54:02
 * @FilePath: /scripts/index1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function debounce(fn: typeof getName, time:number) {
  let timer;
  return function(...args: unknown[]){
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(null, args)
    }, time);
  }
  
}

function getName(name:string) {
  return name;
}

let fn = debounce(getName, 500);

setInterval(() => {
  fn('nihao')
}, 300);

export {}

