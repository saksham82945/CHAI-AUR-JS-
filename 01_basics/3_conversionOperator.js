// ============================================================
//  🔄 TYPE CONVERSION & OPERATORS — JS ka Ek Important Concept
// ============================================================
// JavaScript ek "loosely typed" language hai.
// Matlab tumhe variable ka type pehle se declare nahi karna padta.
// Lekin kabhi kabhi JS apne aap type badal deta hai → Type Coercion
// Aur kabhi hum khud type badalta hain → Explicit Type Conversion
// ============================================================


// ============================================================
// 🔍 typeof OPERATOR
// ============================================================
// typeof batata hai ki variable ka current data type kya hai.
// Do tarike hain use karne ke (dono valid hain):

let score = "33"; // Score abhi ek STRING hai, number nahi
console.log(typeof score);    // "string"
console.log(typeof(score));   // "string" → same result, dono valid


// ============================================================
// 1️⃣ STRING → NUMBER CONVERSION (Number() function)
// ============================================================
// Jab kisi string ko Number() mein daalo, JS convert karne ki koshish karta hai

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // "number"
console.log(valueInNumber);        // 33


// 📋 Number() ke sab possible results:
// ─────────────────────────────────────────────────────────────
//  Input        | Output  | Reason
// ─────────────────────────────────────────────────────────────
//  "33"         | 33      | ✅ Pure number string → convert hua
//  "33abc"      | NaN     | ❌ Alphabets hain → convert nahi hua
//  "  33  "     | 33      | ✅ Spaces ignore hote hain (trim ho jata hai)
//  ""           | 0       | ✅ Empty string → 0 banta hai
//  true         | 1       | ✅ true → 1
//  false        | 0       | ✅ false → 0
//  null         | 0       | ✅ null → 0
//  undefined    | NaN     | ❌ undefined → NaN (Not a Number)
// ─────────────────────────────────────────────────────────────

// Live examples:
console.log(Number("33abc"));   // NaN
console.log(Number(""));        // 0
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN

// ⚠️ NaN bhi "number" type ka hota hai — interesting na?
console.log(typeof NaN); // "number"


// ============================================================
// 2️⃣ VALUE → BOOLEAN CONVERSION (Boolean() function)
// ============================================================
// Boolean() kisi bhi value ko true ya false mein convert karta hai
// Concept: "Falsy" values → false; baaki sab → true

let isLoggedIn = "hitesh"; // Non-empty string
let booleanResult = Boolean(isLoggedIn);
console.log(booleanResult); // true

// 📋 FALSY Values (ye sab false bante hain):
// ─────────────────────────────────────────────────────────────
//  Input        | Output  | Reason
// ─────────────────────────────────────────────────────────────
//  0            | false   | Zero is falsy
//  ""           | false   | Empty string is falsy
//  null         | false   | null is falsy
//  undefined    | false   | undefined is falsy
//  NaN          | false   | NaN is falsy
// ─────────────────────────────────────────────────────────────

// 📋 TRUTHY Values (ye sab true bante hain):
//  Input        | Output  | Reason
// ─────────────────────────────────────────────────────────────
//  1            | true    | Non-zero number
//  "hitesh"     | true    | Non-empty string
//  "false"      | true    | ⚠️ String "false" bhi truthy hai!
//  []           | true    | Empty array bhi truthy hai!
//  {}           | true    | Empty object bhi truthy hai!
// ─────────────────────────────────────────────────────────────

console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean("false"));   // true ← Dhyan do! String "false" ≠ false


// ============================================================
// 3️⃣ NUMBER → STRING CONVERSION (String() function)
// ============================================================
// Number ya koi bhi value ko String mein convert karte hain

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);        // "33"
console.log(typeof stringNumber); // "string"

console.log(String(true));        // "true"
console.log(String(null));        // "null"
console.log(String(undefined));   // "undefined"
console.log(String(100));         // "100"


// ============================================================
// ➕ ARITHMETIC OPERATORS (Basic Math Operations)
// ============================================================

let value = 4;

// Unary negation → positive ko negative karo (ya vice versa)
let negValue = -value;
console.log(negValue); // -4

// Basic operations:
console.log(2 + 2);   // 4  → Addition (jod)
console.log(2 - 2);   // 0  → Subtraction (ghatao)
console.log(2 * 2);   // 4  → Multiplication (gunna)
console.log(2 ** 3);  // 8  → Exponentiation (2 ki power 3 = 2×2×2)
console.log(2 / 3);   // 0.666... → Division (bhaag)
console.log(2 % 3);   // 2  → Modulus (bakiya / remainder)
// 💡 Modulus use case: Pata karo number even hai ya odd
//    n % 2 === 0 → even, n % 2 !== 0 → odd


// ============================================================
// 🔗 STRING CONCATENATION & TYPE COERCION (⚠️ Tricky Part!)
// ============================================================
// JS mein '+' operator do kaam karta hai:
//   → Number + Number = Addition (math)
//   → String + Anything = Concatenation (jodna)
// Rule: Agar koi bhi operand string hai to '+' string concatenation karta hai!

let str1 = "hello";
let str2 = " saksham";
let str3 = str1 + str2;
console.log(str3); // "hello saksham"

// ⚠️ TYPE COERCION EXAMPLES — DHYAN SE PADHO!
console.log("1" + 2);       // "12"  → Number 2 string bana: "1"+"2"="12"
console.log(1 + "2");       // "12"  → Number 1 string bana: "1"+"2"="12"
console.log("1" + 2 + 2);   // "122" → Left-to-right: "1"+2="12", "12"+2="122"
console.log(1 + 2 + "2");   // "32"  → Left-to-right: 1+2=3 (number), 3+"2"="32"

// 💡 Key Rule: JS LEFT-TO-RIGHT evaluate karta hai
//   Pehle number+number = number
//   Phir number+string = string

// Unary Plus (+) → String ya Boolean ko quickly Number mein convert karo
console.log(+true);  // 1  → true → 1
console.log(+"");    // 0  → empty string → 0
console.log(+"42");  // 42 → string "42" → number 42
console.log(+null);  // 0  → null → 0


// ============================================================
// 🔗 CHAINED ASSIGNMENT
// ============================================================
// Multiple variables ek hi line mein same value assign karo
// Right-to-left evaluate hota hai

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;
// Step 1: 2+2 = 4
// Step 2: num3 = 4
// Step 3: num2 = num3 = 4
// Step 4: num1 = num2 = 4
console.log(num1, num2, num3); // 4 4 4


// ============================================================
// ⬆️ INCREMENT / DECREMENT OPERATORS
// ============================================================
// Prefix  (++x) → Pehle increment karo, phir use karo
// Postfix (x++) → Pehle use karo, phir increment karo

let gameCounter = 100;

// Prefix Increment
++gameCounter; // 100 + 1 = 101 (pehle badha, phir use)
console.log(gameCounter); // 101

// Postfix Increment
let shots = 5;
let result = shots++; // Pehle result = 5 mila, phir shots = 6 hua
console.log(result);  // 5 (purani value mili)
console.log(shots);   // 6 (ab increment hua)

// Decrement bhi same tarike se kaam karta hai:
let lives = 3;
--lives; // lives = 2 (prefix)
console.log(lives); // 2


// ============================================================
// 📌 QUICK REVISION — TYPE CONVERSION TABLE
// ============================================================
//
//  | Value       | Number()  | Boolean() | String()    |
//  |-------------|-----------|-----------|-------------|
//  | "33"        | 33        | true      | "33"        |
//  | "33abc"     | NaN       | true      | "33abc"     |
//  | ""          | 0         | false     | ""          |
//  | true        | 1         | true      | "true"      |
//  | false       | 0         | false     | "false"     |
//  | null        | 0         | false     | "null"      |
//  | undefined   | NaN       | false     | "undefined" |
//
// ============================================================
