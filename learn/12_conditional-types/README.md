# 12 - Conditional Types

## 📝 Overview
Master conditional types to create flexible, powerful type transformations.

## 🎯 Learning Objectives
- Understand conditional type syntax
- Use the infer keyword
- Create distributive conditional types
- Build complex type utilities
- Apply conditional types in real scenarios

## 📚 Topics Covered

### 1. Basic Conditional Types
```typescript
// T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

### 2. infer Keyword
```typescript
// Extract return type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUser() {
  return { id: 1, name: "John" };
}

type User = ReturnType<typeof getUser>;
// { id: number; name: string }
```

### 3. Distributive Conditional Types
```typescript
// When T is a union, the conditional type distributes
type ToArray<T> = T extends any ? T[] : never;

type A = ToArray<string | number>;
// string[] | number[]  (not (string | number)[])
```

### 4. Non-Distributive Types
```typescript
// Use tuple to prevent distribution
type ToArrayNonDistributive<T> = [T] extends [any] ? T[] : never;

type B = ToArrayNonDistributive<string | number>;
// (string | number)[]
```

### 5. Complex Examples
```typescript
// Flatten nested arrays
type Flatten<T> = T extends Array<infer U> ? Flatten<U> : T;

type A = Flatten<number[]>; // number
type B = Flatten<number[][]>; // number
type C = Flatten<number[][][]>; // number

// Extract function parameters
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

function createUser(name: string, age: number, email: string) {}
type Params = Parameters<typeof createUser>;
// [string, number, string]

// Unwrap Promise
type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T;

type A = Awaited<Promise<string>>; // string
type B = Awaited<Promise<Promise<number>>>; // number
```

### 6. Custom Utility Types
```typescript
// Make specific keys optional
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface User {
  id: number;
  name: string;
  email: string;
}

type UserUpdate = PartialBy<User, 'name' | 'email'>;
// { id: number; name?: string; email?: string }

// Pick properties of specific type
type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P];
};

interface Mixed {
  id: number;
  name: string;
  age: number;
  email: string;
}

type Numbers = PickByType<Mixed, number>;
// { id: number; age: number }
```

## 💡 Best Practices

1. **Use built-in types first** - Before creating custom ones
2. **Document complex types** - Explain logic
3. **Test edge cases** - Union types, never, any
4. **Leverage distributivity** - Understand when it applies
5. **Keep types readable** - Break complex types into parts

## 🏋️ Exercises

1. Create a DeepReadonly conditional type
2. Build an ExtractByValue utility type
3. Implement a type to extract async function return types
4. Create a RequireAtLeastOne utility type
5. Build a type that extracts all string keys

## 📖 Additional Resources

- [Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
