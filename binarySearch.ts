/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-28 16:55:47
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-28 17:01:39
 * @FilePath: /frontDemo/binarySearch.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function binarySearch(nums:number[],target:number) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;;
    } else {
      left = mid+1;
    }
  }
  return -1;
}


const nums = [234, 23, 4, 2341, 231, 5];
console.log(binarySearch(nums,4));

