/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-26 23:09:52
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-26 23:09:53
 * @FilePath: /frontDemo/insertSort.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function insertSort(nums: number[]) {
  let length = nums.length;
  for (let i = 1; i < length; i++){
    for (let j = i - 1; j >=0; j--){
      if (nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
      }
    }
  }
}

let nums = [4, 13, 423, 4521, 1];
insertSort(nums);
console.log(nums);