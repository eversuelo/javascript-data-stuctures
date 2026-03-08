class ListNode<T> {
  data: T;
  next: ListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private length: number = 0;

  insert(data: T): void {
    const node = new ListNode(data);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  delete(): T | null {
    if (!this.head) return null;
    const value = this.head.data;
    this.head = this.head.next;
    this.length--;
    return value;
  }

  find(value: T): number {
    let current = this.head;
    let position = 0;

    while (current) {
      if (current.data === value) return position;
      current = current.next;
      position++;
    }

    return -1;
  }

  print(): void {
    const elements: T[] = [];
    let current = this.head;

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(" -> ") + " -> null");
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  size(): number {
    return this.length;
  }
}

// --- Example usage ---
const list = new LinkedList<number>();

list.insert(10);
list.insert(20);
list.insert(30);

list.print();               // 30 -> 20 -> 10 -> null

console.log(list.find(20)); // 1
console.log(list.size());   // 3
console.log(list.isEmpty()); // false

list.delete();
list.print();               // 20 -> 10 -> null
