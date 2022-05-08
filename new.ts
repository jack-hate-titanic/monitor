/*
 * @Author: your name
 * @Date: 2022-05-08 12:40:20
 * @LastEditTime: 2022-05-08 13:27:53
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/new.ts
 */
function myNew(fn:(...args:any[])=>any) {
  let obj = Object.create(fn.prototype);
  fn.call(obj);
}

function Person(name:string) {
  this.name = name;
}

const p = myNew(Person);
console.log(p.name);
