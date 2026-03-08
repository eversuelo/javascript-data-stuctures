class HashTable<V> {
  private table: Array<[string, V] | null>;
  private size: number;

  constructor(size: number = 53) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  private hash(key: string): number {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i);
    }
    return hashCode % this.size;
  }

  insert(key: string, value: V): void {
    const index = this.hash(key);
    this.table[index] = [key, value];
  }

  delete(key: string): boolean {
    const index = this.hash(key);
    if (this.table[index] && this.table[index]![0] === key) {
      this.table[index] = null;
      return true;
    }
    return false;
  }

  search(key: string): V | null {
    const index = this.hash(key);
    const entry = this.table[index];
    if (entry && entry[0] === key) return entry[1];
    return null;
  }

  print(): void {
    this.table.forEach((entry, index) => {
      if (entry) console.log(`[${index}] ${entry[0]} => ${entry[1]}`);
    });
  }
}

// --- Example usage ---
const ht = new HashTable<number>();

ht.insert("Apple", 10);
ht.insert("Banana", 20);
ht.insert("Mango", 30);

ht.print();
// [index] Apple => 10
// [index] Banana => 20
// [index] Mango => 30

console.log(`Search Apple: ${ht.search("Apple")}`);   // Search Apple: 10
console.log(`Search Grape: ${ht.search("Grape")}`);   // Search Grape: null

ht.delete("Banana");
console.log(`Search Banana: ${ht.search("Banana")}`); // Search Banana: null
