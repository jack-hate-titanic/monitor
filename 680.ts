/*
 * @Author: your name
 * @Date: 2022-05-10 21:47:29
 * @LastEditTime: 2022-05-14 21:05:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /frontDemo/680.ts
 */
function isPalindrome(s: string): boolean {
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

function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return isPalindrome(s.substring(left, right)) || isPalindrome(s.substring(left+1, right+1));
    }
  }
  return true;
};

let s = 'abca';
console.log(validPalindrome(s));