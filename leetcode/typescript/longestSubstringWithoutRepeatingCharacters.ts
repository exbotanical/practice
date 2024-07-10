function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return s.length
  }

  const seen = new Map<string, number>()
  let longest = 1
  let start = 0

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (seen.has(c)) {
      // start over at the index after the duplicate
      // we use max in case a duplicate exists before a previous one e.g. "abba"
      // without the max check, abba will be reset to start = 1 when we encounter the second 'a'
      // because the first 'a' is still in the hash map with value=0
      start = Math.max(start, seen.get(c)! + 1)
    }

    seen.set(c, i)
    longest = Math.max(longest, i + 1 - start)
  }

  return longest
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('test', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
    expect(lengthOfLongestSubstring('dvdf')).toEqual(3)
    expect(lengthOfLongestSubstring('dvdvxqptdb')).toEqual(7)

    expect(lengthOfLongestSubstring('x')).toEqual(1)
    expect(lengthOfLongestSubstring(' ')).toEqual(1)
    expect(lengthOfLongestSubstring('au')).toEqual(2)
    expect(lengthOfLongestSubstring('abba')).toEqual(2)
  })
}
