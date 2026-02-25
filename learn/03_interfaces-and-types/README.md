# 03 - Interfaces and Types

## 📝 Overview
Deep dive into TypeScript's interface system and type aliases, understanding when to use each.

## 🎯 Learning Objectives
- Master interface declarations
- Understand type aliases
- Learn interface extension and implementation
- Work with intersection and union types
- Know when to use interface vs type

## 📚 Topics Covered

### 1. Interfaces
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John",
  email: "john@example.com"
};
```

### 2. Extending Interfaces
```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: string;
  department: string;
}
```

### 3. Type Aliases
```typescript
type ID = string | number;
type Point = { x: number; y: number };
type Callback = (data: string) => void;
```

### 4. Intersection Types
```typescript
type Admin = {
  role: "admin";
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;
```

### 5. Union Types
```typescript
type Status = "pending" | "approved" | "rejected";
type Result = Success | Error;
```

## 💡 Interface vs Type

**Use Interface when:**
- Defining object shapes
- You need declaration merging
- Working with classes (implements)

**Use Type when:**
- Creating unions or intersections
- Defining primitives or tuples
- Using mapped or conditional types

## 🏋️ Exercises

1. Create interfaces for a blog system (Post, Author, Comment)
2. Extend interfaces to add admin capabilities
3. Create union types for API responses
4. Use intersection types to combine user roles
5. Practice declaration merging with interfaces

## 📖 Additional Resources

- [Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [Type Aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
