function totalFruit(fruits: number[]): number {
  let startIndex = 0
  const fruitsCount = new Map()

  for (const fruit of fruits) {
    fruitsCount.set(fruit, (fruitsCount.get(fruit) ?? 0) + 1)

    if (fruitsCount.size > 2) {
      const index = fruits[startIndex++]
      fruitsCount.set(index, fruitsCount.get(index) - 1)

      if (fruitsCount.get(index) === 0) {
        fruitsCount.delete(index)
      }
    }
  }

  return fruits.length - startIndex
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    expect(totalFruit([1, 2, 1])).toEqual(3)
    expect(totalFruit([0, 1, 2, 2])).toEqual(3)
    expect(totalFruit([1, 2, 3, 2, 2])).toEqual(4)
    expect(totalFruit([1])).toEqual(1)
    expect(totalFruit([])).toEqual(0)
    expect(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])).toEqual(5)
    expect(totalFruit([4, 1, 1, 1, 3, 1, 7, 5])).toEqual(5)
    expect(totalFruit([0, 0, 0, 8, 3, 8, 3, 7, 4])).toEqual(4)
    expect(totalFruit([1, 0, 3, 4, 3])).toEqual(3)
    expect(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3])).toEqual(5)
  })
}

// | T1 | T2 | T1 | T3 |
// two baskets. one type per.
// MUST pick only 1 from every tree
// Max num fruits can pick

// This is basically the longest substring but
// where 1) we NEED duplicate chars and 2) we cannot have
// more than two unique chars

/*
{ [1]: 2, [2]: 1 }


*/
