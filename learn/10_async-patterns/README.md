# 10 - Async Patterns

## 📝 Overview
Master asynchronous programming in TypeScript with Promises, async/await, and proper typing.

## 🎯 Learning Objectives
- Type Promises correctly
- Use async/await with types
- Handle async errors
- Type callbacks and event handlers
- Work with Observable patterns

## 📚 Topics Covered

### 1. Promise Types
```typescript
// Promise with explicit type
function fetchUser(id: number): Promise<User> {
  return fetch(`/api/users/${id}`)
    .then(res => res.json());
}

// Using async/await
async function getUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}
```

### 2. Error Handling
```typescript
async function fetchData(): Promise<Data | null> {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    return response.json();
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
```

### 3. Multiple Promises
```typescript
// Promise.all with types
async function fetchAll(): Promise<[User[], Post[]]> {
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);
  return [users, posts];
}

// Promise.race
async function fetchWithTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number
): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), timeoutMs)
  );
  return Promise.race([promise, timeout]);
}
```

### 4. Callback Types
```typescript
type Callback<T> = (error: Error | null, result?: T) => void;

function readFile(path: string, callback: Callback<string>): void {
  // Implementation
}

// Generic async function type
type AsyncFunction<T, R> = (arg: T) => Promise<R>;
```

### 5. Event Handlers
```typescript
interface EventMap {
  'click': MouseEvent;
  'submit': SubmitEvent;
  'custom': CustomEvent<{ data: string }>;
}

type EventHandler<E extends Event> = (event: E) => void;

class EventEmitter<Events extends EventMap> {
  on<K extends keyof Events>(
    event: K,
    handler: EventHandler<Events[K]>
  ): void {
    // Implementation
  }
}
```

## 💡 Best Practices

1. **Always type Promises** - Specify resolved value type
2. **Handle rejections** - Use try/catch or .catch()
3. **Avoid Promise constructors** - Use async/await
4. **Type error handling** - unknown type for errors
5. **Use generics for flexibility** - Reusable async utilities

## 🏋️ Exercises

1. Create a typed retry utility for failed requests
2. Build a debounced async function wrapper
3. Implement a typed event emitter
4. Create a queue for sequential async operations
5. Build a cache layer with expiry for async calls

## 📖 Additional Resources

- [Async Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-7.html#async-functions)
