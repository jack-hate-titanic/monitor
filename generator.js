/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-07-17 12:20:34
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-07-17 12:27:15
 * @FilePath: /frontDemo/generator.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEonsole.
 */
// * yield next {value: 1,done: false}
function* gen() {
  let a = yield 1;
  console.log(a);
}
console.log(gen().next());