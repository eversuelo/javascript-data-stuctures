// Dictionary using object literal {}
const hm2: { [key: string]: number } = {};
hm2["Apple"] = 10;
hm2["Banana"] = 20;
hm2["Mango"] = 30;

console.log(hm2);                                    // { Apple: 10, Banana: 20, Mango: 30 }
console.log(`Map size: ${Object.keys(hm2).length}`); // Map size: 3
console.log(hm2.hasOwnProperty("Apple"));            // true
console.log(hm2["Apple"]);                           // 10
console.log(hm2.hasOwnProperty("Grape"));            // false

// Dictionary using Map()
const hm = new Map<string, number>();
hm.set("Apple", 10);
hm.set("Banana", 20);
hm.set("Mango", 30);

console.log(hm);                     // Map(3) { 'Apple' => 10, 'Banana' => 20, 'Mango' => 30 }
console.log(`Map size: ${hm.size}`); // Map size: 3
console.log(hm.has("Apple"));        // true
console.log(hm.get("Apple"));        // 10
console.log(hm.has("Grape"));        // false
