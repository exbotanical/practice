function isValid(s: string): boolean {
  const parens = []
  const mapping: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (const char of s) {
    switch (char) {
      case '(':
      case '[':
      case '{': {
        parens.push(char)
        break
      }
      case ')':
      case ']':
      case '}': {
        const got = parens.pop()!
        if (mapping[got] !== char) {
          return false
        }
        break
      }
    }
  }

  return parens.length === 0
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    expect(isValid('()')).toEqual(true)
    expect(isValid('()[]{}')).toEqual(true)
    expect(isValid('(]')).toEqual(false)
    expect(isValid('([])')).toEqual(true)
  })
}

/*
([](()))
[( ( ( ]

*/
