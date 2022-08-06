/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-28 10:47:47
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-28 10:55:23
 * @FilePath: /frontDemo/quickSort.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function quickSort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  let point = nums[nums.length -1];
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length-1; i++){
    if (nums[i] < point) {
      left.push(nums[i])
    } else {
      right.push(nums[i]);
    }
  }
  return quickSort(left).concat(point, quickSort(right));

 }


let nums = [12, 3243, 32, 4, 5345, 342, 5];
console.log(quickSort(nums));