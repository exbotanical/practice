function characterReplacement(s: string, k: number): number {}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    expect(characterReplacement('ABAB', 2)).toEqual(4)
    expect(characterReplacement('AABABBA', 1)).toEqual(4)
  })
}
