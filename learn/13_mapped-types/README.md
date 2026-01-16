# 13 - Mapped Types

## 📝 Overview
Learn to transform types using mapped types and template literal types.

## 🎯 Learning Objectives
- Understand mapped type syntax
- Create type transformations
- Use template literal types
- Build custom utility types
- Master key remapping

## 📚 Topics Covered

### 1. Basic Mapped Types
```typescript
// Make all properties optional
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Make all properties readonly
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

type OptionalUser = Optional<User>;
// { name?: string; age?: number }
```

### 2. Key Remapping
```typescript
// Add prefix to all keys
type Prefixed<T, Prefix extends string> = {
  [P in keyof T as `${Prefix}${string & P}`]: T[P];
};

interface User {
  name: string;
  email: string;
}

type PrefixedUser = Prefixed<User, "user_">;
// { user_name: string; user_email: string }
```

### 3. Template Literal Types
```typescript
// Create event names
type EventName<T extends string> = `on${Capitalize<T>}`;

type Events = EventName<"click" | "focus" | "blur">;
// "onClick" | "onFocus" | "onBlur"

// Getters and setters
type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type Setters<T> = {
  [P in keyof T as `set${Capitalize<string & P>}`]: (value: T[P]) => void;
};

interface State {
  name: string;
  age: number;
}

type StateGetters = Getters<State>;
// { getName: () => string; getAge: () => number }
```

### 4. Filtering Properties
```typescript
// Remove specific keys
type OmitByType<T, U> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P];
};

interface Mixed {
  id: number;
  name: string;
  active: boolean;
  count: number;
}

type NoNumbers = OmitByType<Mixed, number>;
// { name: string; active: boolean }
```

### 5. Advanced Transformations
```typescript
// Deep readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};

// Deep partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

// Nullable type
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
```

### 6. Practical Examples
```typescript
// API response type from request type
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

type UserRequest = {
  name: string;
  email: string;
};

type UserResponse = ApiResponse<UserRequest>;

// Form state from model
type FormState<T> = {
  [P in keyof T]: {
    value: T[P];
    error: string | null;
    touched: boolean;
  };
};

interface LoginForm {
  email: string;
  password: string;
}

type LoginFormState = FormState<LoginForm>;
// {
//   email: { value: string; error: string | null; touched: boolean };
//   password: { value: string; error: string | null; touched: boolean };
// }
```

## 💡 Best Practices

1. **Use descriptive names** - Make intent clear
2. **Document complex mappings** - Explain transformations
3. **Test with various inputs** - Edge cases matter
4. **Compose small utilities** - Build complexity gradually
5. **Leverage template literals** - Type-safe string manipulation

## 🏋️ Exercises

1. Create a DeepRequired type
2. Build a type to convert snake_case to camelCase
3. Implement a type for converting interfaces to classes
4. Create a type for extracting async methods
5. Build a validation schema type from a model

## 📖 Additional Resources

- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)
