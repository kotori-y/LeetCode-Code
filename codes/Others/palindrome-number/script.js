/*
 * @Description: 
 * @Author: Kotori Y
 * @Date: 2021-04-26 12:58:55
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-26 12:59:26
 * @FilePath: \LeetCode-Code\codes\Others\palindrome-number\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {number} x
 * @return {boolean}
 */

// only should loop a half of number

var isPalindrome = function (x) {
  if (x < 0 || (x > 0 && x % 10 === 0)) {
    return false;
  }

  var converted = 0;
  while (x > converted) {
    converted = converted * 10 + (x % 10);
    x = (x / 10) | 0;
  }
  return ((converted / 10) | 0) === x || x === converted;
};
