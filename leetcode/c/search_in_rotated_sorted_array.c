#include <stdio.h>

int search(int *nums, int nums_sz, int target) {
  if (nums_sz == 0) {
    return -1;
  }

  int left = 0;
  int right = nums_sz - 1;

  while (left <= right) {
    int mid = left + (right - left) / 2;

    if (nums[mid] == target) {
      return mid;
    }

    // Check which side is sorted
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (target > nums[mid] && target <= nums[right]) {
      left = mid + 1;
    } else {

      right = mid - 1;
    }
  }

  return -1;
}

int main(int argc, char const *argv[]) {
  int nums[1] = {1};
  printf("ret=%d\n", search(nums, 1, 0));
  return 0;
}
