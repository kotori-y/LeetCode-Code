/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-26 11:03:28
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-26 11:03:44
 * @FilePath: \LeetCode-Code\codes\DynamicProgramming\maximum-subarray\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// f(i) = max{f(i-i)+nums[i], nums[i]}

var maxSubArray = function (nums) {
  let prev = 0,
    ans = nums[0];
  nums.forEach((x) => {
    prev = Math.max(prev + x, x);
    ans = Math.max(prev, ans);
  });
  return ans;
};
