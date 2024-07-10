package main

import "fmt"

func main() {
	fmt.Printf("firstBadVersion %d\n", firstBadVersion(1))
	var nums = []int{6, 5, 4, 3, 2, 3, 2}
	fmt.Printf("findPeakElement %d\n", findPeakElement(nums))

	var nums2 = []int{0, 1, 2, 3, 4, 5, 1, 2}
	fmt.Printf("findMin %d\n", findMin(nums2))

	var nums11 = []int{1, 2, 2, 1}
	var nums21 = []int{2, 2}
	fmt.Printf("intersection %d\n", intersection(nums11, nums21))
}
