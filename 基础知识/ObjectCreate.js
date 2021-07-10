function new1(object, ...args) {
  const a = new Object();
  a.__proto__ = object.prototype;
  object.apply(a, args);
  return a;
}

function new2(object, ...args) {
  const a = Object.create(object.prototype);
  object.apply(a, args);
  return a;
}

function Dog(name) {
  this.name = name;
}

Dog.prototype.leg = 4;

const dog1 = new2(Dog, "大黄");
console.log(dog1.name.toString());
