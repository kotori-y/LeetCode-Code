/*
 * @Description: JS solution of TwoSum (https://leetcode-cn.com/problems/two-sum/)
 * @Author: Kotori Y
 * @Date: 2021-04-19 23:42:54
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-19 23:43:27
 * @FilePath: \LeetCode-Code\codes\HashTable\TwoSum\TwoSum.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashTable = new Map()
    for (let idx = 0; idx <= nums.length-1; idx++) {
        const num = nums[idx]
        if (hashTable.has(target - num)) {
            return [hashTable.get(target - num), idx]
        }
        hashTable.set(num, idx)
    }
};