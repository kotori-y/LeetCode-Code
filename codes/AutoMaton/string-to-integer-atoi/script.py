'''
Description: 
Author: Kotori Y
Date: 2021-04-23 09:36:26
LastEditors: Kotori Y
LastEditTime: 2021-04-23 09:37:03
FilePath: \LeetCode-Code\codes\AutoMaton\string-to-integer-atoi\script.py
AuthorMail: kotori@cbdd.me
'''

INT_MAX = 2 ** 31 - 1
INT_MIN = -2 ** 31


class AutoMaton:

    def __init__(self):
        self.state = "start"
        self.ans = 0
        self.sign = 1
        self.table = {
            "start": ["start", "signed", "in_number", "end"],
            "signed": ["end", "end", "in_number", "end"],
            "in_number": ["end", "end", "in_number", "end"],
            "end": ["end", "end", "end", "end"]
        }

    def get_col(self, c):
        if c.isspace():
            return 0
        if c in ["+", "-"]:
            return 1
        if c.isdigit():
            return 2
        return 3

    def get_state(self, c):
        self.state = self.table[self.state][self.get_col(c)]

        if self.state == "in_number":

            self.ans = self.ans * 10 + int(c)

            if -self.ans < INT_MIN and self.sign == -1:
                self.ans = -INT_MIN
                self.state = "end"

            elif self.ans > INT_MAX and self.sign == 1:
                self.ans = INT_MAX
                self.state = "end"

        elif self.state == "signed":
            self.sign = 1 if c == '+' else -1


class Solution:
    def myAtoi(self, str: str) -> int:
        automaton = AutoMaton()
        for c in str:
            automaton.get_state(c)
        return automaton.sign * automaton.ans