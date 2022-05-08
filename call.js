/*
 * @Author: your name
 * @Date: 2022-05-06 21:57:14
 * @LastEditTime: 2022-05-06 22:31:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/call.js
 */
Function.prototype.myCall = function () {
  let args = Array.from(arguments);
  let context = args[0];
  let params = args.slice(1);
  context.fn = this;
  let result = context.fn(...params);
  Reflect.deleteProperty(context, 'fn');
  return result;
}


function getName(age) {
  this.name = 'ws';
  this.age = age;
  return this;
}

let obj = {

}

console.log(getName.myCall(obj,'2'));

