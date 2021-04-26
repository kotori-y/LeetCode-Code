'''
Description: 
Author: Kotori Y
Date: 2021-04-26 12:47:43
LastEditors: Kotori Y
LastEditTime: 2021-04-26 12:47:51
FilePath: \LeetCode-Code\codes\Tree\increasing-order-search-tree\script.py
AuthorMail: kotori@cbdd.me
'''

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def inOrder(self, node, res):
        if not node:
            return None

        self.inOrder(node.left, res)
        res.append(node.val)
        self.inOrder(node.right, res)

    def increasingBST(self, root: TreeNode) -> TreeNode:
        res = []
        self.inOrder(root, res)

        dummyNode = TreeNode(-1)
        currNode = dummyNode

        for value in res:
            currNode.right = TreeNode(value)
            currNode = currNode.right

        return dummyNode.right
