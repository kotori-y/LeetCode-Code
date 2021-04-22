/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-22 14:51:38
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-22 14:54:36
 * @FilePath: \LeetCode-Code\codes\Others\Reverse-Integer\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  var result = 0;

  while (x !== 0) {
    result = result * 10 + (x % 10);
    if (!((result | 0) === result)) {
      // using bitwise operation to judge whether overflow
      return 0;
    }
    x = (x / 10) | 0; /** int **/
  }
  return result;
};
