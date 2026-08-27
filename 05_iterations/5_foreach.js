// =====================================================
// FOREACH LOOP — Array Higher Order Method
// =====================================================
// forEach() ek Array method hai jo har element ke liye
// ek function execute karta hai
//
// Key Points:
// 1. forEach() koi value RETURN nahi karta (undefined)
// 2. Loop ko break/continue nahi kar sakte (normal for loop ki tarah)
// 3. Agar return chahiye to map() use karo
// 4. Sirf arrays ke saath kaam karta hai
//
// Syntax:
// array.forEach(function(item, index, array) { ... })
// array.forEach((item, index, array) => { ... })

// ─────────────────────────────────────────────────
// BASIC FOREACH
// ─────────────────────────────────────────────────
const coding = ["js", "ruby", "java", "python", "cpp"]

// Using named function
coding.forEach(function printLanguage(item) {
    console.log(item)
})
// Output: js, ruby, java, python, cpp

// Using anonymous function (most common)
coding.forEach(function(item) {
    console.log(item)
})

// Using arrow function (cleanest)
coding.forEach((item) => {
    console.log(item)
})

// ─────────────────────────────────────────────────
// FOREACH WITH INDEX AND ARRAY
// ─────────────────────────────────────────────────
// Callback function teen arguments le sakti hai:
// 1. item — current element
// 2. index — current index (0, 1, 2, ...)
// 3. arr — original array

coding.forEach((item, index, arr) => {
    console.log(`${index}: ${item} (total: ${arr.length})`)
})
// Output:
// 0: js (total: 5)
// 1: ruby (total: 5)
// 2: java (total: 5)
// etc.

// ─────────────────────────────────────────────────
// FOREACH WITH OBJECTS ARRAY
// ─────────────────────────────────────────────────
const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "java", languageFileName: "java" },
    { languageName: "python", languageFileName: "py" }
]

myCoding.forEach((item) => {
    console.log(item.languageName)
    // Access properties of each object
})
// Output: javascript, java, python

// ─────────────────────────────────────────────────
// FOREACH CANNOT STOP EARLY — Limitation
// ─────────────────────────────────────────────────
// forEach mein break/continue kaam nahi karta
// Agar early termination chahiye, use:
// - for...of with break
// - Array.every() or Array.some()

// Example: break equivalent with some()
coding.some((item) => {
    console.log(item)
    return item === "java"  // Jab true return, loop stops
})
// Output: js, ruby, java (stops here)

// ─────────────────────────────────────────────────
// FOREACH RETURN VALUE — Undefined!
// ─────────────────────────────────────────────────
const returnValue = coding.forEach(item => item.toUpperCase())
console.log(returnValue)  // undefined — forEach returns nothing!

// Agar transformed values chahiye:
const upperCased = coding.map(item => item.toUpperCase())
console.log(upperCased)  // ["JS", "RUBY", "JAVA", "PYTHON", "CPP"]
// map() wala use karo tab jab values transform karni ho!
