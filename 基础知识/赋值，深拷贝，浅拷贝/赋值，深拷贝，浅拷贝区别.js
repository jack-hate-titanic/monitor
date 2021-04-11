//赋值和深/浅拷贝的区别
//这三者的区别如下，不过比较的前提都是针对引用类型：

//赋值:当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。

//浅拷贝：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存，会相互影响。

//深拷贝：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。
//赋值：
// let obj1 = {
//   name: "小明",
//   family: {
//     father: "111",
//     mother: "2222",
//   },
// };

// let obj2 = obj1;
// obj2.name = "小丽";
// obj2.family = {
//   father: "333",
//   mother: "444",
// };
// console.log(obj1); //{ name: '小丽', family: { father: '333', mother: '444' } }
// console.log(obj2); //{ name: '小丽', family: { father: '333', mother: '444' } }

// 浅拷贝
const shadowClone = (source) => {
  const target = {};
  for (let i in source) {
    // 因为for  in遍历对象的时候还会遍历原型上面的属性，所以需要hasOwnProperty判断一下
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
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

let obj2 = shadowClone(obj1);
obj2.name = "小丽";
obj2.family.father = "dddd";
console.log(obj1);
// {
//   name: '小明',
//   family: {
//     father: 'dddd',
//     mother: '2222',
//     sister: { name: 'aaaa', age: 'bbb' }
//   }
// }
console.log(obj2);
// {
//   name: '小丽',
//   family: {
//     father: 'dddd',
//     mother: '2222',
//     sister: { name: 'aaaa', age: 'bbb' }
//   }
// }

//参考文章

//浅拷贝和深拷贝[https://github.com/ljianshu/Blog/issues/5]
