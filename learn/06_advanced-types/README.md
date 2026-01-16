# 06 - Advanced Types

## 📝 Overview
Explore TypeScript's powerful type system features including union, intersection, and literal types.

## 🎯 Learning Objectives
- Master union and intersection types
- Work with literal types
- Understand type narrowing
- Use type aliases effectively
- Learn about index signatures

## 📚 Topics Covered

### 1. Union Types
```typescript
type StringOrNumber = string | number;

function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

### 2. Intersection Types
```typescript
type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type User = {
  name: string;
  email: string;
};

type TimestampedUser = User & Timestamped;
```

### 3. Literal Types
```typescript
type Direction = "north" | "south" | "east" | "west";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}
```

### 4. Index Signatures
```typescript
interface StringDictionary {
  [key: string]: string;
}

interface NumberDictionary {
  [index: number]: string;
  length: number;
}
```

### 5. Type Narrowing
```typescript
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}
```

## 💡 Best Practices

1. **Use union types for alternatives** - Better than any
2. **Narrow types before use** - Type guards are your friend
3. **Prefer literal types for constants** - Type-safe enums
4. **Use intersection for composition** - Combine behaviors
5. **Index signatures for dynamic keys** - Dictionary patterns

## 🏋️ Exercises

1. Create union types for API response states
2. Build intersection types for user permissions
3. Implement literal types for configuration
4. Use index signatures for translations
5. Practice type narrowing with various guards

## 📖 Additional Resources

- [Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
