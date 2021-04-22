'''
Description: 
Author: Kotori Y
Date: 2021-04-22 09:14:19
LastEditors: Kotori Y
LastEditTime: 2021-04-22 09:14:20
FilePath: \LeetCode-Code\codes\Others\Longest-Palindromic-Substring\script.py
AuthorMail: kotori@cbdd.me
'''

class Solution:
    def boo(self, s, left, right):
        if (left < 0) or (right >= len(s)) or (s[left] != s[right]):
            return [left+1, right-1]
        return self.boo(s, left-1, right+1)
        
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        start, end = 0, 0

        for i in range(n):
            leftOdd, rightOdd = self.boo(s, i, i)
            leftEven, rightEven = self.boo(s, i, i+1)

            if rightOdd - leftOdd > end - start:
                start, end = leftOdd, rightOdd
            if rightEven - leftEven > end - start:
                start, end = leftEven, rightEven

        return s[start: end+1]