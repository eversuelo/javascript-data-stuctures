# 14 - Best Practices

## 📝 Overview
Learn industry best practices for writing maintainable, scalable TypeScript code.

## 🎯 Learning Objectives
- Configure tsconfig properly
- Structure TypeScript projects
- Follow naming conventions
- Optimize compilation performance
- Set up testing and linting

## 📚 Topics Covered

### 1. tsconfig.json Best Practices
```json
{
  "compilerOptions": {
    // Type Checking
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    
    // Modules
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    
    // Emit
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    
    // Interop Constraints
    "isolatedModules": true,
    "allowJs": false,
    "checkJs": false,
    
    // Quality
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    
    // Advanced
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.spec.ts"]
}
```

### 2. Project Structure
```
src/
├── models/          # Data models and interfaces
│   ├── user.model.ts
│   └── index.ts
├── services/        # Business logic
│   ├── user.service.ts
│   └── index.ts
├── repositories/    # Data access
│   ├── user.repository.ts
│   └── index.ts
├── utils/          # Helper functions
│   ├── validation.ts
│   └── index.ts
├── types/          # Type definitions
│   ├── api.types.ts
│   └── index.ts
├── constants/      # Application constants
│   └── index.ts
└── index.ts        # Entry point
```

### 3. Naming Conventions
```typescript
// Interfaces: PascalCase, descriptive
interface UserProfile {
  id: number;
  name: string;
}

// Types: PascalCase
type UserId = string | number;

// Enums: PascalCase
enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

// Functions: camelCase, verb-based
function getUserById(id: number): User {}
function calculateTotal(items: Item[]): number {}

// Variables: camelCase
const userName = "John";
const userList: User[] = [];

// Constants: UPPER_SNAKE_CASE
const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";

// Classes: PascalCase
class UserService {}

// Private members: prefix with _
class UserService {
  private _cache: Map<string, User>;
  private _logger: Logger;
}
```

### 4. Code Organization
```typescript
// ❌ Bad: Everything in one file
export class UserService {
  // 500 lines of code
}

// ✅ Good: Separated concerns
// user.model.ts
export interface User {
  id: number;
  name: string;
}

// user.repository.ts
export class UserRepository {
  findById(id: number): Promise<User> {}
}

// user.service.ts
export class UserService {
  constructor(private repo: UserRepository) {}
  
  async getUser(id: number): Promise<User> {
    return this.repo.findById(id);
  }
}
```

### 5. Type Safety
```typescript
// ❌ Avoid any
function processData(data: any) {
  return data.value;
}

// ✅ Use proper types
interface Data {
  value: string;
}

function processData(data: Data): string {
  return data.value;
}

// ✅ Use unknown for truly unknown types
function processUnknown(data: unknown): string {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return String((data as { value: unknown }).value);
  }
  throw new Error('Invalid data');
}
```

### 6. Error Handling
```typescript
// Define error types
class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Type-safe error handling
async function createUser(data: UserInput): Promise<User> {
  try {
    validate(data);
    return await saveUser(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`Validation failed for ${error.field}: ${error.message}`);
    } else if (error instanceof Error) {
      console.error(`Unexpected error: ${error.message}`);
    }
    throw error;
  }
}
```

### 7. Documentation
```typescript
/**
 * Calculates the total price of items in the cart
 * @param items - Array of cart items
 * @param discountCode - Optional discount code to apply
 * @returns Total price after applying discounts
 * @throws {ValidationError} If items array is empty
 * 
 * @example
 * ```typescript
 * const total = calculateTotal([item1, item2], "SAVE10");
 * ```
 */
function calculateTotal(
  items: CartItem[],
  discountCode?: string
): number {
  // Implementation
}
```

### 8. Testing Setup
```typescript
// user.service.spec.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should get user by id', async () => {
    const user = await service.getUser(1);
    expect(user).toBeDefined();
    expect(user.id).toBe(1);
  });
});
```

### 9. Linting Configuration
```json
// .eslintrc.json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

### 10. Performance Tips
```typescript
// ✅ Use const assertions for literal types
const config = {
  API_URL: 'https://api.example.com',
  TIMEOUT: 5000
} as const;

// ✅ Use type narrowing instead of type assertions
function processValue(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase(); // Type narrowed to string
  }
  return value.toFixed(2); // Type narrowed to number
}

// ✅ Leverage tree-shaking with ES modules
export { User } from './user';
export { Product } from './product';
// Instead of: export * from './models';
```

## 💡 Best Practices Summary

1. **Enable strict mode** - Catch more errors at compile time
2. **Use explicit types** - Even when inference works
3. **Document public APIs** - JSDoc for complex functions
4. **Test your code** - Unit and integration tests
5. **Lint consistently** - Enforce code quality
6. **Follow conventions** - Consistent naming and structure
7. **Avoid any** - Type everything properly
8. **Handle errors** - Type-safe error handling
9. **Optimize imports** - Better tree-shaking
10. **Review regularly** - Keep code quality high

## 🏋️ Exercises

1. Set up a new TypeScript project from scratch
2. Configure ESLint and Prettier
3. Create a multi-layer architecture (models, services, repos)
4. Write comprehensive tests for a service
5. Document a complex module with JSDoc

## 📖 Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Clean Code TypeScript](https://github.com/labs42io/clean-code-typescript)
