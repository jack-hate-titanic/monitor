const arr = [
  [1, 2],
  [3, 4],
];

// 1.flat方法
const newArr = arr.flat();
console.log(newArr);

// 2.concat 方法
const newArr1 = [].concat(...arr);
console.log(newArr1);
