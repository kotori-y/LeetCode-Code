'''
Description: python solution of TwoSum (https://leetcode-cn.com/problems/two-sum/)
Author: Kotori Y
Date: 2021-04-19 23:41:38
LastEditors: Kotori Y
LastEditTime: 2021-04-19 23:42:42
FilePath: \LeetCode-Code\codes\HashTable\TwoSum\TwoSum.py
AuthorMail: kotori@cbdd.me
'''
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashed = {}
        for idx, num in enumerate(nums):
            if (target - num) in hashed:
                return [hashed[target - num], idx]
            hashed[num] = idx