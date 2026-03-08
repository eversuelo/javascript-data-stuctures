const hs = new Set<string>();
hs.add("Banana");
hs.add("Apple");
hs.add("Mango");

console.log(hs);                                       // Set(3) { 'Banana', 'Apple', 'Mango' }
console.log(`Set size: ${hs.size}`);                   // Set size: 3
console.log(`Apple present: ${hs.has("Apple")}`);      // Apple present: true
console.log(`Grapes present: ${hs.has("Grapes")}`);    // Grapes present: false

hs.delete("Apple");
console.log(hs);                                       // Set(2) { 'Banana', 'Mango' }
console.log(`Apple present: ${hs.has("Apple")}`);      // Apple present: false
