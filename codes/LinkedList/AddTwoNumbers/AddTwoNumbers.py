'''
Description: python solution of AddTwoNumbers (https://leetcode-cn.com/problems/add-two-numbers/)
Author: Kotori Y
Date: 2021-04-20 16:49:38
LastEditors: Kotori Y
LastEditTime: 2021-04-20 16:51:04
FilePath: \LeetCode-Code\codes\LinkedList\AddTwoNumbers\AddTwoNumbers.py
AuthorMail: kotori@cbdd.me
'''

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        head, tail = [None, None]
        carry = 0

        while (l1 or l2):

            n1 = l1.val if l1 else 0
            n2 = l2.val if l2 else 0

            sum_ = n1 + n2 + carry
            carry = sum_ // 10

            if not head:
                head = tail = ListNode(sum_ % 10)
            else:
                tail.next = ListNode(sum_ % 10)
                tail = tail.next

            if l1:
                l1 = l1.next

            if l2:
                l2 = l2.next

        if (carry > 0):
            tail.next = ListNode(carry)
        return head
