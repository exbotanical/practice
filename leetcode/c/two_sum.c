#include <stdio.h>
#include <stdlib.h>

// brute force solution
int *two_sum(int *nums, int nums_sz, int target, int *ret_sz) {
  int *ret = malloc(sizeof(int) * 2);

  for (int i = 0; i < nums_sz; i++) {
    int num = nums[i];

    for (int j = i + 1; j < nums_sz; j++) {
      int next_num = nums[j];
      if (num + next_num == target) {
        *ret = i;
        *(ret + 1) = j;
      }
    }
  }

  *ret_sz = 2;

  return ret;
}

int main(int argc, char const *argv[]) {
  int ret_size;
  int nums[2] = {3, 3};
  int *ret = two_sum(nums, 2, 6, &ret_size);

  printf("--> %d %d (sz=%d)\n", ret[0], ret[1], ret_size);

  return 0;
}
