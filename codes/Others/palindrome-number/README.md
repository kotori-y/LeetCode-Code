<!--
 * @Description: 
 * @Author: Kotori Y
 * @Date: 2021-04-26 12:50:56
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-26 12:58:43
 * @FilePath: \LeetCode-Code\codes\Others\palindrome-number\README.md
 * @AuthorMail: kotori@cbdd.me
-->

## [回文数](https://leetcode-cn.com/problems/palindrome-number/)

给你一个整数<code>x</code>，如果<code>x</code>是一个回文整数，返回<code>true</code>；否则，返回<code>false</code>。<br>回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121是回文，而123不是。


```
输入：x = 121
输出：true
```

```
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

```
输入：x = -101
输出：false
```

### 题解

本题可以只通过遍历后一半的数字，判断该部分数字与前一半数字是否相等。

```
偶数：12344321 -> 1234 == 1234
```

```
奇数：121 -> 12 // 10 == 1
```

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */

// only should loop a half of number

var isPalindrome = function(x) {

    if (x < 0 || (x > 0 && x % 10 === 0)) {
        return false
    }

    var converted = 0
    while (x > converted) {
        converted = converted * 10 + x % 10
        x = (x / 10) | 0
    }
    return ((converted / 10) | 0) === x || x === converted
};
```
