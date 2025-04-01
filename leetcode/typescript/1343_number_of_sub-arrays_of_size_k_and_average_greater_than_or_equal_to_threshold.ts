function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let runningSum = 0
  let subarrays = 0
  let leftIndex = 0

  for (let i = 0; i < arr.length; i++) {
    runningSum += arr[i]

    if (i - leftIndex + 1 > k) {
      runningSum -= arr[leftIndex++]
    }

    if (i - leftIndex + 1 === k && runningSum / k >= threshold) {
      subarrays++
    }
  }

  return subarrays
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    expect(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)).toEqual(3)
    expect(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)).toEqual(6)
  })
}
