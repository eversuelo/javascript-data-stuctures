# 09 - Utility Types

## 📝 Overview
Master TypeScript's built-in utility types to transform and manipulate types efficiently.

## 🎯 Learning Objectives
- Understand all built-in utility types
- Use Partial, Required, Readonly
- Work with Pick, Omit, Record
- Master ReturnType, Parameters
- Create custom utility types

## 📚 Topics Covered

### 1. Partial<T>
```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// All properties become optional
type PartialUser = Partial<User>;

function updateUser(id: number, updates: Partial<User>) {
  // Can update any subset of properties
}
```

### 2. Required<T>
```typescript
interface Config {
  host?: string;
  port?: number;
}

// All properties become required
type RequiredConfig = Required<Config>;
```

### 3. Readonly<T>
```typescript
interface Point {
  x: number;
  y: number;
}

const point: Readonly<Point> = { x: 10, y: 20 };
// point.x = 5; // Error: Cannot assign to 'x'
```

### 4. Pick<T, K>
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Select specific properties
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;
```

### 5. Omit<T, K>
```typescript
// Exclude specific properties
type UserWithoutPassword = Omit<User, 'password'>;
```

### 6. Record<K, T>
```typescript
// Create object type with specific keys
type Roles = 'admin' | 'user' | 'guest';
type Permissions = Record<Roles, string[]>;

const permissions: Permissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read']
};
```

### 7. ReturnType<T>
```typescript
function getUser() {
  return { id: 1, name: "John" };
}

// Extract return type of function
type User = ReturnType<typeof getUser>;
```

### 8. Parameters<T>
```typescript
function createUser(name: string, age: number, email: string) {
  // ...
}

// Extract parameter types as tuple
type CreateUserParams = Parameters<typeof createUser>;
// [string, number, string]
```

### 9. Exclude<T, U>
```typescript
type T = string | number | boolean;
type NoBoolean = Exclude<T, boolean>; // string | number
```

### 10. Extract<T, U>
```typescript
type T = string | number | boolean;
type OnlyString = Extract<T, string>; // string
```

### 11. NonNullable<T>
```typescript
type T = string | number | null | undefined;
type NonNull = NonNullable<T>; // string | number
```

## 💡 Best Practices

1. **Use utility types** - Instead of manual type manipulation
2. **Combine utility types** - Create complex transformations
3. **Document custom utilities** - Explain behavior
4. **Prefer built-in types** - Before creating custom ones
5. **Keep types DRY** - Utility types help avoid duplication

## 🏋️ Exercises

1. Create a DeepPartial utility type
2. Build a DeepReadonly utility type
3. Implement a Nullable utility type
4. Create a PickByType utility
5. Build a function parameter validator using utility types

## 📖 Additional Resources

- [Utility Types Reference](https://www.typescriptlang.org/docs/handbook/utility-types.html)
