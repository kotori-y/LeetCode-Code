'''
Description: 
Author: Kotori Y
Date: 2021-04-22 14:56:50
LastEditors: Kotori Y
LastEditTime: 2021-04-22 14:57:10
FilePath: \LeetCode-Code\codes\Others\Reverse-Integer\script.py
AuthorMail: kotori@cbdd.me
'''


class Solution:
    def reverse(self, x: int) -> int:

        res, temp = 0, abs(x)
        boundry = (1 << 31) - 1 if x > 0 else 1 << 31

        while temp > 0:
            res = res * 10 + temp % 10
            if res > boundry:
                return 0
            temp //= 10

        return res if x > 0 else -res
