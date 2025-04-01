function gcd(a: number, b: number) {
  const remainder = a % b
  if (remainder === 0) return b
  return gcd(b, remainder)
}

function gcdExtended(
  a: number,
  b: number,
): { gcd: number; x: number; y: number } {
  if (b === 0) return { gcd: a, x: 1, y: 0 }

  let { gcd, x: x1, y: y1 } = gcdExtended(b, a % b)
  const x = y1
  const y = x1 - Math.floor(a / b) * y1

  return { gcd, x, y }
}

if (import.meta.vitest) {
  const { expect, describe, it } = import.meta.vitest

  describe('tests', () => {
    it('resolves the GCD of two numbers', () => {
      expect(gcd(12, 8)).toEqual(4)
      expect(gcd(8, 12)).toEqual(4)
      expect(gcd(66528, 52920)).toEqual(1512)
    })

    it('resolves the x and y', () => {
      console.log({ H: gcdExtended(26513, 32321) })
      // expect(gcdExtended(26513, 32321)).toEqual(4)
    })
  })
}
