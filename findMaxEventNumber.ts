/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-28 21:17:35
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-28 21:17:36
 * @FilePath: /frontDemo/findMaxEventNumber.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function findMaxEventNumber(nums: number[]) {
  let result = nums.reduce((pre:number, cur:number) => {
    if (!(cur % 2) && cur > pre) {
      return cur;
    }
    return pre;
  }, 0)
  return result;
}

const nums = [432, 3423, 412, 34, 234, 2314, 12];

console.log(findMaxEventNumber(nums));