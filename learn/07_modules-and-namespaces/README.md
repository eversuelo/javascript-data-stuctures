# 07 - Modules and Namespaces

## 📝 Overview
Learn how to organize and structure TypeScript code using modules and namespaces.

## 🎯 Learning Objectives
- Understand ES6 module syntax
- Use import/export effectively
- Learn module resolution strategies
- Work with namespaces (when needed)
- Configure module systems in tsconfig

## 📚 Topics Covered

### 1. ES6 Modules
```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14159;

// app.ts
import { add, PI } from './math';
```

### 2. Default Exports
```typescript
// user.ts
export default class User {
  constructor(public name: string) {}
}

// app.ts
import User from './user';
```

### 3. Module Re-exports
```typescript
// index.ts
export { User } from './user';
export { Product } from './product';
export * from './utils';
```

### 4. Namespaces (Legacy)
```typescript
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }

  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.includes('@');
    }
  }
}
```

### 5. Module Resolution
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "node",
    "baseUrl": "./src",
    "paths": {
      "@models/*": ["models/*"],
      "@utils/*": ["utils/*"]
    }
  }
}
```

## 💡 Best Practices

1. **Prefer ES6 modules** - Over namespaces
2. **Use barrel exports** - Simplify imports
3. **Configure path aliases** - Cleaner imports
4. **One export per file** - Better tree-shaking
5. **Avoid circular dependencies** - Causes issues

## 🏋️ Exercises

1. Create a module structure for a todo app
2. Set up barrel exports for utilities
3. Configure path aliases in tsconfig
4. Refactor namespace code to modules
5. Build a plugin system with modules

## 📖 Additional Resources

- [Modules Documentation](https://www.typescriptlang.org/docs/handbook/2/modules.html)
