function numIslands(grid: string[][]): number {}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest

  it('test', () => {
    expect(
      numIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
      ]),
    ).toEqual(1)
    expect(
      numIslands([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
      ]),
    ).toEqual(3)
  })
}
