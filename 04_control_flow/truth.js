// =====================================================
// TRUTHY & FALSY VALUES + NULLISH COALESCING + TERNARY
// =====================================================
// JavaScript me har value ya to TRUTHY hai ya FALSY
// Ye concept if/else conditions me important hai

// ─────────────────────────────────────────────────
// TRUTHY vs FALSY — Basic Example
// ─────────────────────────────────────────────────
const userEmail1 = "saksham@gmail"

// Non-empty string TRUTHY hoti hai
if (userEmail1) {
    console.log("got user email")  // Ye chalega
} else {
    console.log("dont have user email")
}

// ─────────────────────────────────────────────────
// FALSY VALUES — Sirf ye 8 values FALSY hain
// ─────────────────────────────────────────────────
// false     — boolean false
// 0         — zero
// -0        — negative zero
// 0n        — BigInt zero
// ""        — empty string
// null      — intentional empty
// undefined — variable not assigned
// NaN       — Not a Number

// ─────────────────────────────────────────────────
// TRUTHY VALUES — Baaki sab TRUTHY hain!
// ─────────────────────────────────────────────────
// "0"          — string "0" is truthy! (not the number 0)
// "false"      — string "false" is truthy! (not boolean false)
// " "          — space wali string truthy hai
// []           — empty array TRUTHY hai! (confusing but true)
// {}           — empty object TRUTHY hai!
// function(){} — functions TRUTHY hote hain
// 42           — koi bhi non-zero number truthy

// ─────────────────────────────────────────────────
// PRACTICAL EXAMPLES
// ─────────────────────────────────────────────────

// Empty array check karna — SAHI TARIKA
const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty")  // length check karo, array khud nahi!
}
// Galat tarika: if(!userEmail) — ye KABHI true nahi hoga for arrays!

// Empty object check karna — SAHI TARIKA
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")  // Object.keys() se keys array lo
}

// ─────────────────────────────────────────────────
// NULLISH COALESCING OPERATOR (??)
// ─────────────────────────────────────────────────
// SIRF null aur undefined ke liye fallback value deta hai
// 0 ya "" ke liye nahi! (ye || se alag hai)
//
// Syntax: value ?? fallback
// Agar value null ya undefined hai → fallback return karo
// Warna → value return karo

let val1
// val1 = 5 ?? 10        // 5  (left has value, right ignored)
// val1 = null ?? 10     // 10 (left is null, use right)
// val1 = undefined ?? 15 // 15 (left is undefined, use right)
// val1 = 0 ?? 10        // 0  (0 is not null/undefined!)
// val1 = "" ?? "default" // "" (empty string is not null/undefined!)

// Chaining ??: Pehla non-null/undefined value use hoga
val1 = null ?? 10 ?? 20  // 10 (null skip, 10 is non-null so stops)
console.log(val1)         // 10

// ?? vs || comparison
const userInput = 0
const result1 = userInput || 100  // 100 (0 is falsy, uses right)
const result2 = userInput ?? 100  // 0 (0 is NOT null/undefined!)
// Use ?? when 0 or "" are valid values you want to keep!

// ─────────────────────────────────────────────────
// TERNARY OPERATOR
// ─────────────────────────────────────────────────
// Short form of if/else for simple expressions
//
// Syntax: condition ? value_if_true : value_if_false

const iceteaPrice = 100
iceteaPrice <= 80
    ? console.log("less than 80")
    : console.log("more than 80")
// Output: "more than 80"

// Assigning result to variable
const status = iceteaPrice <= 80 ? "affordable" : "expensive"
console.log(status)  // "expensive"

// Nested ternary (avoid! Use if/else for readability)
const score = 75
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F"
console.log(grade)  // "C"