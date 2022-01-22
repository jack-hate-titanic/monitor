/*
 * @Author: your name
 * @Date: 2022-01-22 15:57:38
 * @LastEditTime: 2022-01-22 18:08:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myRequire/MyModule.js
 */
const path = require("path");
const fs = require("fs");
const vm = require("vm");

function MyModule(id = "") {
  this.id = id;
  this.exports = {};
}

// 定义匿名函数
MyModule._wrapper = [
  `(function(exports,require,module,__filename,__dirname){`,
  `})`,
];

MyModule._extension = {
  ".js": (module) => {
    // 获取文件内容
    const content = fs.readFileSync(module.id, "utf-8");
    const filename = module.id;
    const dirname = path.dirname(filename);
    const fun = vm.runInThisContext(
      MyModule._wrapper[0] + content + MyModule._wrapper[1]
    );
    fun.call(
      module.exports,
      module.exports,
      MyModule.require,
      module,
      filename,
      dirname
    );
  },
  ".json": (module) => {
    const content = fs.readFileSync(module.id, "utf-8");
    module.exports = JSON.parse(content);
  },
};

MyModule._cache = [];

MyModule.resolveFileName = (request) => {
  const filename = path.resolve(request);
  const extname = path.extname(filename);
  if (extname) {
    return filename;
  } else {
    const suffixArr = Object.keys(MyModule._extension);
    for (let suffix of suffixArr) {
      const abs = `${filename}${suffix}`;
      if (fs.existsSync(abs)) {
        return abs;
      }
    }
  }
};

MyModule.prototype.load = (module) => {
  const extname = path.extname(module.id);
  // 根据后缀执行文件内容
  MyModule._extension[extname](module);
};

MyModule.require = (request) => {
  const filename = MyModule.resolveFileName(request);
  // 判断缓存里面是否有模块
  const cacheModule = MyModule._cache[filename];
  if (cacheModule) return cacheModule.exports;
  // 初始化一个新的模块
  const module = new MyModule(filename);
  // load之前就将这个模块缓存下来，这样如果有循环引用就会拿到这个缓存，但是这个缓存里面的exports可能还没有或者不完整
  MyModule._cache[filename] = module;
  module.load(module);
  // 返回模块的exports
  return module.exports;
};

module.exports = MyModule;
