/*
 * @Author: your name
 * @Date: 2022-04-20 22:40:55
 * @LastEditTime: 2022-04-20 22:42:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/调用栈/ceshi.js
 */
function Parent(name) {
  this.name = name;
}

function Child(name) {
  Parent.call(this);
  this.name = name;
}

Child.prototype = Object.create(Parent.prototype);

console.log(Child.prototype);

