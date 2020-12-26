// 链式调用的核心就在于调用完的方法将自身实例返回
// 示例一
function Class1() {
  console.log("初始化");
}

Class1.prototype.method = function (params) {
  console.log(params);
  return this;
};

const c1 = new Class1();
c1.method("你好").method("呀");

// 示例2
const obj = {
  a: function () {
    console.log("a");
    return this;
  },
  b: function () {
    console.log("b");
    return this;
  },
};

obj.a().b();
