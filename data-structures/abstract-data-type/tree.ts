class BSTNode<T> {
  value: T;
  left: BSTNode<T> | null = null;
  right: BSTNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  private root: BSTNode<T> | null = null;

  insert(value: T): void {
    const node = new BSTNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (value <= current.value) {
        if (!current.left) { current.left = node; return; }
        current = current.left;
      } else {
        if (!current.right) { current.right = node; return; }
        current = current.right;
      }
    }
  }

  search(value: T): boolean {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  delete(value: T): void {
    this.root = this._delete(this.root, value);
  }

  private _delete(node: BSTNode<T> | null, value: T): BSTNode<T> | null {
    if (!node) return null;
    if (value < node.value) {
      node.left = this._delete(node.left, value);
    } else if (value > node.value) {
      node.right = this._delete(node.right, value);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      // Replace with in-order successor (smallest in right subtree)
      let successor = node.right;
      while (successor.left) successor = successor.left;
      node.value = successor.value;
      node.right = this._delete(node.right, successor.value);
    }
    return node;
  }

  // In-order traversal: Left → Root → Right (sorted output)
  print(): void {
    const result: T[] = [];
    const traverse = (node: BSTNode<T> | null) => {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    };
    traverse(this.root);
    console.log(`BST (in-order): ${result.join(" -> ")}`);
  }
}

// --- Example usage ---
const bst = new BinarySearchTree<number>();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

bst.print();                                    // BST (in-order): 20 -> 30 -> 40 -> 50 -> 60 -> 70 -> 80

console.log(`Search 40: ${bst.search(40)}`);   // Search 40: true
console.log(`Search 99: ${bst.search(99)}`);   // Search 99: false

bst.delete(30);
bst.print();                                    // BST (in-order): 20 -> 40 -> 50 -> 60 -> 70 -> 80
