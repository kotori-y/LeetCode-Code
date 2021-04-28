<!--
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-28 09:33:12
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-28 10:06:48
 * @FilePath: \LeetCode-Code\codes\TwoPointers\sum-of-square-numbers\README.md
 * @AuthorMail: kotori@cbdd.me
-->
## [平方数之和](https://leetcode-cn.com/problems/sum-of-square-numbers/)

给定一个非负整数<code>c</code>，你要判断是否存在两个整数<code>a</code>和<code>b</code>，使得<code>a<sup>2</sup> + b<sup>2</sup> = c</code>。

```
输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
```

```
输入：c = 3
输出：false
```

```
输入：c = 4
输出：true
```

### 题解

使用双指针解题。

初始，首指针设为0，尾指针设为Math.sqrt(c)。判断两者之和与目标c的关系：

 - a<sup>2</sup> + b<sup>2</sup> = c, 返回true
 - a<sup>2</sup> + b<sup>2</sup> > c, 尾指针--
 - a<sup>2</sup> + b<sup>2</sup> < c, 首指针++

重复至两指针相遇。

```javascript
var judgeSquareSum = function (c) {
  let left = 0,
    right = Math.sqrt(c) | 0;

  while (left <= right) {
    const temp = left ** 2 + right ** 2;

    if (temp === c) {
      return true;
    }

    temp > c ? right-- : left++;
  }

  return false;
};
```
