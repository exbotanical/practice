function maxArea(height: number[]): number {
  let max = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]))

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return max
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('test', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49)
    expect(maxArea([1, 1])).toEqual(1)
    expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toEqual(17)
  })
}
