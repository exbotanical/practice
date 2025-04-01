/*
map<number, LL>




*/

class LFUCache {
  list = new List<LNodeData<number>>()
  store = new Map<number, LNode<LNodeData<number>>>()

  useCounters = new Map<number, LNode<LNodeData<number>>>()

  constructor(private capacity: number) {}

  private evictEntry() {
    const el = this.list.delete(this.list.tail)
    this.store.delete(el.data.data)
  }

  get(key: number): number {
    const node = this.store.get(key)!

    this.list.moveFront(node)
    node.data.freq++
    return node.data.data
  }

  put(key: number, value: number): void {
    if (this.store.has(value)) {
      const node = this.store.get(value)!
      node.data.freq++
      this.list.moveFront(node)
      return
    }

    const node = this.list.insert({ data: value, freq: 1 })
    this.list.moveFront(node)
    this.store.set(key, node)

    if (this.store.size > this.capacity) {
      this.evictEntry()
    }

    console.log({ a: 'PUT', key, store: this.store })
  }
}

interface LNodeData<T> {
  freq: number
  data: T
}

class LNode<T> {
  constructor(
    public data: T,
    public prev: LNode<T>,
    public next: LNode<T>,
  ) {}
}

class List<T> {
  head: LNode<T>
  tail: LNode<T>
  size = 0
  constructor() {
    // @ts-ignore
    this.head = this.tail = null
  }

  private unlink(node: LNode<T>) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  insert(item: T) {
    this.size++
    const node = new LNode(item, this.tail, this.head)
    if (!this.head || !this.tail) {
      this.head = this.tail = node

      return node
    }

    const oldTail = this.tail

    this.tail = node
    oldTail.next = this.tail

    return node
  }

  delete(node: LNode<T>) {
    this.unlink(node)
    if (this.head === node) {
      this.head = node.next
      this.tail.next = this.head
    } else if (this.tail === node) {
      this.tail = this.tail.prev
      this.tail.next = this.head
    }
    // @ts-ignore
    node.next = null
    // @ts-ignore
    node.prev = null

    this.size--
    return node
  }

  moveFront(node: LNode<T>) {
    if (this.head === node) {
      return
    }
    this.unlink(node)

    if (this.tail === node) {
      this.tail = node.prev
    }

    const oldHead = this.head
    this.head = node
    oldHead.prev = this.head

    this.tail.next = this.head
    this.head.next = oldHead

    this.head.prev = this.tail
  }
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('test', () => {
    const cache = new LFUCache(3)
    cache.put(1, 1)
    cache.put(2, 2)
    cache.get(1)
    cache.put(3, 3)
    cache.put(4, 4)
    cache.get(4)

    const ll = new List()
    const n1 = ll.insert(1)
    const n2 = ll.insert(2)
    const n3 = ll.insert(3)
    ll.moveFront(n2)
    ll.delete(n2)
    const n4 = ll.insert(4)
    ll.moveFront(n4)
    ll.moveFront(n4)

    let node = ll.head
    do {
      console.log({ node })
      node = node.next
    } while (node !== null && node !== ll.head)
  })
}
