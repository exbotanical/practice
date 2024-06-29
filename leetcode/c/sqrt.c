#include <stdio.h>

int my_sqrt(int x) {
  if (x == 0 || x == 1) {
    return x;
  }

  unsigned int left = 1;
  unsigned int right = x - 1;

  while (left <= right) {
    unsigned int mid = left + (right - left) / 2;

    if (mid > x / mid) {
      right = mid - 1;
    } else {
      if (mid + 1 > x / (mid + 1)) {
        return mid;
      }
      left = mid + 1;
    }
  }

  return -1;
}

int main(int argc, char const *argv[]) {
  printf("ret=%d\n", my_sqrt(8));
  printf("ret=%d\n", my_sqrt(81));
  printf("ret=%d\n", my_sqrt(9));
  printf("ret=%d\n", my_sqrt(0));
  printf("ret=%d\n", my_sqrt(1));
  printf("ret=%d\n", my_sqrt(100));

  return 0;
}
