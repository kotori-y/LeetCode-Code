/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-21 11:59:15
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-21 15:20:28
 * @FilePath: \LeetCode-Code\codes\BinarySearch\Median-of-Two-Sorted-Arrays\script.js
 * @AuthorMail: kotori@cbdd.me
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  if (nums1.length) {
    let right = 0;
    let left = nums1.length;
    const leftLength = Math.floor((nums1.length + nums2.length + 1) / 2);

    let flag = true;
    var i, j;

    while (flag) {
      i = left + Math.floor((right - left + 1) / 2);
      j = leftLength - i;
      switch (true) {
        case i > 0 && nums1[i - 1] > nums2[j]:
          left = i - 1;
          break;
        case i < nums1.length && nums2[j - 1] > nums1[i]:
          right = i + 1;
          left = i;
          break;
        default:
          flag = false;
          break;
      }
    }

    const leftOne = i > 0 ? nums1[i - 1] : Math.min(...nums2);
    const leftTwo = j > 0 ? nums2[j - 1] : Math.min(...nums1);
    const rightOne = i < nums1.length ? nums1[i] : Math.max(...nums2);
    const rightTwo = j < nums2.length ? nums2[j] : Math.max(...nums1);

    if ((nums1.length + nums2.length) % 2 === 1) {
      return Math.max(leftOne, leftTwo);
    }

    const n1 = Math.max(leftOne, leftTwo);
    const n2 = Math.min(rightOne, rightTwo);
    return (n1 + n2) / 2;
  }

  if (nums2.length % 2 == 1) {
    return nums2[Math.floor((nums2.length - 1) / 2)];
  }

  return (
    (nums2[Math.floor((nums2.length - 1) / 2)] + nums2[nums2.length / 2]) / 2
  );
};
