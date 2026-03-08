class Stack<T> {
  private data: T[] = [];

  push(value: T): void {
    this.data.push(value);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  top(): T | undefined {
    return this.data[this.data.length - 1];
  }

  size(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  print(): void {
    console.log(`Stack: ${this.data}`);
  }
}

// --- Example usage ---
const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();                              // Stack: 1,2,3
console.log(`Size: ${stack.size()}`);       // Size: 3
console.log(`isEmpty: ${stack.isEmpty()}`); // isEmpty: false
console.log(`Top: ${stack.top()}`);         // Top: 3
console.log(`Pop: ${stack.pop()}`);         // Pop: 3
stack.print();                              // Stack: 1,2
