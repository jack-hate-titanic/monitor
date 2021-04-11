// 因为你不知道你要拷贝的应用类型有多深，所以我们要用递归的思维来实现深拷贝
//如果是原始类型，无需继续拷贝，直接返回
//如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。
const deepClone = (source) => {
  // 写源码第一步就是考虑数据类型
  // 如果是null或者undefine的时候或者不存在的话
  if (!source) return source;
  // 如果是时间类型
  if (source instanceof Date) return new Date(obj);
  // 如果是正则表达式
  if (source instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof source !== "object") return source;
  let target = new source.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  for (let i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = deepClone(source[i]);
    }
  }
  return target;
};

let obj1 = {
  name: "小明",
  family: {
    father: "111",
    mother: "2222",
    sister: {
      name: "aaaa",
      age: "bbb",
    },
  },
};
let obj2 = deepClone(obj1);
obj2.name = "小丽";
obj2.family.mother = "ddddd";
console.log(obj1);
console.log(obj2);

// 参考文章 如何写出一个惊艳面试官的深拷贝?[https://segmentfault.com/a/1190000020255831]
// 浅拷贝与深拷贝[https://github.com/ljianshu/Blog/issues/5]
