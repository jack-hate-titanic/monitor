/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-31 08:12:40
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-31 08:15:00
 * @FilePath: /frontDemo/decorator.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

MyTestableClass.isTestable // true