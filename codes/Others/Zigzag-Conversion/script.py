'''
Description: 
Author: Kotori Y
Date: 2021-04-22 13:14:37
LastEditors: Kotori Y
LastEditTime: 2021-04-22 13:16:50
FilePath: \LeetCode-Code\codes\Others\Zigzag-Conversion\script.py
AuthorMail: kotori@cbdd.me
'''


class Solution:
    def convert(self, s: str, numRows: int) -> str:

        if numRows < 2:
            return s

        result = ["" for _ in range(numRows)]
        row, step = 0, -1
        for c in s:
            result[row] += c
            step *= -step if (row == 0) or (row == numRows-1) else step
            row += step

        return ''.join(result)
