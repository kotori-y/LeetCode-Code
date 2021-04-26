<!--
 * @Description: 
 * @Author: Kotori Y
 * @Date: 2021-04-26 15:50:51
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-26 16:09:36
 * @FilePath: \LeetCode-Code\codes\BinarySearch\capacity-to-ship-packages-within-d-days\README.md
 * @AuthorMail: kotori@cbdd.me
-->

## [在D天内送达包裹的能力](https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/)

传送带上的包裹必须在D天内从一个港口运送到另一个港口。
传送带上的第i个包裹的重量为weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
返回能在D天内将传送带上的所有包裹送达的船的最低运载能力。

```
输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
输出：15
解释：
船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
第 1 天：1, 2, 3, 4, 5
第 2 天：6, 7
第 3 天：8
第 4 天：9
第 5 天：10

请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 
(2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。
```

```
输入：weights = [3,2,2,4,1,4], D = 3
输出：6
解释：
船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
第 1 天：3, 2
第 2 天：2, 4
第 3 天：1, 4
```

```
输入：weights = [1,2,3,1,1], D = 4
输出：3
解释：
第 1 天：1
第 2 天：2
第 3 天：3
第 4 天：1, 1
```

### 题解

<i>使用二分查找解决</i>。
初始的左边界为最大的一个货物重量，右边界为所有货物重量之和。

```JavaScript
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */

var shipWithinDays = function (weights, D) {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b);

  while (left < right) {
    let mid = ((left + right) / 2) | 0;
    let cost = 1,
      curr = 0;

    for (let weight of weights) {
      if (curr + weight > mid) {
        cost++;
        curr = 0;
      }
      curr += weight;
    }

    cost <= D ? (right = mid) : (left = mid + 1);
  }

  return left;
  
};
```