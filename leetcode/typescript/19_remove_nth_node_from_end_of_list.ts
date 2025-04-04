class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let tmp = head // 1, 2, 3, 4
  const stored = [] // 1, 2, 3, 4

  while (tmp) {
    stored.push(tmp)
    tmp = tmp.next
  }
  if (stored.length === 1) return null

  const index = stored.length - n
  const before = stored[index - 1]
  const after = stored[index + 1] ?? null

  if (before) {
    before.next = after
  } else {
    return head!.next
  }

  return head
}

if (import.meta.vitest) {
  const s = JSON.stringify
  const { it, expect } = import.meta.vitest
  it('test', () => {
    const n1 = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
    )
    const e1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))))

    expect(s(removeNthFromEnd(n1, 2))).toEqual(s(e1))
    expect(removeNthFromEnd(new ListNode(1), 1)).toEqual(null)
    expect(removeNthFromEnd(new ListNode(1, new ListNode(2)), 1)).toEqual(new ListNode(1))
    expect(removeNthFromEnd(new ListNode(1, new ListNode(2)), 2)).toEqual(new ListNode(2))
  })
}
