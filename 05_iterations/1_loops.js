// ============================================================
//  🔁 LOOPS IN JAVASCRIPT — Ek Complete Guide
// ============================================================
// Loop ka matlab hai → ek kaam bar bar karna jab tak condition true ho
// Isse hum repetitive code likhne se bachte hain
//
// JavaScript mein main loops:
//   1. for loop       → jab pata ho kitni baar chalana hai
//   2. while loop     → jab condition pe depend kare
//   3. do...while     → kam se kam ek baar toh chalega
//   4. for...of       → Arrays/Strings iterate karne ke liye
//   5. for...in       → Objects iterate karne ke liye
// ============================================================


// ============================================================
// 1️⃣ FOR LOOP — Sabse Common Loop
// ============================================================
// Syntax: for (initialization; condition; update) { code }
//   → initialization: variable set karo (sirf pehli baar)
//   → condition: jab tak true, loop chalta rahega
//   → update: har iteration ke baad kya karna hai

// Example 1: 1 se 10 tak print karo
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Output: 1 2 3 4 5 6 7 8 9 10

// Example 2: 1 se 5 tak aur ek condition check karo
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Teen aaya! 🎯");
  }
  console.log(`i ki value hai: ${i}`);
}

// Example 3: EVEN numbers print karo (0 to 20)
console.log("--- Even Numbers ---");
for (let i = 0; i <= 20; i += 2) { // i += 2 → 2 se badh raha hai har baar
  console.log(i); // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
}

// Example 4: Countdown (Ulti ginti)
console.log("--- Countdown ---");
for (let i = 5; i >= 1; i--) {
  console.log(i); // 5, 4, 3, 2, 1
}
console.log("🚀 Launch!");


// ============================================================
// 2️⃣ NESTED FOR LOOP — Loop ke andar Loop
// ============================================================
// Jab do dimensions ko traverse karna ho (e.g., tables, matrix)
// Outer loop ek baar chalta hai → inner loop poora chalta hai

console.log("--- Multiplication Table (1 to 3) ---");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
  console.log("---"); // Table separator
}

// Example: 2D pattern
console.log("--- Star Pattern ---");
for (let row = 1; row <= 4; row++) {
  let stars = "";
  for (let col = 1; col <= row; col++) {
    stars += "⭐";
  }
  console.log(stars);
}
// Output:
// ⭐
// ⭐⭐
// ⭐⭐⭐
// ⭐⭐⭐⭐


// ============================================================
// 3️⃣ ARRAY LOOP — For loop se array traverse karo
// ============================================================

let superheroes = ["Spiderman", "Batman", "Superman", "Iron Man"];

// Method 1: Index se (traditional)
for (let i = 0; i < superheroes.length; i++) {
  console.log(`Hero ${i + 1}: ${superheroes[i]}`);
}
// Output:
// Hero 1: Spiderman
// Hero 2: Batman
// Hero 3: Superman
// Hero 4: Iron Man

// ⚠️ NOTE: i <= array.length use NAHI karo!
//           i < array.length use karo (last index = length - 1)
// last index hai 3 (0-based), length hai 4
// index 4 pe koi element nahi → undefined milega!


// ============================================================
// 4️⃣ BREAK STATEMENT — Loop ko beech mein rokna
// ============================================================
// break → Loop turant band ho jaata hai, baaki iterations skip

console.log("--- Break Example ---");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("5 mila! Ab loop band 🛑");
    break; // Loop yahan ruk jayega
  }
  console.log(`Value: ${i}`);
}
// Output: 1, 2, 3, 4, phir "5 mila! Ab loop band 🛑"
// 6, 7, 8, 9, 10 print nahi honge!


// ============================================================
// 5️⃣ CONTINUE STATEMENT — Ek Iteration Skip Karna
// ============================================================
// continue → Sirf current iteration skip hoti hai, loop chalta rehta hai

console.log("--- Continue Example (Skip 5) ---");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("5 ko skip kar rahe hain ⏩");
    continue; // Sirf 5 skip hoga, baaki sab print honge
  }
  console.log(`Value: ${i}`);
}
// Output: 1, 2, 3, 4, "skip", 6, 7, 8, 9, 10


// ============================================================
// 6️⃣ WHILE LOOP — Condition-based Loop
// ============================================================
// Jab pata nahi kitni baar loop chalega,
// tab while use karo (condition pe depend karta hai)

// Syntax:
// while (condition) {
//   code
//   update variable (warna infinite loop!)
// }

let count = 1;
while (count <= 5) {
  console.log(`While loop - count: ${count}`);
  count++; // ⚠️ Ye bhool gaye to infinite loop aa jaayega!
}

// Real use case: User input validate karte rehna
let attempts = 0;
let password = ""; // Simulate karo

// while (password !== "correct") {
//   password = prompt("Enter password:");
//   attempts++;
// }
// console.log(`Correct after ${attempts} attempts`);


// ============================================================
// 7️⃣ DO...WHILE LOOP — Kam se Kam Ek Baar Zaroor Chalega
// ============================================================
// do...while mein condition baad mein check hoti hai
// Isliye loop HAMESHA kam se kam ek baar run karta hai

let num = 10;
do {
  console.log(`Do-While - num: ${num}`); // Pehle run hoga
  num++;
} while (num < 5); // Condition false hai lekin loop ek baar toh chala

// Output: "Do-While - num: 10" (sirf ek baar — condition false thi)

// Comparison:
// while  → Condition pehle check → 0 ya zyada baar run ho sakta hai
// do...while → Code pehle run → Phir condition check → Kam se kam 1 baar


// ============================================================
// 8️⃣ FOR...OF LOOP — Arrays aur Strings ke liye (Modern!)
// ============================================================
// for...of directly VALUE deta hai (index nahi)
// Arrays, Strings, Sets, Maps pe kaam karta hai

let fruits = ["Mango", "Apple", "Banana", "Grapes"];

for (const fruit of fruits) {
  console.log(fruit); // Directly value milegi: Mango, Apple, ...
}

// String pe for...of:
for (const char of "Hello") {
  console.log(char); // H, e, l, l, o → Ek ek character
}

// ⚠️ for...of Objects pe directly kaam nahi karta
//     Objects ke liye for...in use karo (05_iterations/objects.js dekho)


// ============================================================
// 📌 LOOPS COMPARISON TABLE
// ============================================================
//
//  | Loop Type   | Use Case                              | Value ya Index?  |
//  |-------------|---------------------------------------|------------------|
//  | for         | Fixed number of iterations            | Index (i)        |
//  | while       | Jab tak condition true ho             | Manual control   |
//  | do...while  | Kam se kam ek baar chalana ho         | Manual control   |
//  | for...of    | Array/String values iterate karo      | Direct value     |
//  | for...in    | Object ke keys iterate karo           | Key (string)     |
//
// ============================================================
// 💡 QUICK TIPS:
//    → for loop → jab count pata ho
//    → while loop → jab count pata na ho, condition pe depend kare
//    → for...of → Modern arrays ke liye (clean code)
//    → break → Loop turant band karo
//    → continue → Sirf ek step skip karo
//
// ⚠️ INFINITE LOOP SE BACHNA:
//    Hamesha loop mein variable update karo
//    e.g., i++ ya i-- bhool gaye → Browser/Node crash ho jaayega!
// ============================================================
