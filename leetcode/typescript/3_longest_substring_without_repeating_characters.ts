function lengthOfLongestSubstring(s: string): number {
  const seen = new Map<string, number>()
  // Records the longest substring we've seen
  let longestSubstringThusFar = 0
  // Tracks the running length of the current substring
  let runningLength = 0
  // Tracks the last index where we started over i.e. the "left" side of the sliding window
  let indexOffset = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    runningLength++

    // If we've seen this character before...
    if (seen.has(char)) {
      // Grab the index where we last saw it...
      const newStartIndex = seen.get(char)!
      // Is that index greater than the last index at which we restarted the sliding window?
      // Note: This handles cases like "abba", where we hit that second 'a'; we don't want to start over
      // because we already did at 'b'.
      if (newStartIndex >= indexOffset) {
        runningLength -= newStartIndex + 1 - indexOffset
        indexOffset = newStartIndex + 1
        seen.delete(char)
      }
    }

    longestSubstringThusFar = Math.max(longestSubstringThusFar, runningLength)
    seen.set(char, i)
  }

  return longestSubstringThusFar
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
    expect(lengthOfLongestSubstring('')).toEqual(0)
  })
}
