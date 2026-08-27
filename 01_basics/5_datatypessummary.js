// ============================================================
//  🧠 DATA TYPES SUMMARY — Stack vs Heap Memory
// ============================================================
// JavaScript me data types do bade groups mein hote hain:
//
//  1. Primitive Types   → STACK memory mein store hote hain
//                         → Copy milti hai (independent)
//
//  2. Non-Primitive     → HEAP memory mein store hote hain
//  (Reference Types)    → Reference milta hai (dependent — address milta hai)
//
// Ye concept bahut important hai interviews mein!
// ============================================================


// ============================================================
// 📦 PRIMITIVE DATA TYPES (7 Types) — Yaad rakho!
// ============================================================
/*
  JavaScript me 7 Primitive Data Types hain:

  1. String    → Text data         → "Hello", 'World'
  2. Number    → Integer/Decimal   → 42, 3.14, -10
  3. Boolean   → true / false      → isLoggedIn = true
  4. null      → Intentional empty → let user = null
  5. undefined → No value yet      → let x;  (x is undefined)
  6. Symbol    → Unique identifier → Symbol("id")
  7. BigInt    → Very large nums   → 9007199254740991n

  Note: JavaScript ek DYNAMICALLY TYPED language hai.
  Iska matlab hai ki variable ka type pehle declare nahi karna padta.
  Type automatically runtime par decide hoti hai.
*/

// Examples:
const score      = 100;     // number
const scoreValue = 100.3;   // number (float bhi number hi hai JS mein!)
const isLoggedIn = false;   // boolean
const username   = "hitesh" // string
const empty      = null;    // null → intentionally khaali rakha
let   notDefined;           // undefined → value diya hi nahi
const uniqueId   = Symbol("myId"); // symbol → always unique
const bigNumber  = 9007199254740991n; // BigInt → n suffix lagao


// ============================================================
// 🏗️ NON-PRIMITIVE (REFERENCE) DATA TYPES
// ============================================================
/*
  Non-primitive types 3 main types hote hain JS mein:
  1. Array
  2. Object
  3. Function
*/

// 1️⃣ ARRAY → Ordered list of values
//    Index-based access (0 se start)
const heros = ["shaktiman", "nagaraj", "spiderman"];
console.log(heros[0]);    // "shaktiman"
console.log(heros.length); // 3
// Array bhi ek object hi hai JS mein!

// 2️⃣ OBJECT → Key-value pairs mein data
//    Real-world entity ko represent karne ke liye use hota hai
let myObj = {
  name: "hitesh",
  age : 22,
  city: "Jaipur"
};
console.log(myObj.name);   // "hitesh" (dot notation)
console.log(myObj["age"]); // 22 (bracket notation)

// 3️⃣ FUNCTION → Reusable code block
//    Functions bhi technically objects hote hain JS mein!
const myFunction = function() {
  console.log("Hello World!");
};
myFunction(); // "Hello World!"
console.log(typeof myFunction); // "function"


// ============================================================
// 💾 STACK vs HEAP MEMORY — Sabse Important Concept!
// ============================================================
//
//  STACK (Primitive types ke liye):
//   → Value directly store hoti hai
//   → Copy milti hai (independent copy)
//   → Ek jagah change karo, dusri jagah safe rehti hai
//
//  HEAP (Non-Primitive / Reference types ke liye):
//   → Value ek specific memory location (Heap) mein store hoti hai
//   → Reference (address/pointer) milta hai, value nahi
//   → Ek jagah change karo, to DONO jagah change ho jaata hai!
//
// ============================================================


// ============================================================
// 🔁 PRIMITIVE (STACK) — COPY EXAMPLE
// ============================================================
// Primitive mein ek independent copy milti hai

let myYoutubeName = "hiteshchoudharycom"; // Stack mein store hua

let anotherName = myYoutubeName;          // COPY bani — ek nayi jagah
anotherName = "chaiaurcode";              // Sirf anotherName ki copy badli

console.log(myYoutubeName); // "hiteshchoudharycom" ← SAFE! Nahi badla
console.log(anotherName);   // "chaiaurcode" ← Sirf ye badla

// 💡 Explanation:
//    myYoutubeName aur anotherName DONO ki apni-apni copy thi
//    Isliye ek ko change karne se dusri pe koi asar nahi pade!


// ============================================================
// 🔗 NON-PRIMITIVE (HEAP) — REFERENCE EXAMPLE
// ============================================================
// Non-primitive mein reference milta hai, copy nahi

let userOne = {
  email: "user@google.com",
  upi  : "user@ybl"
};
// userOne → Heap mein store hua ek object (e.g., address: 0x001)

let userTwo = userOne;
// userTwo ko COPY nahi mili! Bas SAME memory address mila (0x001)
// Matlab userOne aur userTwo DONO same object ko point kar rahe hain

userTwo.email = "hitesh@google.com"; // userTwo ke through change kiya

console.log(userOne.email); // "hitesh@google.com" ← BADLE GAYA! WHY?
console.log(userTwo.email); // "hitesh@google.com"
// DONO same object ko point kar rahe the → ek change = dono change!

// 💡 Yahi hota hai Reference type ka kaam
//    Deep copy chahiye? Use JSON.parse(JSON.stringify(obj)) ya structuredClone()

// Deep Copy Example (safe copy):
let userThree = JSON.parse(JSON.stringify(userOne));
userThree.email = "original@safe.com";
console.log(userOne.email);  // "hitesh@google.com" ← Safe raha!
console.log(userThree.email); // "original@safe.com" ← Nayi independent copy


// ============================================================
// 🔍 typeof EXAMPLES
// ============================================================
console.log(typeof score);      // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof username);   // "string"
console.log(typeof empty);      // "object" ← null ka typeof "object" aata hai (JS bug!)
console.log(typeof notDefined); // "undefined"
console.log(typeof uniqueId);   // "symbol"
console.log(typeof bigNumber);  // "bigint"
console.log(typeof heros);      // "object" ← arrays bhi "object" hote hain!
console.log(typeof myFunction); // "function"


// ============================================================
// 📌 FINAL SUMMARY — Stack vs Heap
// ============================================================
//
//  | Feature           | Stack (Primitive)   | Heap (Non-Primitive)   |
//  |-------------------|---------------------|------------------------|
//  | Storage           | Direct value        | Reference (address)    |
//  | Copy behavior     | Independent copy    | Shared reference       |
//  | Change affects?   | Only that variable  | All references         |
//  | Types             | String, Number,     | Array, Object,         |
//  |                   | Boolean, null,      | Function               |
//  |                   | undefined, Symbol,  |                        |
//  |                   | BigInt              |                        |
//
// 💡 Interview mein poochha jaata hai:
//    Q: "Primitive aur Non-Primitive mein kya fark hai?"
//    A: Primitive → Stack → Copy milti hai (independent)
//       Non-Primitive → Heap → Reference milta hai (shared)
// ============================================================
