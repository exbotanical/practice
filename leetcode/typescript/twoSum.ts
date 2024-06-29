// o(n) solution
function twoSum(nums: number[], target: number): number[] {
  const numsMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (numsMap.has(complement)) {
      return [numsMap.get(complement)!, i]
    }

    numsMap.set(nums[i], i)
  }

  return []
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('test', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
}
