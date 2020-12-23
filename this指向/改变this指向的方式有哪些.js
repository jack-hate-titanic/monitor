// 改变this指向的方式
// 改变this的方式主要是：call，apply，bind

// 区别
//  1.call和apply改变this都是立即执行，不同的是call参数是一个一个传，apply接受一个数组
//  2.bind绑定this之后返回一个新的函数

var name = "globalName";
const getInfo = function (age) {
  return `name:${this.name},age:${age}`;
};

const obj1 = {
  name: "name1",
};

getInfo(12); //name:globalName,age:12
console.log("---------------", getInfo.call(obj1, 15)); //name:name1,age:15
console.log("---------------", getInfo.apply(obj1, [16])); //name:name1,age:16

const objBind = getInfo.bind(obj1, 30);
console.log("---------------", objBind()); // name:name1,age:30
