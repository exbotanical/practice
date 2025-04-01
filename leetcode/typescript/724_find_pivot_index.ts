function pivotIndex(nums: number[]): number {
  let leftSum = 0
  let middle = 0
  let rightSum = nums.reduce((v, acc) => acc + v, 0)
  rightSum -= nums[middle]

  for (let i = 1; i < nums.length + 1; i++) {
    if (leftSum === rightSum) {
      return middle
    }

    rightSum -= nums[i]
    leftSum += nums[middle++]
  }

  return -1
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3)
    expect(pivotIndex([1, 2, 3])).toEqual(-1)
    expect(pivotIndex([-1, -1, 0, 1, 1, 0])).toEqual(5)
  })
}
