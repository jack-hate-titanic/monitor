/*
 * @Author: your name
 * @Date: 2022-03-05 20:10:02
 * @LastEditTime: 2022-03-06 11:00:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/less/public/ceshi.js
 */

const myNew = function (func,...args) {
  // 继承基因
  const instance = myCreate(func.prototype);
  // 继承属性
  const res = func.apply(instance,args);
  return res ? res : instance;
}


const myCreate = function (proto) {
  function Func() { };
  Func.prototype = proto;
  return new Func();
}

const myExtends = function (child, parent) {
  // 继承基因
  child.prototype.__proto__ = parent.prototype;
}

function Wife(name, age) {
  this.name = name;
  this.age = age;
  this.sex = '女'
}

Wife.prototype.study = function () {
  console.log('好好学习，天天向上');
}

const myWife = myNew(Wife, '小青', 28);

function Son(name, age) {
  // 实现继承函数
  myExtends(Son, Wife);
  // 相当于super,super的作用就是调用执行parent
  Wife.call(this,name,age)
}

const son = new Son("天一", 0);

son.study();




