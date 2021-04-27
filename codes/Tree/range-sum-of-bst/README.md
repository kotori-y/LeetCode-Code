<!--
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-27 08:41:20
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-27 09:45:41
 * @FilePath: \LeetCode-Code\codes\Tree\range-sum-of-bst\README.md
 * @AuthorMail: kotori@cbdd.me
-->

## [二叉搜索树的范围和](https://leetcode-cn.com/problems/range-sum-of-bst/)

给定二叉搜索树的根结点<code>root</code>，返回值位于范围<code><i>[low, high]</i></code>之间的所有结点的值的和。

![](./images/bst1.jpg)

```
输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32
```

![](./images/bst2.jpg)

```
输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23
```

### 题解

#### 深度优先

尽可能深的搜索树的分支，在遍历一棵树的时候会深入地遍历完树的一个分支后才会去遍历其它的分支。

```javascript
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
```

#### 广度优先

而广度优先算法则是从根节点开始一层一层的进行遍历，只有完全遍历完一层所有的节点后才会进入下一层的遍历。

```javascript
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
```
