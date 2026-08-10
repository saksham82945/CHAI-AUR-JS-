// ============================================================
//  🔑 FOR...IN LOOP — Objects ke saath Kaam Karna
// ============================================================
// for...in loop KEYS (property names) iterate karta hai
//
// Syntax:
//   for (const key in object) {
//     // key → property ka naam (string)
//     // object[key] → us property ki value
//   }
//
// for...in kab use karo:
//   ✅ Object ki keys ya values iterate karni ho
//   ✅ Array ke indexes chahiye hon
//   ❌ Array values directly chahiye hon → tab for...of use karo
// ============================================================


// ============================================================
// 1️⃣ FOR...IN WITH OBJECTS — Keys aur Values Nikalna
// ============================================================

const myObject = {
  js  : "JavaScript",
  cpp : "C++",
  rb  : "Ruby",
  java: "Java",
  py  : "Python"
};

// Sirf KEYS print karo:
console.log("--- Object Keys ---");
for (const key in myObject) {
  console.log(key); // "js", "cpp", "rb", "java", "py"
}

// Sirf VALUES print karo (bracket notation use karo):
console.log("--- Object Values ---");
for (const key in myObject) {
  console.log(myObject[key]); // "JavaScript", "C++", "Ruby", "Java", "Python"
}

// DONO ek saath (keys aur values):
console.log("--- Keys & Values ---");
for (const key in myObject) {
  console.log(`Shortcut "${key}" is for ${myObject[key]}`);
}
// Output:
// Shortcut "js" is for JavaScript
// Shortcut "cpp" is for C++
// Shortcut "rb" is for Ruby
// Shortcut "java" is for Java
// Shortcut "py" is for Python

// Real-world example: User profile
const userProfile = {
  name    : "Hitesh Choudhary",
  channel : "Chai aur Code",
  city    : "India",
  subs    : 500000
};

console.log("--- User Profile ---");
for (const key in userProfile) {
  console.log(`${key}: ${userProfile[key]}`);
}
// Output:
// name: Hitesh Choudhary
// channel: Chai aur Code
// city: India
// subs: 500000


// ============================================================
// 2️⃣ FOR...IN WITH ARRAYS — Index-based Iteration
// ============================================================
// for...in arrays pe bhi kaam karta hai, lekin KEY (index) deta hai
// Index ek string hoti hai number nahi! (interesting quirk)

const programming = ["js", "rb", "py", "java", "cpp"];

console.log("--- Array with for...in ---");
for (const index in programming) {
  console.log(`Index: ${index}, Type: ${typeof index}, Value: ${programming[index]}`);
}
// Output:
// Index: 0, Type: string, Value: js
// Index: 1, Type: string, Value: rb
// Index: 2, Type: string, Value: py
// Index: 3, Type: string, Value: java
// Index: 4, Type: string, Value: cpp

// ⚠️ NOTE: Array pe for...in avoid karo for...of prefer karo
//    Reason 1: Index string milta hai, number nahi
//    Reason 2: Agar array pe extra properties add ki ho, to wo bhi iterate hogi (unexpected!)
//    for...of → Direct values milti hain, clean aur fast


// ============================================================
// 3️⃣ for...in vs for...of — Kab Kya Use Karo?
// ============================================================

const languages = ["HTML", "CSS", "JavaScript", "Node.js"];

// ✅ for...of → Array values ke liye (RECOMMENDED for arrays)
console.log("--- for...of (Recommended for Arrays) ---");
for (const lang of languages) {
  console.log(lang); // "HTML", "CSS", "JavaScript", "Node.js"
}

// ⚠️ for...in → Array indexes ke liye (AVOID for arrays)
console.log("--- for...in on Array (gives indexes) ---");
for (const idx in languages) {
  console.log(`${idx} → ${languages[idx]}`); // "0 → HTML", "1 → CSS"...
}

// for...in → Objects ke liye (PERFECT USE CASE)
const config = { host: "localhost", port: 3000, debug: true };
console.log("--- for...in on Object (Perfect!) ---");
for (const key in config) {
  console.log(`${key} = ${config[key]}`);
}


// ============================================================
// 4️⃣ CHECKING INHERITED PROPERTIES — hasOwnProperty
// ============================================================
// for...in prototype chain ki properties bhi de sakta hai
// (inherited properties — wo properties jo parent se aayi hain)
// Safe rehne ke liye hasOwnProperty() use karo

const car = {
  brand: "Toyota",
  model: "Corolla",
  year : 2022
};

console.log("--- Safe for...in with hasOwnProperty ---");
for (const key in car) {
  // Sirf apni (own) properties check karo, inherited nahi
  if (car.hasOwnProperty(key)) {
    console.log(`Own property → ${key}: ${car[key]}`);
  }
}


// ============================================================
// 5️⃣ PRACTICAL EXAMPLE — Object ki Values Modify Karna
// ============================================================

const prices = {
  apple  : 100,
  mango  : 80,
  banana : 40,
  grapes : 120
};

// Sabke price pe 10% GST add karo
console.log("--- Prices with 10% GST ---");
for (const item in prices) {
  const withGST = prices[item] * 1.10;
  console.log(`${item}: ₹${prices[item]} → ₹${withGST.toFixed(2)} (with GST)`);
}


// ============================================================
// 📌 for...in QUICK SUMMARY
// ============================================================
//
//  | Loop      | Kya iterate karta hai?  | Use karo kab?               |
//  |-----------|-------------------------|-----------------------------|
//  | for...in  | Object ki KEYS          | Objects ke liye ✅           |
//  | for...in  | Array ke INDEXES        | Arrays ke liye ❌ (avoid)   |
//  | for...of  | Array ki VALUES         | Arrays ke liye ✅            |
//  | forEach   | Array (callback)        | Arrays ke liye ✅            |
//
// ============================================================
// 💡 GOLDEN RULES:
//    → OBJECT iterate karna → for...in use karo
//    → ARRAY iterate karna  → for...of use karo (ya forEach)
//    → for...in se ARRAY iterate karna possible hai, lekin avoid karo
//    → Inherited properties filter karne ke liye hasOwnProperty() use karo
// ============================================================
