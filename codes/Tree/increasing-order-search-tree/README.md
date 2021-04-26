<!--
 * @Description: 
 * @Author: Kotori Y
 * @Date: 2021-04-26 12:32:06
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-26 12:39:17
 * @FilePath: \LeetCode-Code\codes\Tree\increasing-order-search-tree\README.md
 * @AuthorMail: kotori@cbdd.me
-->

## 递增顺序搜索树

给你一棵二叉搜索树，请你按<code>中序遍历</code>将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

![](./images/ex1.jpg)

```
输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
```

![](./images/ex2.jpg)

```
输入：root = [5,1,7]
输出：[1,null,5,null,7]
```

### 笔记
二叉树的遍历是指不重复地访问二叉树中所有结点，二叉树的遍历主要包括前序遍历、中序遍历、后序遍历。

- 前序遍历：访问根节点 -> 前序遍历左子树 -> 前序遍历右子树
- 中序遍历：前序遍历左子树 -> 访问根节点 -> 前序遍历右子树
- 后序遍历：前序遍历左子树 -> 前序遍历右子树 -> 访问根节点