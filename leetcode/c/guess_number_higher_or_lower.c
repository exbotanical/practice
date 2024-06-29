#include <stdio.h>

static int answer = 1;

int guess(int g) {
  if (g > answer)
    return -1;
  if (g < answer)
    return 1;
  return 0;
}

int guess_number(int n) {
  int left = 1;
  int right = n;

  while (left <= right) {
    int mid = left + (right - left) / 2;
    int guessed = guess(mid);

    if (guessed == 0) {
      return mid;
    }

    if (guessed == 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

int main(int argc, char const *argv[]) {
  printf("ret=%d\n", guess_number(1));
  return 0;
}
