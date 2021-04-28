'''
Description: 
Author: Kotori Y
Date: 2021-04-28 10:05:55
LastEditors: Kotori Y
LastEditTime: 2021-04-28 10:06:17
FilePath: \LeetCode-Code\codes\TwoPointers\sum-of-square-numbers\script.py
AuthorMail: kotori@cbdd.me
'''


class Solution:
    def judgeSquareSum(self, c: int) -> bool:

        left = 0
        right = int(c ** 0.5)

        while left <= right:

            temp = left ** 2 + right ** 2

            if temp == c:
                return True

            if temp > c:
                right -= 1
            else:
                left += 1

        return False
