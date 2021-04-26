/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-26 12:48:00
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-26 12:48:30
 * @FilePath: \LeetCode-Code\codes\Tree\increasing-order-search-tree\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var increasingBST = function (root) {
  const res = [];
  inOrder(root, res);

  const dummyNode = new TreeNode(-1);
  let currNode = dummyNode;
  for (const value of res) {
    currNode.right = new TreeNode(value);
    currNode = currNode.right;
  }
  return dummyNode.right;
};

// inOrder
var inOrder = (node, res) => {
  if (!node) {
    return;
  }
  inOrder(node.left, res);
  res.push(node.val);
  inOrder(node.right, res);
};
