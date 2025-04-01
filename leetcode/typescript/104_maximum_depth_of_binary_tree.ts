/**
 * Definition for a binary tree node.
 */
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

function maxDepth(root: TreeNode | null, count = 0): number {
  if (root == null) return count
  return Math.max(maxDepth(root.left, count + 1), maxDepth(root.right, count + 1))
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    const t1 = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7)),
    )
    expect(maxDepth(t1)).toEqual(3)

    const t2 = new TreeNode(1, null, new TreeNode(2))
    expect(maxDepth(t2)).toEqual(2)
  })
}
