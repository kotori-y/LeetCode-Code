'''
Description:
Author: Kotori Y
Date: 2021-04-20 17:07:42
LastEditors: Kotori Y
LastEditTime: 2021-04-20 17:08:31
FilePath: \LeetCode-Code\codes\HashTable\LongestSubstringWithoutRepeatingCharacters\script.py
AuthorMail: kotori@cbdd.me
'''

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        hashTable = {}
        leftIdx = maxLen = 0
        for rightIdx, c in enumerate(s):
            if c in hashTable:
                leftIdx = max(hashTable[c]+1, leftIdx)
            hashTable[c] = rightIdx
            maxLen = max(maxLen, rightIdx- leftIdx + 1)
        return maxLen