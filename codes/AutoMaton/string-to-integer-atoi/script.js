/*
 * @Description:
 * @Author: Kotori Y
 * @Date: 2021-04-23 09:35:45
 * @LastEditors: Kotori Y
 * @LastEditTime: 2021-04-23 10:27:16
 * @FilePath: \LeetCode-Code\codes\AutoMaton\string-to-integer-atoi\script.js
 * @AuthorMail: kotori@cbdd.me
 */
/**
 * @param {string} s
 * @return {number}
 */

class AutoMaton {
  constructor() {
    this.state = "start";
    this.ans = 0;
    this.sign = 1;
    this.table = {
      start: ["start", "signed", "in_number", "end"],
      signed: ["end", "end", "in_number", "end"],
      in_number: ["end", "end", "in_number", "end"],
      end: ["end", "end", "end", "end"],
    };
  }

  get_col = (c) => {
    switch (true) {
      case c.indexOf(" ") === 0:
        return 0;
      case c === "+" || c === "-":
        return 1;
      case !isNaN(Number(c)):
        return 2;
      default:
        return 3;
    }
  };

  get_state = (c) => {
    this.state = this.table[this.state][this.get_col(c)];
    switch (this.state) {
      case "in_number":
        this.ans = this.ans * 10 + parseInt(c);
        if ((this.ans | 0) !== this.ans) {
          this.state = "end";
          this.ans =
            this.sign === 1 ? Math.abs((-1 << 31) + 1) : Math.abs(-1 << 31);
        }
        break;
      case "signed":
        this.sign = c === "+" ? 1 : -1;
        break;
      default:
        break;
    }
  };
}

var myAtoi = function (s) {
  automaton = new AutoMaton();
  for (let c of s) {
    automaton.get_state(c);
  }
  return automaton.sign * automaton.ans;
};
