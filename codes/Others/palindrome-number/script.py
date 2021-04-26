'''
Description: 
Author: Kotori Y
Date: 2021-04-26 12:59:39
LastEditors: Kotori Y
LastEditTime: 2021-04-26 12:59:51
FilePath: \LeetCode-Code\codes\Others\palindrome-number\script.py
AuthorMail: kotori@cbdd.me
'''


class Solution:
    def isPalindrome(self, x: int) -> bool:

        if x < 0 or (x > 0 and x % 10 == 0):
            return False

        converted = 0
        while x > converted:
            converted = converted*10 + x % 10
            x //= 10

        return converted == x or (converted // 10) == x
