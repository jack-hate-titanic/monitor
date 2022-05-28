/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-26 21:35:36
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-26 22:09:08
 * @FilePath: /frontDemo/bubbleSort.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function bubbleSort(nums: number[]) {
  const length = nums.length;
  for (let i = 0; i < length; i++){
    for (let j = 1; j < length - i; j++){
      if (nums[j-1] > nums[j]) {
        [nums[j-1], nums[j]] = [nums[j], nums[j-1]];
      }
    }
  }
}
// export const bubbleSort = function (nums:number[]) {
//   // 缓存数组长度
//   const len = nums.length;
//   // 冒泡排序时间复杂度为O(n^2),所以上来就两个for循环
//   // 第一层循环可以使每次把最大的值，放到数组的最后面
//   for (let i = 0; i < len; i++){
//       // 第二层值只需要遍历len-i次，因为最大的值已经到数组最后面了
//       // 第二层循环是用来交换的
//     for (let j = 0; j < len - i; j++){
//       console.log(nums[j+1]);
//           if (nums[j] > nums[j + 1]) {
//           //js独特交换方式
//               [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//           }
//       }
//   }
// }

const nums = [2, 4, 6, 31, 5];
bubbleSort(nums);
console.log(nums);
