class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const levels: number[][] = []

  const queue = [root]

  let level = 0
  while (queue.length) {
    const len = queue.length
    levels.push([])

    for (let i = 0; i < len; i++) {
      const node = queue.shift()

      levels[level].push(node?.val!)

      if (node?.left) {
        queue.push(node.left)
      }
      if (node?.right) {
        queue.push(node.right)
      }
    }

    level++
  }

  return levels
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    const t1 = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    )
    expect(levelOrder(t1)).toEqual([[3], [9, 20], [15, 7]])

    const t2 = new TreeNode(1)
    expect(levelOrder(t2)).toEqual([[1]])

    expect(levelOrder(null)).toEqual([])
  })
}
