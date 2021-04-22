/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-22 09:09:40
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-22 09:14:00
 * @FilePath: \LeetCode-Code\codes\Others\Longest-Palindromic-Substring\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  var boo = (left, right) => {
    if (left < 0 || right >= s.length || s[left] !== s[right]) {
      return [left + 1, right - 1];
    }
    return boo(left - 1, right + 1);
  };

  var start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    const [leftOdd, rightOdd] = boo(i, i);
    const [leftEven, rightEven] = boo(i, i + 1);

    if (rightOdd - leftOdd > end - start) {
      [start, end] = [leftOdd, rightOdd];
    }

    if (rightEven - leftEven > end - start) {
      [start, end] = [leftEven, rightEven];
    }
  }

  return s.slice(start, end + 1);
};
