class Queue<T> {
  private data: T[] = [];

  add(value: T): void {
    this.data.push(value);
  }

  remove(): T | undefined {
    return this.data.shift();
  }

  front(): T | undefined {
    return this.data[0];
  }

  size(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  print(): void {
    console.log(`Queue: ${this.data}`);
  }
}

// --- Example usage ---
const queue = new Queue<number>();

queue.add(1);
queue.add(2);
queue.add(3);

queue.print();                              // Queue: 1,2,3
console.log(`Size: ${queue.size()}`);       // Size: 3
console.log(`isEmpty: ${queue.isEmpty()}`); // isEmpty: false
console.log(`Front: ${queue.front()}`);     // Front: 1
console.log(`Remove: ${queue.remove()}`);   // Remove: 1
queue.print();                              // Queue: 2,3
