/*
 * @Author: your name
 * @Date: 2022-05-09 22:28:23
 * @LastEditTime: 2022-05-09 22:48:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/threeSum.ts
 */
function threeSum(nums: number[]): number[][] {
  let result = [];
  nums = nums.sort((a,b)=>a-b);
  for (let i = 0; i < nums.length; i++){
    let target = 0 - nums[i];
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    if (target >= 0) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        if (nums[left] + nums[right] === target) {
          result.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if(nums[left] + nums[right] < target){
          left++;
        } else if (nums[left] + nums[right] > target) {
          right--;
        }
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));