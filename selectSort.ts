/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2022-05-26 22:24:03
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2022-05-26 22:37:44
 * @FilePath: /frontDemo/selectSort.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function selectSort(nums:number[]) {
  let length = nums.length;
  for (let i = 0; i < length; i++){
    let s = i;
    for (let j = i+1; j < length; j++){
      if (nums[j] < nums[s]) {
        s = j;
      }
    }
    [nums[i], nums[s]] = [nums[s], nums[i]];
  }
  
}

let nums1 = [6, 12, 3, 1, 45];
selectSort(nums1);
console.log(nums1);