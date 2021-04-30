/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-30 20:26:04
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-30 20:26:05
 * @FilePath: \LeetCode-Code\codes\DynamicProgramming\decode-ways\sacript.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {string} s
 * @return {number}
 */

// dp[i] = s[i] === "0"
//             ? dp[i-2]
//             : s[i-1] === "0"|| (s[i-1]) > 2 || (s[i] > 6 && prevChar === "2")
//                 ? dp[i-1]
//                 : dp[i-1] + dp[i-2]

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
