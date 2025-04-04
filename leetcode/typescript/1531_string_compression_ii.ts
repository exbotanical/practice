function getLengthOfOptimalCompression(s: string, k: number): number {
  let sCopy = s
  // char / occurrence count
  const chars = new Map<string, number>()
  const removableSizes = []
  const removableCosts = []
  let fullStr = ''

  while (sCopy) {
    const char = sCopy[0]
    const newCount = (chars.get(char) ?? 0) + 1
    chars.set(char, newCount)

    // If the next one is different (or undefined)
    if (sCopy[1] !== char) {
      const count = chars.get(char)!
      if (count <= k) {
        const key = (char + (count === 1 ? '' : count.toString())).length
        removableSizes.push(key)
        removableCosts.push(count)
      }

      fullStr += char

      if (count > 1) {
        fullStr += count
      }
      chars.clear()
    }

    sCopy = sCopy.substring(1, sCopy.length)
  }

  // const reduceBy = Array.from(removableChars)
  //   .sort(([a], [b]) => a.length - b.length)
  //   .slice(0, k)
  //   .reduce<number>((acc, v) => acc + v.length, 0)

  // b2b5b9b11
  console.log({
    fullStr,
    bang: maxBangForDaBuck(removableSizes, removableCosts, k),
  })

  // NOPE. We actually have to delete from the original, then re-encode and see which is the longest. For example, in
  // "bbabbbabbbbcbb", we can delete bridge chars to ultimately yield b12.

  return fullStr.length - maxBangForDaBuck(removableSizes, removableCosts, k)
}

function maxBangForDaBuck(values: number[], costs: number[], k: number) {
  const n = values.length
  const dp: number[] = new Array(k + 1).fill(0)

  for (let i = 0; i < n; i++) {
    for (let j = k; j >= costs[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - costs[i]] + values[i])
    }
  }

  return dp[k]
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    // expect(getLengthOfOptimalCompression('aaabcccd', 2)).toEqual(4)
    // expect(getLengthOfOptimalCompression('aabbaa', 2)).toEqual(2)
    // expect(getLengthOfOptimalCompression('aaaaaaaaaaa', 0)).toEqual(3)
    // expect(getLengthOfOptimalCompression('bbabbbabbbbcbb', 4)).toEqual(3)
  })
}
