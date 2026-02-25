# 04 - Classes and OOP

## 📝 Overview
Learn object-oriented programming in TypeScript with classes, inheritance, and access modifiers.

## 🎯 Learning Objectives
- Create and use classes
- Understand access modifiers (public, private, protected)
- Implement inheritance and polymorphism
- Work with abstract classes
- Use static members and methods

## 📚 Topics Covered

### 1. Basic Classes
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, I'm ${this.name}`;
  }
}
```

### 2. Access Modifiers
```typescript
class BankAccount {
  public accountNumber: string;
  private balance: number;
  protected owner: string;

  constructor(accountNumber: string, owner: string) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = 0;
  }
}
```

### 3. Inheritance
```typescript
class Animal {
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}
```

### 4. Abstract Classes
```typescript
abstract class Shape {
  abstract area(): number;
  
  describe(): string {
    return `Area: ${this.area()}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

### 5. Static Members
```typescript
class MathUtils {
  static PI: number = 3.14159;
  
  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}
```

## 💡 Best Practices

1. **Use access modifiers** - Encapsulate properly
2. **Favor composition over inheritance** - More flexible
3. **Keep classes focused** - Single responsibility
4. **Use abstract classes for contracts** - Enforce implementation
5. **Leverage readonly** - Prevent mutations

## 🏋️ Exercises

1. Create a Vehicle class hierarchy (Car, Motorcycle, Truck)
2. Implement a banking system with Account classes
3. Build a shape library with abstract base class
4. Create a user management system with roles
5. Design a game character system with inheritance

## 📖 Additional Resources

- [Classes in TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html)
