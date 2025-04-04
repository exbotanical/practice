function dfs(
  grid: string[][],
  row: number,
  col: number,
  numRows: number,
  numCols: number,
) {
  if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === '0') {
    return
  }

  grid[row][col] = '0'

  dfs(grid, row - 1, col, numRows, numCols)
  dfs(grid, row + 1, col, numRows, numCols)
  dfs(grid, row, col - 1, numRows, numCols)
  dfs(grid, row, col + 1, numRows, numCols)
}

function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0

  let islandsEncountered = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        islandsEncountered++
        dfs(grid, row, col, grid.length, grid[0].length)
      }
    }
  }

  return islandsEncountered
}

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
