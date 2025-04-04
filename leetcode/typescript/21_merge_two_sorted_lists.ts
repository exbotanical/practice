class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let l1 = list1
  let l2 = list2
  let l3 = null
  let head = null

  while (l1 || l2) {
    if (!l2 || (l1?.val ?? Infinity) <= (l2?.val ?? -Infinity)) {
      if (l3) {
        l3.next = new ListNode(l1?.val)
        l3 = l3.next
      } else {
        head = l3 = new ListNode(l1?.val)
      }
      l1 = l1?.next ?? null
    } else {
      if (l3) {
        l3.next = new ListNode(l2?.val)
        l3 = l3.next
      } else {
        head = l3 = new ListNode(l2?.val)
      }
      l2 = l2?.next ?? null
    }
  }

  return head
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(4)))
    const l2 = new ListNode(1, new ListNode(3, new ListNode(4)))

    const e1 = new ListNode(
      1,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))),
    )

    expect(mergeTwoLists(l1, l2)).toEqual(e1)
    expect(mergeTwoLists(null, null)).toEqual(null)
    expect(mergeTwoLists(new ListNode(1), null)).toEqual(new ListNode(1))
  })
}
