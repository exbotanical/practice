function maxVowels(s: string, k: number): number {
  const cache = new Map()

  let leftIndex = 0
  let numVowels = 0
  let max = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (i - leftIndex + 1 > k) {
      if (cache.get(leftIndex++)) {
        numVowels--
      }
    }

    if (isVowel(char)) {
      numVowels++
      max = Math.max(numVowels, max)

      cache.set(i, true)
    }
  }

  return max
}

const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
function isVowel(char: string) {
  return vowels.has(char)
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    expect(maxVowels('abciiidef', 3)).toEqual(3)
    expect(maxVowels('aeiou', 2)).toEqual(2)
    expect(maxVowels('leetcode', 3)).toEqual(2)
    expect(maxVowels('tryhard', 4)).toEqual(1)
  })
}
