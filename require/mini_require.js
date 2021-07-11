// require其实就是实现了模块化
// commonJs
// 特点：1值的拷贝   2运行时加载   3同步运行
const path = require("path");
const fs = require("fs");
const vm = require("vm");
let wrapper = ["(function(exports,module,require,__dirname,__filename){", "})"];

class MyModule {
  constructor(id) {
    this.id = id; // id就是地址
    this.exports = {};
  }

  // 哈希查找更快
  // 不希望被外界访问到的，放到静态方法中
  static _cache = {};
  static _extension = {
    ".js": (module) => {
      //  静态方法里面需要使用module
      const script = fs.readFileSync(module.id, "utf8");
      let functStr = wrapper[0] + script + wrapper[1];
      let fn = vm.runInThisContext(functStr);
      fn.call(module.exports, module.exports, module, MyRequire);
    },
  };

  load = () => {
    let ext = path.extname(this.id);
    MyModule._extension[ext](this);
  };
}

const MyRequire = (filePath) => {
  const absPath = path.resolve(__dirname, filePath);
  if (MyModule._cache[absPath]) {
    return MyModule._cache[absPath].exports;
  }
  let module = new MyModule(absPath);
  MyModule._cache[absPath] = module;
  module.load();
  return module.exports; // 只需要返回module.exports 属性
};

const a = MyRequire("./a.js");
console.log(a);
