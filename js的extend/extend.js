class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + "叫");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

const cat = new Cat("小猫");

cat.speak();
