'''
Description: 
Author: Kotori Y
Date: 2021-04-26 11:03:52
LastEditors: Kotori Y
LastEditTime: 2021-04-26 11:04:05
FilePath: \LeetCode-Code\codes\DynamicProgramming\maximum-subarray\script.py
AuthorMail: kotori@cbdd.me
'''

# f(i) = max{f(i-i)+nums[i], nums[i]}


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        prev, ans = 0, nums[0]
        for num in nums:
            prev = max([prev+num, num])
            ans = max([ans, prev])
        return ans
