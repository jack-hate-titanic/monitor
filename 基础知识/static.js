class Dog {
  constructor(name) {
    this.name = name;
  }
  static age = 27;
}

const dog1 = new Dog("小黑");

console.log(Dog.age);
