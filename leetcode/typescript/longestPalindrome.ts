function longestPalindrome(s: string): string {
  // TODO:
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it.skip('test', () => {
    expect(longestPalindrome('babad')).toEqual('bab')
    expect(longestPalindrome('cbbd')).toEqual('bb')
    expect(longestPalindrome('radar')).toEqual('radar')
    expect(longestPalindrome('rrdadkr')).toEqual('dad')
    expect(longestPalindrome('rxxadaxxpr')).toEqual('xxadaxx')
    expect(longestPalindrome('radar rraaddaarr')).toEqual('rraaddaarr')
  })
}
