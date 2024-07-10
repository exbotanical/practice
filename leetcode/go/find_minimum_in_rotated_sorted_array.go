// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
package main

import (
	"math"
)

func findMin(nums []int) int {
	left := 0
	right := len(nums) - 1

	ret := math.MaxInt

	for left <= right {
		mid := left + (right-left)/2
		ret = min(ret, nums[mid])

		if nums[mid] < nums[right] {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return ret
}
