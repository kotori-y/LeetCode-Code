'''
Description: 
Author: Kotori Y
Date: 2021-04-26 16:09:45
LastEditors: Kotori Y
LastEditTime: 2021-04-26 16:10:04
FilePath: \LeetCode-Code\codes\BinarySearch\capacity-to-ship-packages-within-d-days\script.py
AuthorMail: kotori@cbdd.me
'''


class Solution:
    def shipWithinDays(self, weights: List[int], D: int) -> int:

        left, right = max(weights), sum(weights)

        while (left < right):

            mid = (left + right) // 2
            cost, curr = 1, 0

            for weight in weights:
                if curr + weight > mid:
                    cost += 1
                    curr = 0
                curr += weight

            if cost <= D:
                right = mid
            else:
                left = mid + 1

        return left
