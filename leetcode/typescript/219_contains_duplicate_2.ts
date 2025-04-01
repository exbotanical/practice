function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const seen = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i]) && Math.abs(seen.get(nums[i]) - i) <= k) {
      return true
    }
    seen.set(nums[i], i)
  }

  return false
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true)
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toEqual(true)
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toEqual(false)
  })
}
