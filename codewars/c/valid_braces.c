// https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/c
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define handle_case_for(c_open, c_close)                                       \
  case c_open:                                                                 \
    stack[curs++] = c_open;                                                    \
    break;                                                                     \
  case c_close:                                                                \
    if (curs == 0 || stack[--curs] != c_open) {                                \
      return false;                                                            \
    }                                                                          \
    stack[curs] = '\0';                                                        \
    break

bool is_even(int n) { return n % 2 == 0; }

bool valid_braces(const char *braces) {
  char stack[strlen(braces)];
  unsigned int i = 0, curs = 0;

  char c;
  while ((c = braces[i++])) {
    switch (c) {
      handle_case_for('[', ']');
      handle_case_for('(', ')');
      handle_case_for('{', '}');
    default:
      break;
    }
  }

  return stack[0] == '\0';
}

// Tests
#include <assert.h>

int main() {
  assert(valid_braces("(((") == false);
  assert(valid_braces(")))") == false);
  assert(valid_braces("(){}[]") == true);
  assert(valid_braces("([{}])") == true);
  assert(valid_braces("(}") == false);
  assert(valid_braces("[(])") == false);

  assert(valid_braces("[({})](]") == false);
}
