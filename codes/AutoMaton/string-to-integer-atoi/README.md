<!--
 * @Description: 
 * @Author: Kotori Y
 * @Date: 2021-04-22 21:51:01
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-23 09:33:02
 * @FilePath: \LeetCode-Code\codes\AutoMaton\string-to-integer-atoi\README.md
 * @AuthorMail: kotori@cbdd.me
-->

## [字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi/)

请你来实现一个<code>myAtoi(string s)</code>函数，使其能将字符串转换成一个<code>32</code>位有符号整数（类似 C/C++ 中的<code>atoi</code> 函数）。

函数 myAtoi(string s) 的算法如下：

 - 读入字符串并丢弃无用的前导空格
 - 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
 - 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
 - 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
 - 如果整数数超过 32 位有符号整数范围[−2<sup>31</sup>,  2<sup>31</sup>−1]，需要截断这个整数，使其保持在这个范围内。具体来说，小于−2<sup>31</sup> 的整数应该被固定为−2<sup>31</sup>，大于2<sup>31</sup>-1的整数应该被固定为2<sup>31</sup>-1。
返回整数作为最终结果。

```
输入：s = "42"
输出：42
解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
第 1 步："42"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："42"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
         ^
第 3 步："42"（读入 "42"）
           ^
解析得到整数 42 。
由于 "42" 在范围[−2<sup>31</sup>,  2<sup>31</sup>−1]内，最终结果为 42 。
```

```
输入：s = "   -42"
输出：-42
解释：
第 1 步："   -42"（读入前导空格，但忽视掉）
            ^
第 2 步："   -42"（读入 '-' 字符，所以结果应该是负数）
             ^
第 3 步："   -42"（读入 "42"）
               ^
解析得到整数 -42 。
由于 "-42" 在范围[−2<sup>31</sup>,  2<sup>31</sup>−1]内，最终结果为 -42 。
```

```
输入：s = "4193 with words"
输出：4193
解释：
第 1 步："4193 with words"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："4193 with words"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
         ^
第 3 步："4193 with words"（读入 "4193"；由于下一个字符不是一个数字，所以读入停止）
             ^
解析得到整数 4193 。
由于 "4193" 在范围[−2<sup>31</sup>,  2<sup>31</sup>−1]内，最终结果为 4193 。
```

```
输入：s = "words and 987"
输出：0
解释：
第 1 步："words and 987"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："words and 987"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
         ^
第 3 步："words and 987"（由于当前字符 'w' 不是一个数字，所以读入停止）
         ^
解析得到整数 0 ，因为没有读入任何数字。
由于 0 在范围[−2<sup>31</sup>,  2<sup>31</sup>−1]内，最终结果为 0 。
```

```
输入：s = "-91283472332"
输出：-2147483648
解释：
第 1 步："-91283472332"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："-91283472332"（读入 '-' 字符，所以结果应该是负数）
          ^
第 3 步："-91283472332"（读入 "91283472332"）
                     ^
解析得到整数 -91283472332 。
由于 -91283472332 小于范围[−2<sup>31</sup>,  2<sup>31</sup>−1]的下界，最终结果被截断为 -231 = -2147483648 。
```

### 题解

本题当然可以用正则解决，但这样做的话，这道题就失去意义了。我从[官方题解](https://leetcode-cn.com/problems/string-to-integer-atoi/solution/zi-fu-chuan-zhuan-huan-zheng-shu-atoi-by-leetcode-/)那里学到一个新方法：自动机。即：我们的程序在每个时刻有一个状态<code>s</code>，每次从序列中输入一个字符<code>c</code>，并根据字符<code>c</code>转移到下一个状态<code>s'</code>。这样，我们只需要建立一个覆盖所有情况的从<code>s</code>与<code>c</code>映射到<code>s'</code>的表格即可解决题目中的问题。

|               |  " "  |  +/-   |  number   | end  |
| ------------- | :---: | :----: | :-------: | :--: |
| **start**     | start | signed | in_number | end  |
| **signed**    |  end  |  end   | in_number | end  |
| **in_number** |  end  |  end   | in_number | end  |
| **end**       |  end  |  end   |    end    | end  |

之后要做的就是实现这个表里的内容并遍历字符串中的每个字符。时间复杂度为<i>O(n)</i>，空间复杂度为<i>O(1)</i>。