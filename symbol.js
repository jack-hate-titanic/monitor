/*
 * @Author: your name
 * @Date: 2022-05-15 10:02:51
 * @LastEditTime: 2022-05-15 11:06:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/symbol.js
 */
(function () {
  let root = this;
  let SymbolPolyfill = function Symbol(description) {
    if (this instanceof SymbolPolyfill) {
      throw new TypeError('symbol is not a constructor');
    }
    let descString = description === undefined ? undefined : String(description);
    console.log(descString);
    let symbol = Object.create({
      toString: function () {
        return `Symbol(${this.__Description__})`
      }
    });
    Object.defineProperties(symbol, {
      '__Description__': {
        value: descString,
        writable: false,
        enumerable: false,
        configurable: false
      }

      
    })
    return symbol;
  }
  root.SymbolPolyfill = SymbolPolyfill;
})();

let a = SymbolPolyfill('2');
console.log(a);