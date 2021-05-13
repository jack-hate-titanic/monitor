function strip(num, precision = 12) {
  return parseFloat(num.toPrecision(precision));
}
console.log(strip(0.1 + 0.9999));
console.log(0.1 + 1.8);
