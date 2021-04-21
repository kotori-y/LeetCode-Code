'''
Description:
Author: Kotori Y
Date: 2021-04-21 11:54:00
LastEditors: Kotori Y
LastEditTime: 2021-04-21 11:56:24
FilePath: \LeetCode-Code\codes\BinarySearch\Median-of-Two-Sorted-Arrays\script.py
AuthorMail: kotori@cbdd.me
'''


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        if len(nums1) > len(nums2):
            return self.findMedianSortedArrays(nums2, nums1)
        length1, length2 = len(nums1), len(nums2)

        if nums1:
            # the number of elements at left part
            leftLength = (length1 + length2 + 1) // 2

            left = 0
            right = length1

            while True:
                i = left + (right - left + 1) // 2
                j = leftLength - i

                if (i > 0) and nums1[i - 1] > nums2[j]:
                    right = i - 1
                elif (i < length1) and (nums2[j - 1] > nums1[i]):
                    right = i + 1
                    left = i
                else:
                    break

            leftOne = nums1[i-1] if i > 0 else min(nums2)
            leftTwo = nums2[j-1] if j > 0 else min(nums1)

            if (length1 + length2) % 2 == 1:
                return max([leftOne, leftTwo])

            rightOne = nums1[i] if i < length1 else max(nums2)
            rightTwo = nums2[j] if j < length2 else max(nums1)

            n1 = max([leftOne, leftTwo])
            n2 = min([rightOne, rightTwo])
            return (n1 + n2) / 2

        if length2 % 2 == 1:
            return nums2[(length2 - 1)//2]

        return (nums2[(length2-1)//2] + nums2[length2//2]) / 2
