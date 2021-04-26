/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-26 16:06:42
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-26 16:08:20
 * @FilePath: \LeetCode-Code\codes\BinarySearch\capacity-to-ship-packages-within-d-days\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */

var shipWithinDays = function (weights, D) {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b);

  while (left < right) {
    let mid = ((left + right) / 2) | 0;
    let cost = 1,
      curr = 0;

    for (let weight of weights) {
      if (curr + weight > mid) {
        cost++;
        curr = 0;
      }
      curr += weight;
    }

    cost <= D ? (right = mid) : (left = mid + 1);
  }

  return left;
  
};
