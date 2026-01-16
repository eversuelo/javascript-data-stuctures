# 11 - Type Guards

## 📝 Overview
Learn to narrow types safely using type guards and discriminated unions.

## 🎯 Learning Objectives
- Use built-in type guards (typeof, instanceof)
- Create custom type guards
- Work with discriminated unions
- Understand type predicates
- Master exhaustiveness checking

## 📚 Topics Covered

### 1. typeof Type Guards
```typescript
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    // padding is number here
    return " ".repeat(padding) + value;
  }
  // padding is string here
  return padding + value;
}
```

### 2. instanceof Type Guards
```typescript
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // Type narrowed to Dog
  } else {
    animal.meow(); // Type narrowed to Cat
  }
}
```

### 3. Custom Type Guards
```typescript
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

// Type predicate function
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // TypeScript knows it's Fish
  } else {
    pet.fly(); // TypeScript knows it's Bird
  }
}
```

### 4. Discriminated Unions
```typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}
```

### 5. Exhaustiveness Checking
```typescript
type Shape = Circle | Rectangle | Triangle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      // Exhaustiveness check
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}
```

### 6. in Operator Narrowing
```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // Type narrowed to Fish
  } else {
    animal.fly(); // Type narrowed to Bird
  }
}
```

### 7. Truthiness Narrowing
```typescript
function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length); // str is string here
  } else {
    console.log("No string provided");
  }
}
```

## 💡 Best Practices

1. **Use discriminated unions** - Safest pattern
2. **Create type predicates** - For complex checks
3. **Prefer typeof/instanceof** - Built-in guards are fastest
4. **Implement exhaustiveness** - Catch missing cases
5. **Avoid type assertions** - Use guards instead

## 🏋️ Exercises

1. Create type guards for API response types
2. Build a discriminated union for app states
3. Implement exhaustiveness checking for user roles
4. Create custom guards for validation
5. Build a type-safe state machine with guards

## 📖 Additional Resources

- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Type Guards](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)
