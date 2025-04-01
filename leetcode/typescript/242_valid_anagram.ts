function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const charsMap = new Map()
  for (const char of s) {
    charsMap.set(char, (charsMap.get(char) ?? 0) + 1)
  }

  for (const char of t) {
    const count = charsMap.get(char)
    if (count) {
      if (count === 1) {
        charsMap.delete(char)
      } else {
        charsMap.set(char, count - 1)
      }
    } else {
      return false
    }
  }

  return charsMap.size === 0
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true)
    expect(isAnagram('rat', 'car')).toEqual(false)
  })
}
