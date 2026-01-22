// ============================================
// 01 - DATA TYPES EXAMPLES (Auto-executable)
// Ejecuta con: npx ts-node examples.ts
// ============================================

console.log("=".repeat(60));
console.log("TYPESCRIPT DATA TYPES - EXAMPLES");
console.log("=".repeat(60));

// ============================================
// PRIMITIVE TYPES
// ============================================
console.log("\n📌 1. PRIMITIVE TYPES");
console.log("-".repeat(60));

// String type
const username: string = "Alice";
const greeting: string = `Hello, ${username}!`;
console.log(`String example: ${greeting}`);

// Number type (integers and decimals)
const age: number = 25;
const price: number = 19.99;
const hexValue: number = 0xf00d;
console.log(`Number examples: age=${age}, price=$${price}, hex=${hexValue}`);

// Boolean type
const isLoggedIn: boolean = true;
const hasPermission: boolean = false;
console.log(`Boolean examples: isLoggedIn=${isLoggedIn}, hasPermission=${hasPermission}`);

// Null and Undefined
const emptyValue: null = null;
const notAssigned: undefined = undefined;
console.log(`Special values: null=${emptyValue}, undefined=${notAssigned}`);

// ============================================
// ARRAYS
// ============================================
console.log("\n📌 2. ARRAYS");
console.log("-".repeat(60));

// Array of numbers
const scores: number[] = [85, 90, 78, 95];
console.log(`Scores array:`, scores);
console.log(`Average score: ${scores.reduce((a, b) => a + b) / scores.length}`);

// Array of strings (alternative syntax)
const fruits: Array<string> = ["apple", "banana", "orange"];
console.log(`Fruits:`, fruits.join(", "));

// Union type array
const mixedData: (string | number)[] = ["text", 42, "more text", 100];
console.log(`Mixed array:`, mixedData);

// Readonly array
const constants: readonly number[] = [3.14, 2.71, 1.41];
console.log(`Constants (readonly):`, constants);
// constants.push(1.73); // 🚫 Error: Cannot modify readonly array

// ============================================
// TUPLES
// ============================================
console.log("\n📌 3. TUPLES");
console.log("-".repeat(60));

// Basic tuple
const person: [string, number] = ["John Doe", 30];
console.log(`Person: ${person[0]}, Age: ${person[1]}`);

// Tuple with optional element
const coordinate2D: [number, number] = [10, 20];
const coordinate3D: [number, number, number?] = [10, 20, 30];
console.log(`2D Coordinate: (${coordinate2D[0]}, ${coordinate2D[1]})`);
console.log(`3D Coordinate: (${coordinate3D[0]}, ${coordinate3D[1]}, ${coordinate3D[2]})`);

// Named tuples (TypeScript 4.0+)
type Point = [x: number, y: number];
const point: Point = [100, 200];
console.log(`Point: x=${point[0]}, y=${point[1]}`);

// Tuple with rest elements
type StringNumberBooleans = [string, number, ...boolean[]];
const data: StringNumberBooleans = ["hello", 42, true, false, true];
console.log(`Tuple with rest: "${data[0]}", ${data[1]}, [${data.slice(2).join(", ")}]`);

// ============================================
// ENUMS
// ============================================
console.log("\n📌 4. ENUMS");
console.log("-".repeat(60));

// Numeric enum (auto-incremented)
enum LogLevel {
    Debug,    // 0
    Info,     // 1
    Warning,  // 2
    Error     // 3
}

const currentLevel: LogLevel = LogLevel.Info;
console.log(`Log level: ${LogLevel[currentLevel]} (${currentLevel})`);

// String enum
enum HttpStatus {
    OK = "200",
    NotFound = "404",
    ServerError = "500"
}

const status: HttpStatus = HttpStatus.OK;
console.log(`HTTP Status: ${status}`);

// Function using enum
function logMessage(level: LogLevel, message: string): void {
    console.log(`[${LogLevel[level]}] ${message}`);
}

logMessage(LogLevel.Warning, "This is a warning message");
logMessage(LogLevel.Error, "This is an error message");

// Const enum (more efficient, inlined at compile time)
const enum Direction {
    North = "N",
    South = "S",
    East = "E",
    West = "W"
}

const heading: Direction = Direction.North;
console.log(`Heading direction: ${heading}`);

// ============================================
// SPECIAL TYPES
// ============================================
console.log("\n📌 5. SPECIAL TYPES");
console.log("-".repeat(60));

// Any type (avoid when possible)
let anything: any = 42;
console.log(`Any type (number): ${anything}`);
anything = "now I'm a string";
console.log(`Any type (string): ${anything}`);
anything = { key: "value" };
console.log(`Any type (object):`, anything);

// Unknown type (safer than any)
function getUserInput(): unknown {
    return "user typed this";
}

const userInput: unknown = getUserInput();
console.log(`Unknown type raw:`, userInput);

// Type checking before using unknown
if (typeof userInput === "string") {
    console.log(`Unknown type processed: ${userInput.toUpperCase()}`);
}

// Void type (no return value)
function logAction(action: string): void {
    console.log(`Action performed: ${action}`);
}

logAction("User clicked the button");

// Never type demonstration
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

try {
    // throwError("This is an intentional error"); // Uncomment to see it fail
    console.log(`Never type: Would throw error if uncommented`);
} catch (error) {
    console.error("Caught error:", error);
}

// ============================================
// TYPE ASSERTIONS
// ============================================
console.log("\n📌 6. TYPE ASSERTIONS");
console.log("-".repeat(60));

// When you know more about a type than TypeScript does
const someValue: unknown = "this is a string";

// As syntax (preferred)
const strLength: number = (someValue as string).length;
console.log(`String length via assertion: ${strLength}`);

// ============================================
// LITERAL TYPES
// ============================================
console.log("\n📌 7. LITERAL TYPES");
console.log("-".repeat(60));

// Exact value types
type YesOrNo = "yes" | "no";
const answer: YesOrNo = "yes";
console.log(`Answer: ${answer}`);

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
const roll: DiceRoll = 4;
console.log(`Dice roll: ${roll}`);

// Function with literal type
function move(direction: "north" | "south" | "east" | "west"): void {
    console.log(`Moving ${direction}`);
}

move("north");
move("east");

// ============================================
// PRACTICAL EXAMPLES
// ============================================
console.log("\n📌 8. PRACTICAL EXAMPLES");
console.log("-".repeat(60));

// Product inventory system
type ProductId = number;
type ProductName = string;
type ProductPrice = number;
type InStock = boolean;

enum Category {
    Electronics = "ELECTRONICS",
    Clothing = "CLOTHING",
    Food = "FOOD",
    Books = "BOOKS"
}

const product: [ProductId, ProductName, ProductPrice, InStock, Category] = [
    1,
    "Laptop",
    999.99,
    true,
    Category.Electronics
];

console.log(`Product: ${product[1]}`);
console.log(`  ID: ${product[0]}`);
console.log(`  Price: $${product[2]}`);
console.log(`  In Stock: ${product[3]}`);
console.log(`  Category: ${product[4]}`);

// User roles system
enum UserRole {
    Guest,
    User,
    Admin,
    SuperAdmin
}

function checkPermission(role: UserRole): boolean {
    return role >= UserRole.Admin;
}

console.log(`\nPermission checks:`);
console.log(`  Guest has admin access: ${checkPermission(UserRole.Guest)}`);
console.log(`  User has admin access: ${checkPermission(UserRole.User)}`);
console.log(`  Admin has admin access: ${checkPermission(UserRole.Admin)}`);
console.log(`  SuperAdmin has admin access: ${checkPermission(UserRole.SuperAdmin)}`);

// Configuration with strict types
type Environment = "development" | "staging" | "production";
type Port = number;
type Config = [Environment, Port, boolean];

const appConfig: Config = ["production", 8080, true];
console.log(`\nApp Configuration:`);
console.log(`  Environment: ${appConfig[0]}`);
console.log(`  Port: ${appConfig[1]}`);
console.log(`  SSL Enabled: ${appConfig[2]}`);

// ============================================
// TYPE INFERENCE DEMO
// ============================================
console.log("\n📌 9. TYPE INFERENCE");
console.log("-".repeat(60));

// TypeScript infers types automatically
let inferredString = "TypeScript is smart";  // inferred as string
let inferredNumber = 42;                      // inferred as number
let inferredBool = true;                      // inferred as boolean

console.log(`Inferred types work seamlessly:`);
console.log(`  "${inferredString}" is a ${typeof inferredString}`);
console.log(`  ${inferredNumber} is a ${typeof inferredNumber}`);
console.log(`  ${inferredBool} is a ${typeof inferredBool}`);

// ============================================
// ARRAY METHODS WITH TYPES
// ============================================
console.log("\n📌 10. ARRAY OPERATIONS");
console.log("-".repeat(60));

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map
const doubled = numbers.map((n: number) => n * 2);
console.log(`Original: [${numbers.join(", ")}]`);
console.log(`Doubled:  [${doubled.join(", ")}]`);

// Filter
const evenNumbers = numbers.filter((n: number) => n % 2 === 0);
console.log(`Even:     [${evenNumbers.join(", ")}]`);

// Reduce
const sum = numbers.reduce((acc: number, curr: number) => acc + curr, 0);
console.log(`Sum:      ${sum}`);

// ============================================
// COMPLETION
// ============================================
console.log("\n" + "=".repeat(60));
console.log("✅ All examples executed successfully!");
console.log("=".repeat(60));
