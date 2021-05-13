// 这是个浅拷贝的方法
function shallowClone(source) {
  var target = {};
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }
  return target;
}

//浅拷贝其实很好理解，就是用闭包的方式把对象的第一层的属性的值都赋值给新的对象，并返回新的对象

function deepClone(source) {
  if (!source) {
    return source;
  }
  const target = new source().constructor();
  for (let name in source) {
    if (source.hasOwnProperty(name)) {
      target[name] = deepClone(source[name]);
    }
  }
  return target;
}
