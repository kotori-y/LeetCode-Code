<!--
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-30 19:59:53
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-30 20:26:21
 * @FilePath: \LeetCode-Code\codes\DynamicProgramming\decode-ways\README.md
 * @AuthorMail: kotori@cbdd.me
-->

## [解码方法](https://leetcode-cn.com/problems/decode-ways/)

一条包含字母<code>A-Z</code>的消息通过以下映射进行了**编码**；

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

要**解码**已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)<br>"KJF" ，将消息分组为 (11 10 6)

注意，消息不能分组为   (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的**非空**字符串<code>s</code>，请计算并返回**解码**方法的总数 。

```
输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
```

```
输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
```

```
输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
```

```
输入：s = "06"
输出：0
解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。
```

### 题解

动态优化

假设第<code>i-1</code>位的字符串有 N 种解码方法，当引入第<code>i</code>个字符<code>c</code>时，有以下几种情况：

- <code>c</code>只能与前一个字符<code>c'</code>连在一起解码（即<code>c</code>为"0"）这种情况下，由于<code>c'</code>与<code>c</code>相互结合，实际能独立出来的字符串个数为 i-2。

  ```
  dp[i] = dp[i-2] (i == 0)
  ```

- <code>c</code>无法与前一个字符<code>c'</code>连在一起解码（例如<code>c<sup>'</sup></code>为"3"）由于<code>c</code>只能独立解码，即只是在 dp[i-1]各个解码方法中，在末端各添一个<code>c</code>，有效的解码个数与 dp[i-1]相同。

  ```
  dp[i] = dp[i-1] (c'>= 3 || (c'==2 && c > 6))
  ```

- <code>c</code>不受任何限制，既可以结合，也可以不结合

  ```
  dp[i] = dp[i-1] + dp[i-2]
  ```

再考虑连续两个"0"或最后两个字符为"20"等特殊边界情况，综上得出解答

```javascript
var numDecodings = function (s) {
  let prevChar = "0";
  let dp0 = 0;
  let dp1 = s[0] === "0" ? 0 : 1;

  for (let c of s) {
    const temp = dp1;

    if (c === "0" && (prevChar === "0" || prevChar > 2)) {
      return 0;
    }

    dp1 =
      c === "0"
        ? dp0
        : prevChar === "0" || prevChar > 2 || (prevChar === "2" && c > 6)
            ? dp1
            : dp1 + dp0;
    dp0 = temp;
    prevChar = c;
  }
  return dp1;
};
```
