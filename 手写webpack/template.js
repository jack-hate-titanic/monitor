const template = require("@babel/template").default;
const getNode = template(`export default a`);
console.log(getNode());
