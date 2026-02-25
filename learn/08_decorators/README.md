# 08 - Decorators

## 📝 Overview
Learn TypeScript decorators for metaprogramming and aspect-oriented programming.

## 🎯 Learning Objectives
- Understand decorator syntax
- Create class decorators
- Use method and property decorators
- Work with parameter decorators
- Build decorator factories

## 📚 Topics Covered

### 1. Class Decorators
```typescript
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

### 2. Method Decorators
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}
```

### 3. Property Decorators
```typescript
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

class Person {
  @readonly
  name: string = "John";
}
```

### 4. Decorator Factories
```typescript
function validate(min: number, max: number) {
  return function(target: any, propertyKey: string) {
    let value: number;
    
    Object.defineProperty(target, propertyKey, {
      get() { return value; },
      set(newValue: number) {
        if (newValue < min || newValue > max) {
          throw new Error(`Value must be between ${min} and ${max}`);
        }
        value = newValue;
      }
    });
  };
}

class User {
  @validate(18, 100)
  age: number;
}
```

## 💡 Best Practices

1. **Enable experimentalDecorators** - In tsconfig.json
2. **Use decorator factories** - More flexible
3. **Document decorator behavior** - Not obvious from code
4. **Consider performance** - Decorators run at class definition
5. **Combine decorators** - Applied bottom-up

## 🏋️ Exercises

1. Create a @deprecated decorator for methods
2. Build a validation decorator system
3. Implement a @memoize decorator for caching
4. Create an @authorized decorator for methods
5. Build a logging framework with decorators

## 📖 Additional Resources

- [Decorators Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html)

## ⚙️ Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```
