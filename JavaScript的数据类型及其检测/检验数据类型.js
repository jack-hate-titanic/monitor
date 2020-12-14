// typeof不能判断null，array
typeof null; //object
typeof [];

// instanceof不能检测字面量方式创建基本数据类型
// 不能检测null和undefined
console.log(1 instanceof Number); //false
console.log(new Number(1) instanceof Number); //true

// object.prototype.toString.call()最准确的常用方式
