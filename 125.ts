/*
 * @Author: your name
 * @Date: 2022-05-10 21:25:44
 * @LastEditTime: 2022-05-10 21:35:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/125.ts
 */
function isPalindrome(s: string): boolean {
  s = s.replace(/\W/g, '').replace('_','').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

let str = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str));