const a = [1, 2, 3, 4];

const sum = a.reduce((init, item) => {
  return init + item;
});

console.log(a, sum);
