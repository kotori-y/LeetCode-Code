/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-28 09:59:46
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-28 10:00:31
 * @FilePath: \LeetCode-Code\codes\TwoPointers\sum-of-square-numbers\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {number} c
 * @return {boolean}
 */

// if ... else if ... else is terrible

var judgeSquareSum = function (c) {
  let left = 0,
    right = Math.sqrt(c) | 0;

  while (left <= right) {
    const temp = left ** 2 + right ** 2;

    if (temp === c) {
      return true;
    }

    temp > c ? right-- : left++;
  }

  return false;
};