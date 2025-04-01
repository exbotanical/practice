function checkInclusion(s1: string, s2: string): boolean {


if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toEqual(true)
    expect(checkInclusion('ab', 'eidboaoo')).toEqual(false)
    expect(checkInclusion('a', 'a')).toEqual(true)
    expect(checkInclusion('a', '')).toEqual(false)
    expect(checkInclusion('adc', 'dcda')).toEqual(true)
    expect(checkInclusion('abc', 'ccbbaa')).toEqual(false)
    expect(checkInclusion('abc', 'brdbbca')).toEqual(true)
    expect(checkInclusion('abcvxqak', 'brdbcvbacxqak')).toEqual(true)
  })
}

// 0
// rdbcvbacxqak

// {    }
// { a:1,  b:1 c:1 }

// b
// a => 1,
