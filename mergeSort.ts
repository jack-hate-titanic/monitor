/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-28 10:03:24
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-28 10:45:22
 * @FilePath: /frontDemo/mergeSort.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function mergeArr(nums1: number[], nums2: number[],result:number[]) {
  let first = nums1.length - 1;
  let second = nums2.length - 1;
  let i = result.length - 1;
  while(first.length){}

}


function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  // 获取中间的数字
  let center = Math.floor(nums.length / 2);
  let left = mergeSort(nums.slice(0, center));
  let right = mergeSort(nums.slice(center));
  // 不到最后异步，这里都不执行
  return mergeArr(left, right,new Array(left.length+right.length));
}

const nums = [33, 453, 3241, 23, 1231];
console.log(mergeSort(nums));

