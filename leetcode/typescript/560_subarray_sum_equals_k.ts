// function subarraySum(nums: number[], k: number): number {
//   let subarrays = 0

//   for (let i = 0; i < nums.length; i++) {
//     let runningSum = 0
//     for (let j = i; j < nums.length; j++) {
//       runningSum += nums[j]

//       if (runningSum === k) subarrays++
//     }
//   }

//   return subarrays
// }

function subarraySum(nums: number[], k: number): number {
  let subarrays = 0
  let runningSum = 0
  const cachedSum = new Map()

  // Handle single-entry matches
  cachedSum.set(0, 1)

  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i]
    if (cachedSum.has(runningSum - k)) {
      subarrays += cachedSum.get(runningSum - k)
    }
    cachedSum.set(runningSum, (cachedSum.get(runningSum) ?? 0) + 1)
  }

  return subarrays
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('test', () => {
    expect(subarraySum([1, 1, 1], 2)).toEqual(2)
    // expect(subarraySum([1, 2, 3], 3)).toEqual(2)
    // expect(subarraySum([1], 0)).toEqual(0)
    // expect(subarraySum([-1, -1, 1], 0)).toEqual(1)
  })
}
