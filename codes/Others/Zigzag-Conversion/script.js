/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-22 13:17:13
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-22 13:17:50
 * @FilePath: \LeetCode-Code\codes\Others\Zigzag-Conversion\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }

  var row = 0,
    step = -1;
    
  var result = Array(numRows).fill("");

  for (let c of s) {
    result[row] = result[row].concat(c);
    step = row === 0 || row === numRows - 1 ? -step : step;
    row += step;
  }

  return result.join("");
};
