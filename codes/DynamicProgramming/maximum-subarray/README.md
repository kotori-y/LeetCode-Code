<!--
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-26 11:00:18
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-26 12:16:42
 * @FilePath: \LeetCode-Code\codes\DynamicProgramming\maximum-subarray\README.md
 * @AuthorMail: kotori@cbdd.me
-->

## [最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

给定一个整数数组<code>nums</code>，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

```
输入：nums = [1]
输出：1
```

```
输入：nums = [-1]
输出：-1
```

### 题解

<i>一道十分简单的动态规划的题。</i>

假设*f(i)*为第i个数结尾的“连续子数组的最大和”，那么*f(i)*与*f(i-1)*的关系为*f(i-1)*和*nums[i]*之和，与*nums[i]*中较大的那个数（此处的*nums[i]*表示数组中第*i*个数，从1开始），于是可以写出这样的动态规划转移方程：

***f(i) = max{ f(i-1) + nums[i], nums[i] }***

```javascript

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

```