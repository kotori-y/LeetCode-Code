<!--
 * @Description: 
 * @Author: Kotori Y
 * @Date: 2021-04-22 13:09:30
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-22 13:13:46
 * @FilePath: \LeetCode-Code\codes\Others\Zigzag-Conversion\README.md
 * @AuthorMail: kotori@cbdd.me
-->

## [Z字形变换](https://leetcode-cn.com/problems/zigzag-conversion/)

将一个给定字符串<code>s</code>根据给定的行数<code>numRows</code>，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

```
P   A   H   N
A P L S I I G
Y   I   R
```
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

```
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
```

```
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

```
输入：s = "A", numRows = 1
输出："A"
```