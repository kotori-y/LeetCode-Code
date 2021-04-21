<!--
 * @Description: 
 * @Author: Kotori Y
 * @Date: 2021-04-21 11:44:16
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-21 15:22:30
 * @FilePath: \LeetCode-Code\codes\BinarySearch\Median-of-Two-Sorted-Arrays\README.md
 * @AuthorMail: kotori@cbdd.me
-->

## [寻找两个正序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)

给定两个大小分别为<code>m</code>和<code>n</code>的**正序**（从小到大）数组<code>nums1</code>和<code>nums2</code>。请你找出并返回这两个正序数组的**中位数**。

**要求**：时间复杂度为（或优于）<code>*log(O(m + n))*</code>

```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

```
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

```
输入：nums1 = [0,0], nums2 = [0,0]
输出：0.00000
```

```
输入：nums1 = [], nums2 = [1]
输出：1.00000
```

```
输入：nums1 = [2], nums2 = []
输出：2.00000
```