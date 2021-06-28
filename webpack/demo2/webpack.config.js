const path = require("path");

module.exports = {
  entry: path.join(__dirname, "/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
