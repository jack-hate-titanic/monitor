/*
 * @Author: your name
 * @Date: 2022-01-15 18:20:37
 * @LastEditTime: 2022-01-22 11:56:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /myRequire/index.js
 */

const path = require("path");
const fs = require("fs");
const vm = require("vm");

function Module(id) {
  this.id = id;
  this.exports = {};
}

Module._wrapper = [
  "(function(module,exports,require,__filename,__dirname){",
  "})",
];

Module._extension = {
  ".js"(module) {
    const content = fs.readFileSync(module.id, "utf-8");
    const __filename = module.id;
    const __dirname = path.dirname(module.id);
    const exports = module.exports;
    const func = vm.runInThisContext(
      Module._wrapper[0] + content + Module._wrapper[1]
    );

    func.call(exports, module, exports, myRequire, __filename, __dirname);
  },
  ".json"() {},
};

Module.prototype.load = function (module) {
  const extname = path.extname(module.id);
  Module._extension[extname](module);
};

Module._resolveFileName = function (filename) {
  // 获取绝对路径
  let abs = path.join(__dirname, filename);
  if (fs.existsSync(abs)) {
    return abs;
  } else {
    const suffixArr = Object.keys(Module._extension);
    for (let suffix of suffixArr) {
      abs = `${abs}${suffix}`;
      if (fs.existsSync(abs)) {
        return abs;
      }
    }
  }
};

Module._cache = {};

function myRequire(filename) {
  // 1.绝对路径
  let abs = Module._resolveFileName(filename);
  // 2.缓存优先
  let isExistsCache = Module._cache[abs];
  if (isExistsCache) return isExistsCache.exports;

  // 编译执行
  const module = new Module(abs);
  MyModule._cache[abs] = module;
  module.load(module);
  return module.exports;
}

const { a } = myRequire("v");

console.log(a);
