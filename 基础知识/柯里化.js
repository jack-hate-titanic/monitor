function add(x) {
  return function (y) {
    return x + y;
  };
}

const addFunc = add(1);
console.log(addFunc(5));
