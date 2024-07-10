// https://leetcode.com/problems/first-bad-version
package main

const firstBad = 1

func isBadVersion(n int) bool {
	return n >= firstBad
}

func firstBadVersion(n int) int {
	left := 0
	right := n

	for left < right {
		mid := left + (right-left)/2

		if isBadVersion(mid) {
			right = mid
		} else {
			left = mid + 1
		}
	}

	if isBadVersion(left) {
		return left
	}

	return -1
}
