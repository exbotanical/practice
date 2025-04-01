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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  if (!root || root === p || root === q) {
    return root
  }

  const left = lowestCommonAncestor(root?.left, p, q)
  const right = lowestCommonAncestor(root?.right, p, q)

  if (!left) return right
  if (!right) return left
  return root
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    const t1n3 = new TreeNode(4)
    const t1n1 = new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), t1n3))
    const t1n2 = new TreeNode(1, new TreeNode(0), new TreeNode(8))
    const t1 = new TreeNode(3, t1n1, t1n2)

    expect(lowestCommonAncestor(t1, t1n1, t1n2)?.val).toEqual(3)
    expect(lowestCommonAncestor(t1, t1n1, t1n3)?.val).toEqual(5)
  })
}
