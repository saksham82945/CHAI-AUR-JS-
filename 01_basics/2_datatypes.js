// ============================================================
//  📊 JAVASCRIPT DATA TYPES — Samjho Poori Duniya Ko!
// ============================================================
// JavaScript me data types do categories me hote hain:
//   1. Primitive Types   → Simple values (Stack memory mein store)
//   2. Non-Primitive      → Complex values (Heap memory mein store)
//
// "use strict" — strict mode on karta hai
// Strict mode purane aur dangerous JS features ko block karta hai
// Best practice hai ise file ke top mein likhna
// ============================================================

"use strict";


// ============================================================
// 🔢 PRIMITIVE DATA TYPES (7 Types)
// ============================================================
// Primitive types directly value store karte hain
// Jab copy karo to ek NAYI COPY milti hai (original safe rehta hai)


// 1️⃣ number → Integer aur decimal dono cover karta hai
//    Range: -(2^53 - 1) se (2^53 - 1) tak (safe integer range)
let age       = 18;        // Integer
let price     = 99.99;     // Decimal (float)
let score     = -50;       // Negative number
console.log(typeof age);   // "number"


// 2️⃣ bigint → Bahut bade numbers ke liye (n suffix lagao)
//    Jab number > 2^53 ho, tab BigInt use karo
let bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // "bigint"


// 3️⃣ string → Characters ka sequence (text data)
//    Single quotes, double quotes, ya backticks use kar sakte ho
let name         = "Hitesh";
let city         = 'Jaipur';
let greeting     = `Hello, ${name}!`; // Template literal (modern way)
console.log(typeof name);            // "string"
console.log(greeting);               // "Hello, Hitesh!"


// 4️⃣ boolean → Sirf do values: true ya false
//    Conditions, flags, aur logic ke liye use hota hai
let isLoggedIn  = false;
let isAdmin     = true;
console.log(typeof isLoggedIn); // "boolean"


// 5️⃣ null → Intentionally EMPTY value
//    Jab tum chahte ho ki variable exist kare lekin koi value na ho
//    ⚠️ typeof null → "object" (JS ka ek purana bug hai ye!)
let currentUser = null;
console.log(typeof currentUser); // "object" ← ye JS ka known bug hai!
console.log(currentUser);        // null


// 6️⃣ undefined → Variable declare hua lekin value ASSIGN nahi hui
//    Jab tak value na do, JS khud undefined deta hai
let accountState;
console.log(typeof accountState); // "undefined"
console.log(accountState);        // undefined


// 7️⃣ symbol → Unique identifier banane ke liye
//    Chahe same string do, dono symbols HAMESHA alag honge
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);    // false → dono alag hain!
console.log(typeof id1);     // "symbol"


// ============================================================
// 🧱 NON-PRIMITIVE / REFERENCE TYPES
// ============================================================
// Reference types Heap memory mein store hote hain
// Jab copy karo to VALUE nahi, REFERENCE milta hai (address milta hai)
// Matlab ek jagah change karo to dono jagah change hoga!


// 📦 Object → Key-value pairs mein data store
let person = {
  name: "Saksham",
  age: 20,
  city: "Jaipur"
};
console.log(typeof person); // "object"
console.log(person.name);   // "Saksham"


// 📋 Array → Ordered list of values (index se access karo)
//    Arrays bhi technically objects hi hote hain JS mein
let fruits = ["apple", "mango", "banana"];
console.log(typeof fruits);  // "object"
console.log(fruits[0]);      // "apple" (0-based indexing)


// ⚙️ Function → Reusable code block (bhi ek object type hai!)
function greet(user) {
  return `Welcome, ${user}!`;
}
console.log(typeof greet);    // "function"
console.log(greet("Hitesh")); // "Welcome, Hitesh!"


// ============================================================
// 🔍 typeof OPERATOR — Data type check karne ka tool
// ============================================================
console.log(typeof "hitesh");    // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" ← QUIRK! Ye bug hai JS ka
console.log(typeof Symbol());    // "symbol"
console.log(typeof 100n);        // "bigint"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (arrays bhi object hain!)
console.log(typeof function(){}); // "function"


// ============================================================
// 📌 QUICK SUMMARY TABLE
// ============================================================
//
//  | Type      | Example         | typeof result |
//  |-----------|-----------------|----------------|
//  | number    | 42, 3.14        | "number"       |
//  | bigint    | 100n            | "bigint"       |
//  | string    | "hello"         | "string"       |
//  | boolean   | true, false     | "boolean"      |
//  | null      | null            | "object" (BUG) |
//  | undefined | undefined       | "undefined"    |
//  | symbol    | Symbol("id")    | "symbol"       |
//  | object    | {}, []          | "object"       |
//  | function  | function(){}    | "function"     |
//
// 💡 Tip: null aur undefined DONO "no value" represent karte hain,
//         lekin null INTENTIONAL hai, undefined UNINTENTIONAL hai.
// ============================================================
