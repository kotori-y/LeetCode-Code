/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-27 09:31:32
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-27 09:42:22
 * @FilePath: \LeetCode-Code\codes\Tree\range-sum-of-bst\script.js
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

/* DFS */
var rangeDFSSumBST = function (root, low, high) {
  if (!root) {
    return 0;
  }

  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }

  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }

  return (
    root.val +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
};

/* BFS */
var rangeBFSSumBST = function (root, low, high) {
  let sum = 0;
  const q = [root];
  while (q.length) {
    const node = q.shift();
    if (!node) {
      continue;
    }

    switch (true) {
      case node.val > high:
        q.push(node.left);
        break;
      case node.val < low:
        q.push(node.right);
        break;
      default:
        sum += node.val;
        q.push(node.left);
        q.push(node.right);
        break;
    }
  }
  return sum;
};
