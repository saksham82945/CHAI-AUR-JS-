// ============================================================
//  🔢 NUMBERS & MATH IN JAVASCRIPT — Complete Guide
// ============================================================
// JavaScript mein numbers handle karna aur Math operations
// karna ek daily task hai. Yahan hum dono cover karenge:
//   1. Number object aur uske methods
//   2. Math built-in object aur uske methods
// ============================================================


// ============================================================
// 1️⃣ NUMBER BASICS
// ============================================================

const score = 123;
console.log(score);         // 123
console.log(typeof score);  // "number"

// Number ko explicitly object ke roop mein banana
const balance = new Number(100);
console.log(balance);        // Number {100} → object format mein dikhega
console.log(typeof balance); // "object"


// ============================================================
// 🔧 NUMBER METHODS — Useful Methods
// ============================================================

// 1️⃣ toString() → Number ko string mein convert karo
console.log(balance.toString());          // "100"
console.log(balance.toString().length);   // 3 → ab string ki length check karo

// 2️⃣ toFixed(n) → Decimal ke baad fixed kitni digits dikhao
//    E-commerce ya finance apps mein bahut use hota hai (price formatting)
console.log(balance.toFixed(2));  // "100.00" → 2 decimal places
console.log(balance.toFixed(1));  // "100.0"  → 1 decimal place
console.log(balance.toFixed(0));  // "100"    → 0 decimal places

const pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14"
console.log(pi.toFixed(4)); // "3.1416" (round bhi karta hai)

// 3️⃣ toPrecision(n) → TOTAL digits fix karo (not just decimals)
const another = 123.3835;
console.log(another.toPrecision(4)); // "123.4"  → Total 4 digits
console.log(another.toPrecision(3)); // "123"    → Total 3 digits
console.log(another.toPrecision(2)); // "1.2e+2" → Scientific notation

// 💡 toFixed vs toPrecision:
//    toFixed(2)    → "123.38" → decimal ke baad 2 digits
//    toPrecision(5)→ "123.38" → total 5 digits

// 4️⃣ toLocaleString() → Number ko readable format mein dikhao (locale-based)
const hundreds = 1000000;
console.log(hundreds.toLocaleString());      // "1,000,000" (US format)
console.log(hundreds.toLocaleString("en-IN")); // "10,00,000" (Indian format)

// 💡 Indian numbering: 1,00,000 = 1 lakh, 10,00,000 = 10 lakh


// ============================================================
// 🔢 SPECIAL NUMBER VALUES
// ============================================================

console.log(Number.MAX_VALUE);        // 1.7976931348623157e+308 → JS mein max number
console.log(Number.MIN_VALUE);        // 5e-324 → JS mein min positive number
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 → 2^53 - 1
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);              // NaN (Not a Number)
console.log(Number.isNaN(NaN));       // true → check karo NaN hai ya nahi
console.log(Number.isFinite(100));    // true → finite number hai
console.log(Number.isInteger(3.14));  // false → integer nahi hai
console.log(Number.isInteger(42));    // true


// ============================================================
// ➕ MATH OBJECT — Built-in Mathematical Functions
// ============================================================
// Math ek built-in object hai (new karne ki zarurat nahi)
// Seedha Math.methodName() use karo

console.log(Math); // Pura Math object dekh sakte ho

// 1️⃣ Math.abs() → Absolute value (negative ko positive karo)
console.log(Math.abs(-6));   // 6
console.log(Math.abs(6));    // 6
console.log(Math.abs(-99));  // 99

// 2️⃣ Math.round() → Normal rounding (0.5 ya usse zyada → round up)
console.log(Math.round(4.4));  // 4
console.log(Math.round(4.5));  // 5
console.log(Math.round(4.6));  // 5

// 3️⃣ Math.ceil() → HAMESHA upar round karo (ceiling = chhat)
console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(4.9));  // 5
console.log(Math.ceil(-4.9)); // -4 (upar matlab less negative)

// 4️⃣ Math.floor() → HAMESHA neeche round karo (floor = zameen)
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4
console.log(Math.floor(-4.1)); // -5 (neeche matlab more negative)

// 5️⃣ Math.max() / Math.min() → Sabse bada / sabse chhota dhundo
console.log(Math.max(4, 5, 6, 8, 3));  // 8
console.log(Math.min(4, 5, 6, 8, 3));  // 3

// 6️⃣ Math.pow(base, exponent) → Power/exponent calculate karo
console.log(Math.pow(2, 10)); // 1024 → 2^10
console.log(Math.pow(3, 3));  // 27   → 3^3

// 7️⃣ Math.sqrt() → Square root nikalo
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(2));  // 1.4142135623730951

// 8️⃣ Math.PI → Pi ki value (circle calculations ke liye)
console.log(Math.PI); // 3.141592653589793
const radius = 7;
const area = Math.PI * radius * radius;
console.log(area.toFixed(2)); // "153.94" → Area of circle


// ============================================================
// 🎲 MATH.RANDOM() — Random Numbers Generate Karna
// ============================================================
// Math.random() → 0 (inclusive) se 1 (exclusive) ke beech random decimal deta hai
// Matlab: 0 ≤ random < 1

console.log(Math.random()); // e.g. 0.3242 (har baar alag)

// Random number 0 to 9 (decimal mein):
console.log(Math.random() * 10); // e.g. 7.234

// Random INTEGER 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1);
// Math.random() → 0 to 0.999
// * 10          → 0 to 9.999
// Math.floor()  → 0 to 9
// + 1           → 1 to 10 ✅


// ============================================================
// 🎯 RANDOM NUMBER IN A RANGE (min to max) — Important Formula!
// ============================================================
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
// Ye formula INCLUSIVE range deta hai (dono ends include honge)

const min = 10;
const max = 20;

const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange); // Random number between 10 and 20 (inclusive)

// Formula Explanation (min=10, max=20):
//   max - min + 1 = 20 - 10 + 1 = 11
//   Math.random() * 11 → 0 to 10.999
//   Math.floor()       → 0 to 10
//   + min (10)         → 10 to 20 ✅

// Real-world use case: Dice game (1-6)
const dice = Math.floor(Math.random() * 6) + 1;
console.log(`Dice rolled: ${dice}`); // 1, 2, 3, 4, 5, ya 6

// OTP generate karo (6 digit):
const otp = Math.floor(Math.random() * 900000) + 100000;
console.log(`OTP: ${otp}`); // e.g. 524831


// ============================================================
// 📌 MATH METHODS QUICK REFERENCE TABLE
// ============================================================
//
//  | Method          | Kya karta hai?               | Example                    |
//  |-----------------|------------------------------|----------------------------|
//  | Math.abs(x)     | Absolute value               | Math.abs(-5) → 5           |
//  | Math.round(x)   | Normal round                 | Math.round(4.5) → 5        |
//  | Math.ceil(x)    | Round up (hamesha)           | Math.ceil(4.1) → 5         |
//  | Math.floor(x)   | Round down (hamesha)         | Math.floor(4.9) → 4        |
//  | Math.max(...)   | Sabse bada number            | Math.max(1,2,3) → 3        |
//  | Math.min(...)   | Sabse chhota number          | Math.min(1,2,3) → 1        |
//  | Math.pow(b,e)   | Power (b^e)                  | Math.pow(2,3) → 8          |
//  | Math.sqrt(x)    | Square root                  | Math.sqrt(9) → 3           |
//  | Math.random()   | 0 se 1 ke beech random       | Math.random() → 0.732      |
//  | Math.PI         | Pi value                     | Math.PI → 3.14159...       |
//  | Math.trunc(x)   | Decimal part hata do         | Math.trunc(4.9) → 4        |
//  | Math.sign(x)    | Positive/Negative/Zero check | Math.sign(-5) → -1         |
//
// ============================================================
// 💡 Random Range Formula:
//    Math.floor(Math.random() * (max - min + 1)) + min
//    → min aur max dono inclusive hote hain!
// ============================================================
