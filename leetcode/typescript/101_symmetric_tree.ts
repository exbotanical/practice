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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }

  function areEqual(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left || !right) return left === right
    return (
      left.val === right.val &&
      areEqual(left.left, right.right) &&
      areEqual(left.right, right.left)
    )
  }

  return areEqual(root.left, root.right)
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    const t1 = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3)),
    )
    expect(isSymmetric(t1)).toEqual(true)

    const t2 = new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3)),
    )
    expect(isSymmetric(t2)).toEqual(false)
  })
}
