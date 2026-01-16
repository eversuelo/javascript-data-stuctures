# 01 - Data Types

## 📝 Overview
Learn the fundamental building blocks of TypeScript: primitive types, arrays, tuples, and enums.

## 🎯 Learning Objectives
- Understand TypeScript's type system
- Master primitive types (string, number, boolean, null, undefined)
- Work with arrays and tuples
- Use enums effectively
- Learn about `any`, `unknown`, `void`, and `never` types

## 📚 Topics Covered

### 1. Primitive Types
```typescript
// Basic types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
```

### 2. Arrays
```typescript
// Array declaration methods
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Mixed types with union
let mixed: (string | number)[] = [1, "two", 3];
```

### 3. Tuples
```typescript
// Fixed-length arrays with specific types
let person: [string, number] = ["John", 30];
let rgb: [number, number, number] = [255, 0, 128];
```

### 4. Enums
```typescript
// Numeric enums
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

// String enums
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}
```

### 5. Special Types
```typescript
// any - disables type checking (avoid when possible)
let anything: any = "hello";
anything = 42;

// unknown - type-safe version of any
let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe
}

// void - no return value
function log(message: string): void {
  console.log(message);
}

// never - function never returns
function throwError(message: string): never {
  throw new Error(message);
}
```

## 💡 Best Practices

1. **Always specify types** - Even when TypeScript can infer them
2. **Avoid `any`** - Use `unknown` instead when type is truly unknown
3. **Use const for enums** - More efficient: `const enum Status { ... }`
4. **Prefer string enums** - More readable in debugging
5. **Use tuples sparingly** - Consider objects for better readability

## 🏋️ Exercises

Create a file `exercises.ts` in this folder and complete these tasks:

1. Create variables for different primitive types
2. Create an array of product objects with names and prices
3. Create a tuple representing a coordinate (x, y, z)
4. Create an enum for days of the week
5. Write a function that accepts `unknown` and safely processes it

## 📖 Additional Resources

- [TypeScript Basic Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Enums Documentation](https://www.typescriptlang.org/docs/handbook/enums.html)
