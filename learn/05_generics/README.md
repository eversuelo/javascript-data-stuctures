# 05 - Generics

## 📝 Overview
Master TypeScript generics to write reusable, type-safe code that works with multiple types.

## 🎯 Learning Objectives
- Understand generic syntax and concepts
- Create generic functions and classes
- Use generic constraints
- Work with default generic types
- Apply generics in real-world scenarios

## 📚 Topics Covered

### 1. Generic Functions
```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");
let numOutput = identity(42); // Type inference
```

### 2. Generic Interfaces
```typescript
interface Box<T> {
  value: T;
}

let stringBox: Box<string> = { value: "hello" };
let numberBox: Box<number> = { value: 42 };
```

### 3. Generic Classes
```typescript
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}
```

### 4. Generic Constraints
```typescript
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

logLength("hello"); // OK
logLength([1, 2, 3]); // OK
// logLength(123); // Error: number doesn't have length
```

### 5. Default Generic Types
```typescript
interface Response<T = any> {
  data: T;
  status: number;
}

let response1: Response<User> = { data: user, status: 200 };
let response2: Response = { data: anything, status: 200 };
```

## 💡 Best Practices

1. **Use descriptive type parameters** - Not just T, K, V
2. **Constrain generics when possible** - More type safety
3. **Avoid over-generification** - Balance flexibility and complexity
4. **Use inference** - Let TypeScript work for you
5. **Combine with utility types** - Powerful patterns

## 🏋️ Exercises

1. Create a generic Stack class with push/pop operations
2. Build a generic API response wrapper
3. Implement a generic filter function for arrays
4. Create a generic key-value store
5. Build a generic event emitter system

## 📖 Additional Resources

- [Generics Documentation](https://www.typescriptlang.org/docs/handbook/2/generics.html)
