# 02 - Functions and Objects

## 📝 Overview
Master function signatures, optional parameters, rest parameters, and object typing in TypeScript.

## 🎯 Learning Objectives
- Type function parameters and return values
- Use optional and default parameters
- Work with rest parameters
- Define object types and interfaces
- Understand function overloading

## 📚 Topics Covered

### 1. Function Types
```typescript
// Basic function with typed parameters and return
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Function type
type MathOperation = (x: number, y: number) => number;
```

### 2. Optional and Default Parameters
```typescript
// Optional parameter
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

// Default parameter
function createUser(name: string, role: string = "user"): void {
  console.log(`${name} - ${role}`);
}
```

### 3. Rest Parameters
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### 4. Object Types
```typescript
// Object literal type
function printUser(user: { name: string; age: number }): void {
  console.log(`${user.name} is ${user.age} years old`);
}

// Optional properties
type Product = {
  id: number;
  name: string;
  description?: string; // Optional
  readonly price: number; // Cannot be modified
};
```

### 5. Function Overloading
```typescript
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return String(value);
}
```

## 💡 Best Practices

1. **Always type parameters and returns** - Even when inferred
2. **Use optional parameters wisely** - Consider default values instead
3. **Keep functions focused** - Single responsibility principle
4. **Use readonly for immutability** - Prevent accidental modifications
5. **Prefer type aliases for complex objects** - Better readability

## 🏋️ Exercises

1. Create a function that formats a user's full name with optional middle name
2. Write a function that accepts rest parameters for calculating average
3. Define an object type for a blog post with optional tags
4. Create function overloads for a search function
5. Build a calculator with typed methods

## 📖 Additional Resources

- [Functions in TypeScript](https://www.typescriptlang.org/docs/handbook/2/functions.html)
- [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
