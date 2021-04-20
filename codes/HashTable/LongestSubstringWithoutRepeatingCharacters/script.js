/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-20 17:06:55
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-20 17:07:33
 * @FilePath: \LeetCode-Code\codes\HashTable\LongestSubstringWithoutRepeatingCharacters\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = (s) => {
  let hashMap = new Map();
  let leftIdx = 0,
    maxLen = 0;

  for (let rightIdx = 0; rightIdx <= s.length - 1; rightIdx++) {
    const c = s[rightIdx];
    if (hashMap.has(c)) {
      leftIdx = Math.max(leftIdx, hashMap.get(c) + 1);
    }
    hashMap.set(c, rightIdx);
    maxLen = Math.max(maxLen, rightIdx - leftIdx + 1);
  }
  return maxLen;
};
