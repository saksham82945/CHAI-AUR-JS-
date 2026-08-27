# 📚 JavaScript Complete Notes — Beginner to Advanced
## By Hitesh Choudhary | Chai aur Code 🍵

> **This README is a complete reference guide for JavaScript** — covering every concept from ground zero to advanced topics.  
> Each section corresponds to the folder structure of this repository.  
> Code examples are taken directly from the actual `.js` files.

---

## 📁 Table of Contents

1. [Basic JS — Variables, Data Types, Operators](#1-basic-js)
2. [Basics JS 2 — Arrays and Objects](#2-basics-js-2)
3. [Functions, Scope, Arrow Functions and IIFE](#3-functions-scope-arrow-functions-and-iife)
4. [Control Flow](#4-control-flow)
5. [Iterations and Loops](#5-iterations-and-loops)
6. [Classes and OOP](#6-classes-and-oop)
7. [DOM — Document Object Model](#7-dom)
8. [Events](#8-events)
9. [Advanced JS — Promises and Async/Await](#9-advanced-js)

---

# 1. Basic JS

> **Folder:** `01_basics/`

---

## 1.1 Variables in JavaScript

> **File:** `1_variable.js`

Variables are **containers for storing data**. In JavaScript, there are three ways to declare variables:

### `const` — Constant Variable
```js
const accountId = 14433
```
- Value **cannot be changed** after declaration.
- Trying to reassign will throw a `TypeError`.
- Always use `const` for values that should never change (IDs, URLs, config).

### `let` — Block-Scoped Variable
```js
let accountEmail = "saksham@1234.com"
```
- Value **can be reassigned**.
- **Block-scoped** — only available within the `{}` block where it's declared.
- Recommended for most variables in modern JavaScript.

### `var` — Old Style (Avoid!)
```js
var accountPassword = "123455"
```
- **Function-scoped**, not block-scoped (causes bugs).
- Has **hoisting** issues.
- Avoid using `var` in modern JS.

### No keyword (Global — Avoid!)
```js
accountCity = "Jaipur"  // Becomes a global variable — dangerous!
```
- Without `let`/`const`/`var`, the variable becomes **global** (attached to the `window` object in browsers).
- This is bad practice as it pollutes the global scope.

### Declared but not Assigned
```js
let accountState;
console.log(accountState); // undefined
```
- A `let` variable declared without a value gets the special value `undefined`.

### Reassigning Values
```js
accountEmail = "saks@12.com"
accountPassword = "2323455"
accountCity = "Bengaluru"
```
- `let` and `var` variables can be reassigned.
- `const` variables cannot.

### Best Practices Table
| Keyword | Scope | Reassignable | Recommended |
|---------|-------|--------------|-------------|
| `const` | Block | No | Yes — default choice |
| `let` | Block | Yes | Yes — when reassignment needed |
| `var` | Function | Yes | No — avoid |

---

## 1.2 Data Types in JavaScript

> **File:** `2_datatypes.js`

JavaScript has **8 data types** grouped into two categories:

### Primitive Data Types (7 types)
These are stored directly in **Stack memory**. They hold actual values.

```js
"use strict"; // enforces modern JS rules

let name = "hitesh"       // String
let age = 18              // Number
let isLoggedIn = false    // Boolean
```

| Type | Example | Description |
|------|---------|-------------|
| `String` | `"hello"` | Sequence of characters |
| `Number` | `42`, `3.14` | Integer and floating-point numbers |
| `Boolean` | `true`, `false` | Logical true or false |
| `null` | `null` | Intentional absence of value |
| `undefined` | `undefined` | Variable declared but not assigned |
| `Symbol` | `Symbol("id")` | Unique identifier (ES6) |
| `BigInt` | `9007199254740991n` | Very large integers |

### Non-Primitive (Reference) Types
These are stored in **Heap memory** and hold a **reference** (pointer) to the actual data.

| Type | Example |
|------|---------|
| `Object` | `{name: "Saksham", age: 20}` |
| `Array` | `[1, 2, 3]` (special type of object) |
| `Function` | `function foo() {}` |

### `typeof` Operator
```js
console.log(typeof "hitesh");     // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" — JavaScript historical bug!
console.log(typeof Symbol());     // "symbol"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"
```

**Important:** `typeof null` returns `"object"` — this is a **known JavaScript bug** that was never fixed for backwards compatibility.

### Dynamic Typing
JavaScript is a **dynamically typed** language — you don't declare the type. JavaScript figures it out at runtime:
```js
let x = 5;      // x is a Number
x = "hello";    // x is now a String (no error!)
x = true;       // x is now a Boolean (no error!)
```

---

## 1.3 Type Conversion and Operators

> **File:** `3_conversionOperator.js`

### Type Conversion — String to Number
```js
let score = "33"
let valueInNumber = Number(score)
console.log(valueInNumber)  // 33 (number type)
```

**Conversion Table for `Number()`:**
| Input | Output | Reason |
|-------|--------|--------|
| `"33"` | `33` | Valid numeric string |
| `"33abc"` | `NaN` | Contains non-digit characters |
| `""` | `0` | Empty string |
| `true` | `1` | Boolean true |
| `false` | `0` | Boolean false |
| `null` | `0` | null |
| `undefined` | `NaN` | Cannot convert |

### Type Conversion — To Boolean
```js
let isLoggedIn = "hitesh"
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn) // true (non-empty string is truthy)
```

**Boolean Conversion:**
| Input | Output |
|-------|--------|
| `0`, `""`, `null`, `undefined`, `NaN`, `false` | `false` |
| Any other value | `true` |

### Type Conversion — To String
```js
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber) // "string"
```

### Arithmetic Operators
```js
console.log(2 + 2);   // 4  — Addition
console.log(2 - 2);   // 0  — Subtraction
console.log(2 * 2);   // 4  — Multiplication
console.log(2 ** 3);  // 8  — Exponentiation (2 to the power 3)
console.log(2 / 3);   // 0.666... — Division
console.log(2 % 3);   // 2  — Modulus (remainder)
```

### Type Coercion in JavaScript
JavaScript automatically converts types when mixing strings and numbers with `+`:
```js
console.log("1" + 2);     // "12"  — Number coerced to string
console.log(1 + "2");     // "12"  — Number coerced to string
console.log("1" + 2 + 2); // "122" — Left to right: string first
console.log(1 + 2 + "2"); // "32"  — 1+2=3 first, then 3+"2"
```

### Unary Plus Operator
```js
console.log(+true);  // 1 — Boolean to Number
console.log(+"");    // 0 — Empty string to Number
```

### Increment and Decrement
```js
let gameCounter = 100;
++gameCounter;  // Prefix: increment BEFORE using value — 101
gameCounter++;  // Postfix: use value THEN increment
```

---

## 1.4 Comparison Operators

> **File:** `4_comparision.js`

```js
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true
```

### Type Coercion in Comparisons
```js
console.log("2" > 1);   // true — "2" converts to number 2
console.log("02" > 1);  // true — "02" converts to 2
```

### The null Quirk
```js
console.log(null >= 0);  // true  — null converts to 0
console.log(null == 0);  // false — null only equals undefined
console.log(null > 0);   // false
```

### Strict Equality `===`
Always prefer strict equality to avoid unexpected type coercion bugs:
```js
console.log("2" === 2);  // false — checks BOTH value AND type
console.log(2 === 2);    // true
```

| Operator | Behavior |
|----------|---------|
| `==` | Loose equality — converts types |
| `===` | Strict equality — no conversion |

---

## 1.5 Data Types Summary — Stack vs Heap

> **File:** `5_datatypessummary.js`

### Stack Memory — Primitives (Copy by Value)
```js
let myYoutubename = "hiteshchoudharycom"
let anothername = myYoutubename   // Copy of value

anothername = "changed"
console.log(myYoutubename); // "hiteshchoudharycom" — original unchanged!
console.log(anothername);   // "changed"
```

### Heap Memory — Non-Primitives (Copy by Reference)
```js
let userOne = { email: "user@google.com", upi: "user@api" }
let userTwo = userOne  // Both point to SAME object in heap!

userTwo.email = "hiteshgoogle.com"
console.log(userOne.email);  // "hiteshgoogle.com" — ALSO CHANGED!
console.log(userTwo.email);  // "hiteshgoogle.com"
```

**Remember:** Primitives copy values. Objects copy references (pointers).

---

## 1.6 Strings in JavaScript

> **File:** `6_string.js`

### String Creation
```js
const name = "hitesh"

// Template literals — use backticks with ${}
const repoCount = 50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// String as Object
const gameName = new String('hiteshhh')
```

### Important String Methods
```js
gameName.length            // Length of string
gameName[0]                // Access character by index
gameName.toUpperCase()     // "HITESHHH"
gameName.toLowerCase()     // "hiteshhh"
gameName.indexOf('e')      // Index of first 'e'

// substring(start, end) — extracts from start to (end-1)
gameName.substring(0, 5)  // "hites"

// slice(start, end) — supports negative indexes too
gameName.slice(-8, 4)      // Counts from end

// trim — remove whitespace
"  hello  ".trim()          // "hello"
"  hello  ".trimStart()     // "hello  "
"  hello  ".trimEnd()       // "  hello"

// replace
"hitesh%20choudhary".replace('%20', '_')  // "hitesh_choudhary"

// split
"a-b-c".split('-')   // ["a", "b", "c"]
"hello".split('')    // ["h","e","l","l","o"]

// Other useful methods
"hello".includes("ell")    // true
"hello".startsWith("he")   // true
"hello".endsWith("lo")     // true
"hello".repeat(3)          // "hellohellohello"
"abc".padStart(5, '0')     // "00abc"
"abc".padEnd(5, '0')       // "abc00"
```

---

## 1.7 Math and Numbers

> **File:** `7_maths&nums.js`

### Number Methods
```js
const balance = new Number(100)

balance.toString()         // "100" — number to string
balance.toString().length  // 3
balance.toFixed(2)         // "100.00"
balance.toPrecision(3)     // "100" — 3 significant digits

const hundreds = 100000
hundreds.toLocaleString('en-IN')  // "1,00,000" — Indian format
hundreds.toLocaleString('en-US')  // "100,000" — US format
```

### The Math Object
```js
Math.abs(-6)              // 6 — Absolute value
Math.round(4.6)           // 5 — Normal rounding
Math.ceil(4.1)            // 5 — Always rounds UP
Math.floor(4.9)           // 4 — Always rounds DOWN
Math.max(4, 5, 6, 8, 3)  // 8 — Largest number
Math.min(4, 5, 6, 8, 3)  // 3 — Smallest number
Math.sqrt(16)             // 4 — Square root
Math.pow(2, 3)            // 8 — 2 to the power of 3
Math.PI                   // 3.14159...
Math.random()             // Random float between 0 and 1
```

### Random Numbers in a Range
```js
// Random integer between 1 and 10
Math.floor(Math.random() * 10) + 1

// Random integer between min and max (inclusive)
const min = 10
const max = 20
Math.floor(Math.random() * (max - min + 1)) + min
```

---

## 1.8 Dates in JavaScript

> **File:** `8_dates.js`

### Creating Date Objects
```js
let myDate = new Date()         // Current date and time
new Date(2023, 8, 5)            // Sep 5, 2023 — months are 0-indexed!
new Date("2023-08-15")          // Aug 15, 2023
new Date(1628000000000)         // From Unix timestamp (milliseconds)
```

**Important:** Months in JavaScript are **0-indexed** — January=0, December=11.

### Date Methods
```js
myDate.toString()        // Full date string
myDate.toDateString()    // "Mon Oct 13 2025"
myDate.toLocaleString()  // "13/10/2025, 10:45:32 am"
myDate.toISOString()     // ISO format string

// Extracting parts
myDate.getFullYear()     // 2025
myDate.getMonth()        // 9 (October — 0-indexed, add +1!)
myDate.getDate()         // 13 (day of month)
myDate.getDay()          // 1 (0=Sunday, 6=Saturday)
myDate.getHours()        // 10
myDate.getMinutes()      // 45
myDate.getTime()         // Milliseconds since Jan 1, 1970

// Timestamps
Date.now()               // Current time in milliseconds
Math.floor(Date.now() / 1000)  // Current time in seconds
```

---

# 2. Basics JS 2

> **Folder:** `02_arrays_and_objects/`

---

## 2.1 Arrays — Part 1

> **File:** `01_array.js`

An **array** is an ordered list that can hold multiple values.

### Creating Arrays
```js
const myArr = [1, 2, 3, 4, 5]           // Array literal
const myHeroes = ["Shaktiman", "Naagraj"] // String array
const myArr2 = new Array(1, 2, 4.7)      // Using constructor
```

### Accessing Elements
```js
console.log(myArr[0])  // 1 — first element (0-indexed)
console.log(myArr[4])  // 5 — fifth element
```

### Adding and Removing Elements
```js
// push() — Add to END
myArr.push(6)     // [1, 2, 3, 4, 5, 6]

// pop() — Remove LAST element
myArr.pop()       // [1, 2, 3, 4, 5]

// unshift() — Add to BEGINNING
myArr.unshift(9)  // [9, 1, 2, 3, 4, 5]

// shift() — Remove FIRST element
myArr.shift()     // [1, 2, 3, 4, 5]
```

### Searching
```js
myArr.includes(9)   // false — does 9 exist?
myArr.includes(3)   // true
myArr.indexOf(3)    // 2 — returns index, or -1 if not found
```

### Converting to String
```js
myArr.join()        // "1,2,3,4,5"
myArr.join(" - ")   // "1 - 2 - 3 - 4 - 5"
```

### slice() vs splice() — The Most Important Difference!
```js
const myArr = [1, 2, 3, 4, 5]

// slice(start, end) — Returns COPY, does NOT modify original
const result = myArr.slice(1, 3)
console.log(result)  // [2, 3]
console.log(myArr)   // [1, 2, 3, 4, 5] — unchanged!

// splice(start, deleteCount) — MODIFIES original array!
const removed = myArr.splice(1, 3)
console.log(removed)  // [2, 3, 4]
console.log(myArr)    // [1, 5] — original changed!
```

| Method | Returns | Modifies Original |
|--------|---------|-------------------|
| `slice()` | Copy of portion | No |
| `splice()` | Removed elements | Yes |

---

## 2.2 Arrays — Part 2 (Advanced)

> **File:** `02_array.js`

### Merging Arrays
```js
const marvel_heroes = ["thor", "spiderman", "ironman"]
const dc_heroes = ["superman", "flash", "batman"]

// Wrong — push creates a nested array
marvel_heroes.push(dc_heroes)
// ["thor", "spiderman", "ironman", ["superman", "flash", "batman"]]

// Using concat()
const all = marvel_heroes.concat(dc_heroes)
// ["thor", "spiderman", "ironman", "superman", "flash", "batman"]

// Using Spread Operator (modern and recommended)
const all_new = [...marvel_heroes, ...dc_heroes]
// ["thor", "spiderman", "ironman", "superman", "flash", "batman"]
```

### Flattening Nested Arrays
```js
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5, 6]]]

another_array.flat(1)         // One level deep
another_array.flat(Infinity)  // Completely flattens
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, 6]
```

### Utility Methods
```js
Array.isArray("Hitesh")          // false
Array.isArray([1, 2, 3])         // true

Array.from("saksham")            // ["s","a","k","s","h","a","m"]

let score1 = 100, score2 = 200, score3 = 300
Array.of(score1, score2, score3) // [100, 200, 300]
```

### Higher-Order Array Methods
```js
[1,2,3,4,5].map(x => x * 2)              // [2,4,6,8,10]
[1,2,3,4,5].filter(x => x > 2)           // [3,4,5]
[1,2,3,4,5].reduce((acc, x) => acc+x, 0) // 15
[1,2,3].find(x => x > 1)                 // 2 (first match)
[1,2,3].findIndex(x => x > 1)            // 1 (index of first match)
[1,2,3].every(x => x > 0)               // true (all match?)
[1,2,3].some(x => x > 2)                // true (any match?)
```

---

## 2.3 Objects — Part 1

> **File:** `03_objects.js`

### Creating Objects — Literal Syntax
```js
const mySym = Symbol("Key1")  // Create a unique Symbol

const jsUser = {
    name: "Saksham",
    "fullName": "Saksham Kumar",
    [mySym]: "mykey1",            // Symbol key — use []
    age: 20,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastlogin: ["Monday", "Wednesday"]
}
```

### Accessing Properties
```js
jsUser.email              // Dot notation
jsUser["email"]           // Bracket notation
jsUser["fullName"]        // Required for string keys
jsUser[mySym]             // Symbol key — must use []
```

### Modifying and Freezing
```js
jsUser.email = "saksham@ratu.com"  // Modify

Object.freeze(jsUser)              // Freeze — no changes allowed
jsUser.email = "new@email.com"     // Silently fails after freeze
```

### Adding Methods
```js
// Without 'this'
jsUser.greeting = function() {
    console.log("hello js user")
}

// With 'this' (refers to the object)
jsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`)
}

jsUser.greeting()      // "hello js user"
jsUser.greetingTwo()   // "hello js user, Saksham"
```

---

## 2.4 Objects — Part 2

> **File:** `04_objects.js`

### Nested Objects
```js
const regularUser = {
    email: "saksjjjs@gmail.com",
    fullName: {
        username: {
            firstname: "saksham",
            lastname: "singh"
        }
    }
}

console.log(regularUser.fullName.username.firstname)  // "saksham"
```

### Merging Objects
```js
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "s", 4: "cv"}

// Object.assign
const obj3 = Object.assign({}, obj1, obj2)

// Spread Operator (modern, recommended)
const obj3 = { ...obj1, ...obj2 }
// {1:"a", 2:"b", 3:"s", 4:"cv"}
```

### Object Utility Methods
```js
const tinderuser = { id: "123456", name: "sakshi", isLoggedIn: false }

Object.keys(tinderuser)     // ["id", "name", "isLoggedIn"]
Object.values(tinderuser)   // ["123456", "sakshi", false]
Object.entries(tinderuser)  // [["id","123456"], ["name","sakshi"], ["isLoggedIn",false]]

tinderuser.hasOwnProperty("isLoggedIn")  // true
tinderuser.hasOwnProperty("phone")       // false
```

### Object Destructuring
```js
const course = {
    coursename: "jss in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructuring with renaming
const { courseInstructor: instructor } = course
console.log(instructor)  // "hitesh"

// Simple destructuring
const { coursename, price } = course
```

---

# 3. Functions, Scope, Arrow Functions and IIFE

> **Folder:** `03_functions_and_scopes/`

---

## 3.1 Functions — Basics

> **File:** `1_function.js`

A **function** is a reusable block of code that performs a specific task.

```js
// Function Declaration
function addTwo(number1, number2) {  // number1, number2 = PARAMETERS
    let result = number1 + number2
    return result    // return sends a value back to the caller
}

// Calling the function
addTwo(3, 5)    // 3, 5 = ARGUMENTS
```

**Parameter vs Argument:**
- **Parameter** — placeholder in function definition (`number1`, `number2`)
- **Argument** — actual value passed when calling (`3`, `5`)

**Return Value:**
- `return` stops function execution and sends a value back
- Code after `return` does NOT execute

---

## 3.2 Handling undefined Parameters

> **File:** `2_function.js`

```js
function loginUser(username) {
    if (username === undefined) {
        console.log("Please enter a user")
        return  // Early return
    }
    return `${username} just logged in`
}

loginUser("hitesh")  // "hitesh just logged in"
loginUser()          // "Please enter a user" (no argument = undefined)
```

### Default Parameters (ES6)
```js
function greet(name = "Guest") {
    return `Hello, ${name}!`
}
greet()          // "Hello, Guest!"
greet("Saksham") // "Hello, Saksham!"
```

---

## 3.3 Rest Operator and Object Arguments

> **File:** `3_function.js`

### Rest Operator (`...`)
Collects remaining arguments into an array:
```js
function calculateCartPrice(val1, val2, ...num1) {
    return num1  // Array of remaining arguments
}

calculateCartPrice(200, 300, 400, 500, 700)
// val1=200, val2=300, num1=[400, 500, 700]
```

### Passing Objects to Functions
```js
const user = { username: "hitesh", price: 199 }

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
// Or pass object literal directly:
handleObject({ username: "saksham", price: 399 })
```

---

## 3.4 Scope in JavaScript

> **File:** `4_scopes.js`

**Scope** determines where variables are accessible.

### Block Scope
```js
let a = 300  // Outer scope

if (true) {
    let a = 10     // Inner scope — different variable!
    const b = 20   // Block-scoped
    console.log("Inner:", a)  // 10
}

console.log(a)  // 300 — outer unchanged
// console.log(b)  // Error! b not accessible here
```

### Nested Functions and Closures
```js
function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username)  // Can access outer 'username'
    }

    // console.log(website)  // Error! website not accessible here
    two()
}
```

### Hoisting
```js
// Function declarations ARE hoisted
addone(5)  // Works! Output: 6
function addone(num) {
    return num + 1
}

// Function expressions are NOT hoisted
// addTwo(5)  // Error! Cannot access before initialization
const addTwo = function(num) {
    return num + 2
}
```

**Hoisting** means JavaScript moves function declarations to the top before executing. Variables with `var` are hoisted as `undefined`. `let` and `const` are in the "Temporal Dead Zone" and can't be accessed before declaration.

---

## 3.5 Arrow Functions

> **File:** `5_Arrowfunction.js`

Arrow functions are a shorter syntax for writing functions (ES6+).

### `this` — Regular vs Arrow Functions
```js
const user = {
    username: "hitesh",
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome!`)  // 'this' = user object
    }
}
user.welcomeMessage()  // "hitesh, Welcome!"
```

```js
// Arrow function — 'this' inherited from outer scope
const chai = () => {
    let username = "hitesh"
    console.log(this.username)  // undefined — 'this' is global scope
}
```

### Arrow Function Syntax
```js
// With braces — needs explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}

// Implicit return — expression automatically returned
const addTwo = (num1, num2) => num1 + num2

// Return object — wrap in parentheses!
const getUser = () => ({ username: "hitesh" })

// Single parameter — parentheses optional
const double = num => num * 2

// No parameters
const greet = () => "Hello!"
```

**Key difference:** Arrow functions do **not have their own `this`**. They inherit `this` from the enclosing scope.

---

## 3.6 IIFE — Immediately Invoked Function Expression

> **File:** `6_iife.js`

An **IIFE** is a function that runs immediately after it's defined.

```js
// Named IIFE
(function chai() {
    console.log("DB Connected")
})()  // () immediately invokes it

// Arrow IIFE with argument
((name) => {
    console.log(`DB Database 2 ${name}`)
})('hitesh')
```

**Why use IIFE?**
- Variables inside don't leak into global scope
- Useful for initialization code (database connection, config)
- Each IIFE should end with `;` to separate from next statement

---

## 3.7 JavaScript Execution Context

> **File:** `7_js_executioncontent`

Understanding how JavaScript runs code is crucial for debugging.

### Types of Execution Context
1. **Global Execution Context (GEC)** — Created when JS file first runs. `this` = global object.
2. **Function Execution Context (FEC)** — Created each time a function is called.
3. **Eval Execution Context** — Created by `eval()` (avoid using eval!).

### Two Phases of Execution

**Phase 1 — Memory Creation Phase (Hoisting):**
- All variables assigned `undefined`
- All function declarations stored with their full definition

**Phase 2 — Execution Phase:**
- Code runs line by line
- Variables get their actual values
- Function calls create new Execution Contexts

### Example Walkthrough
```js
let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(19, 4)
```

Memory Phase: val1=undefined, val2=undefined, addNum=[function], result1=undefined, result2=undefined

Execution Phase:
- val1 = 10, val2 = 5
- addNum(10, 5) → new FEC → total=15 → returns 15 → FEC deleted
- result1 = 15
- addNum(19, 4) → new FEC → total=23 → returns 23 → FEC deleted
- result2 = 23

### Call Stack
JavaScript uses a **Call Stack** to manage execution contexts:
- Function called → pushed onto stack
- Function returns → popped off stack
- Stack overflow = stack gets too full (infinite recursion)

---

# 4. Control Flow

> **Folder:** `04_control_flow/`

---

## 4.1 if / else if / else

> **File:** `if_ifelse.js`

```js
// Simple if
if (condition) {
    // runs if condition is true
}

// if...else
const temperature = 43
if (temperature < 50) {
    console.log("Yes, below 50")
} else {
    console.log("No, above 50")
}

// Multiple conditions
let balance = 1000
if (balance < 500) {
    console.log("less than 500")
} else if (balance < 750) {
    console.log("less than 750")
} else if (balance < 900) {
    console.log("less than 900")
} else {
    console.log("1000 or above")
}
```

### Logical Operators
```js
const isUserloggedin = true
const debitCard = true
const loginGoogle = false
const loginEmail = true

// AND (&&) — ALL conditions must be true
if (isUserloggedin && debitCard) {
    console.log("Allow to buy courses")  // Both true, runs!
}

// OR (||) — ANY condition can be true
if (loginGoogle || loginEmail) {
    console.log("user logged in")  // loginEmail is true, runs!
}

// NOT (!) — Reverses boolean
if (!isUserloggedin) {
    console.log("Not logged in")  // Won't run, isUserloggedin is true
}
```

---

## 4.2 Switch Statement

> **File:** `2_switch.js`

Switch is cleaner than multiple if...else when checking one variable against many values.

```js
switch (key) {
    case value1:
        // code
        break     // IMPORTANT! Without break, execution falls through!
    case value2:
        // code
        break
    default:
        // runs if no case matches
        break
}
```

### Example
```js
const month = "March"

switch (month) {
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")    // This case matches
        break
    default:
        console.log("Unknown month")
        break
}
```

**Fall-through** — Without `break`, execution continues to next cases:
```js
// Intentional fall-through
switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend!")  // Runs for both days
        break
    default:
        console.log("Weekday")
}
```

---

## 4.3 Truthy and Falsy Values

> **File:** `truth.js`

Every value in JavaScript is either **truthy** or **falsy** in a boolean context.

### Falsy Values (only 8!)
```js
false
0
-0
0n           // BigInt zero
""           // Empty string
null
undefined
NaN
```

### Truthy Values (everything else!)
```js
"0"          // String "0" is truthy!
"false"      // String "false" is truthy!
" "          // String with space is truthy!
[]           // Empty array is truthy!
{}           // Empty object is truthy!
function(){} // Any function is truthy!
42           // Non-zero number is truthy!
```

### Practical Examples
```js
const userEmail = ""
if (userEmail) {
    console.log("got user email")
} else {
    console.log("dont have user email")  // Runs — empty string is falsy
}

// Check empty array — correct way!
const emptyArr = []
if (emptyArr.length === 0) {
    console.log("Array is empty")
}
// Note: if(emptyArr) would be TRUE even for empty array!

// Check empty object — correct way!
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}
```

### Nullish Coalescing Operator `??`
Returns right side ONLY if left side is `null` or `undefined`:
```js
let val1 = null ?? 10       // 10 (left is null)
let val2 = undefined ?? 15  // 15
let val3 = 0 ?? 10          // 0  (0 is NOT null/undefined!)
let val4 = "" ?? "default"  // "" (empty string is NOT null/undefined!)
```

**Difference from `||` (OR):**
- `||` returns right side for ANY falsy value (0, "", false, null, undefined)
- `??` returns right side ONLY for null or undefined

### Ternary Operator
```js
// condition ? value_if_true : value_if_false
const iceteaPrice = 100
iceteaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// Output: "more than 80"
```

---

# 5. Iterations and Loops

> **Folder:** `05_iterations/`

---

## 5.1 for Loop

> **File:** `1_loops.js`

Use `for` when you know how many times to repeat.

```js
// Syntax: for (init; condition; update)
for (let i = 1; i <= 10; i++) {
    console.log(i)  // 1, 2, 3, ..., 10
}

// Nested loop — Multiplication Table
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i * j)
    }
}

// Array loop
let myArray = ["flashman", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index])
}

// break — stop loop entirely
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        break  // Loop stops here
    }
    console.log(i)  // 0, 1, 2, 3, 4
}

// continue — skip current iteration
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        continue  // Skip 5, continue from 6
    }
    console.log(i)  // 0,1,2,3,4,6,7,...,20
}
```

---

## 5.2 while and do...while Loops

> **File:** `while_dowhile.js`

### while Loop
Condition checked **before** each iteration:
```js
let index = 0
while (index <= 10) {
    console.log(`value: ${index}`)
    index = index + 2  // Don't forget to update! Infinite loop if skipped.
}
```

### do...while Loop
Runs code **at least once** before checking condition:
```js
let score = 12
do {
    console.log(`score is ${score}`)
    score++
} while (score <= 20)
// Even if score starts at 21, body runs once!
```

---

## 5.3 for...of Loop

> **File:** `forrelatedloops.js`

Used to iterate over **iterables** (arrays, strings, Maps, Sets).

```js
// Array
const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    console.log(val)  // 1, 2, 3, 4, 5
}

// String
const greetings = "hello world"
for (const greet of greetings) {
    console.log(`Each char: ${greet}`)
}

// Map with destructuring
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")

for (const [key, value] of map) {
    console.log(key, ':-', value)
}
```

**Note:** `for...of` does NOT work directly on plain objects!

---

## 5.4 for...in Loop

> **File:** `objects.js`

Used to iterate over **keys** of an object (or indices of an array).

```js
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    java: "java"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}
// Output:
// js shortcut is for javascript
// cpp shortcut is for c++
// etc.

// for...in on array (gives index as string key)
const programming = ["js", "rb", "py", "java", "cp"]
for (const key in programming) {
    console.log(programming[key])  // js, rb, py, java, cp
}
```

---

## 5.5 forEach Loop

> **File:** `5_foreach.js`

`forEach` is an array method that runs a function for each element. It does NOT return a value.

```js
const coding = ["js", "ruby", "java", "python", "cpp"]

// Anonymous function
coding.forEach(function(item) {
    console.log(item)
})

// Arrow function (cleaner)
coding.forEach((item) => {
    console.log(item)
})

// Access item, index, and array
coding.forEach((item, index, arr) => {
    console.log(`${index}: ${item}`)
})
```

---

## 5.6 map, filter, reduce — Higher Order Functions

These are powerful functions that take another function as argument.

### `map()` — Transform Each Element
```js
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubled = myNums.map((num) => num * 2)
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Chain multiple operations
const result = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 50)
// [51, 61, 71, 81, 91, 101]
```

### `filter()` — Keep Only Matching Elements
```js
const evenNums = myNums.filter((num) => num % 2 === 0)
// [2, 4, 6, 8, 10]

const books = [
    { title: "JS Guide", genre: "programming", publishYear: 2020 },
    { title: "Novel 1", genre: "fiction", publishYear: 2018 },
]

const programmingBooks = books.filter((book) => book.genre === "programming")
// Returns only JS Guide
```

### `reduce()` — Reduce to Single Value
```js
const myNums = [1, 2, 3]

const sum = myNums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)  // 0 is the initial value

// 0+1=1, 1+2=3, 3+3=6
console.log(sum)  // 6

// Sum of object prices
const shoppingCart = [
    { name: "js course", price: 2999 },
    { name: "py course", price: 999 },
    { name: "mobile dev", price: 5999 },
]
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice)  // 9997
```

---

# 6. Classes and OOP

> **Folder:** `09_classes_and_oop/`

---

## 6.1 OOP Fundamentals

> **File:** `oop.js`

**Object-Oriented Programming (OOP)** organizes code around objects and classes.

### 4 Pillars of OOP
1. **Encapsulation** — Bundling data and methods together
2. **Abstraction** — Hiding complexity, exposing only necessary details
3. **Inheritance** — Child class inherits from parent
4. **Polymorphism** — Same interface, different implementations

### Constructor Functions
```js
function User2(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Most welcome ${this.username}`)
    }
}

// 'new' keyword does 4 things:
// 1. Creates a new empty object
// 2. Sets 'this' to that new object
// 3. Executes the constructor body
// 4. Returns 'this' automatically

const userOne = new User2("saksham", 12, true)
const userTwo = new User2("hitesh", 11, false)

userOne.greeting()  // "Most welcome saksham"
```

---

## 6.2 ES6 Classes

> **File:** `myClasses.js`

`class` is syntactic sugar over constructor functions.

```js
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@1233", "123")
console.log(chai.encryptPassword())  // "123abc"
console.log(chai.changeUsername())   // "CHAI"
```

### Behind the Scenes — Prototype Equivalent
```js
function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

// Methods on prototype are SHARED across all instances (memory efficient)
User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

const tea = new User("tea", "tea@1233", "456")
console.log(tea.encryptPassword())  // "456abc"
```

---

## 6.3 Prototypes and Prototype Chain

> **File:** `Prototype.js`

Every JavaScript object has a **prototype** — an object it inherits properties/methods from.

### Prototype Chain
```
yourObject → Object.prototype → null
yourArray  → Array.prototype  → Object.prototype → null
```

### Adding Custom Methods to Prototypes
```js
// Add to ALL objects
Object.prototype.hitesh = function() {
    console.log("hitesh is present in all objects")
}

// Add to ALL arrays
Array.prototype.heyHitesh = function() {
    console.log("hitesh says hello")
}

const myHeros = ["thor", "spiderman"]
myHeros.heyHitesh()  // from Array.prototype
myHeros.hitesh()     // from Object.prototype
```

### Custom String Method
```js
String.prototype.trueLength = function() {
    return this.trim().length
}

"Chai aur code.    ".trueLength()  // 14
"saksham kumar".trueLength()       // 13
```

### Prototype-Based Inheritance
```js
const User = { name: "chai", email: "saksham@12333" }
const Teacher = { makeVideo: true }

// Modern way
Teacher.__proto__ = User
Object.setPrototypeOf(teachingSupport, Teacher)
```

---

## 6.4 Inheritance with extends and super

> **File:** `inheritance.js`

```js
class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)  // MUST call super() first!
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@122344.com", 123)
chai.logMe()      // Inherited from User
chai.addCourse()  // Teacher's own method

console.log(chai instanceof Teacher)  // true
console.log(chai instanceof User)     // true (Teacher extends User)
```

---

## 6.5 call() Method

> **File:** `Call.js`

`call()` allows you to call a function with a specific `this` value.

```js
function Setusername(username) {
    this.username = username
}

function createUser(username, email, password) {
    Setusername.call(this, username)  // 'this' of createUser passed
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@123.com", "123")
console.log(chai)
// { username: "chai", email: "chai@123.com", password: "123" }
```

- **`call(thisArg, arg1, arg2)`** — Arguments listed individually
- **`apply(thisArg, [arg1, arg2])`** — Arguments as array
- **`bind(thisArg)`** — Returns new function with `this` permanently bound

---

## 6.6 Getters and Setters

> **File:** `getterandsetter.js`

Getters/Setters allow computed properties that look like regular properties.

```js
class User {
    constructor(email, password) {
        this.email = email       // Calls the setter
        this.password = password // Calls the setter
    }

    get email() {
        return this._email.toUpperCase()  // Getter transforms value
    }

    set email(value) {
        this._email = value  // Use _email to avoid infinite recursion!
    }

    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }
}

const hitesh = new User("saksham@ai", "abcd")
console.log(hitesh.password)  // "ABCD"
console.log(hitesh.email)     // "SAKSHAM@AI"
```

**Note:** When getter/setter is named `email`, store in `_email` to avoid infinite loop.

---

## 6.7 Static Properties and Methods

> **File:** `Staticproperties.js`

`static` methods/properties belong to the **class itself**, not instances.

```js
class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username: ${this.username}`)
    }

    static createId() {
        return `1233`
    }
}

const hitesh = new user("hitesh")
hitesh.logMe()       // "username: hitesh"
// hitesh.createId() // Error! Static not on instances
user.createId()      // "1233" — called on class
```

---

## 6.8 Property Descriptors

> **File:** `Mathpi.js`

Property descriptors control how properties behave.

```js
// View descriptor
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)
// { value: 3.14159..., writable: false, enumerable: false, configurable: false }

const chai = { name: 'ginger chai', price: 250, isAvailable: true }

// Make 'name' read-only and hidden from loops
Object.defineProperty(chai, 'name', {
    writable: false,    // Can't change value
    enumerable: false   // Won't appear in for...in or Object.keys()
})
```

---

# 7. DOM

> **Folder:** `06_dom/`

---

## 7.1 What is the DOM?

The **Document Object Model** is a programming interface for web pages. It represents the page as a tree of objects.

```
document
  └── html
       ├── head
       │    └── title
       └── body
            ├── div
            │    ├── h1
            │    └── p
            └── ul
                 ├── li
                 └── li
```

The DOM is provided by the **browser** — not part of JavaScript itself!

---

## 7.2 Selecting Elements

```js
// By ID — returns single element
document.getElementById('title')

// By Class — returns HTMLCollection (live)
document.getElementsByClassName('heading')

// By Tag — returns HTMLCollection
document.getElementsByTagName('h1')

// CSS Selector — returns FIRST match
document.querySelector('.heading')
document.querySelector('#title')
document.querySelector('h1')

// CSS Selector — returns ALL matches (NodeList)
document.querySelectorAll('.list')
document.querySelectorAll('h1')
```

### Navigating the DOM Tree
```js
const parent = document.querySelector('.parent')

parent.children              // HTMLCollection of direct children
parent.children[0]           // First child
parent.firstElementChild     // First child element
parent.lastElementChild      // Last child element
parent.childNodes            // NodeList (text nodes + elements + comments)
parent.parentElement         // Parent element
parent.nextElementSibling    // Next sibling
parent.previousElementSibling // Previous sibling
```

---

## 7.3 Manipulating Elements

### Reading and Modifying Content
```js
const title = document.getElementById('title')

title.innerHTML   // HTML content (interprets tags)
title.innerText   // Visible text only
title.textContent // All text (even hidden)

// Modifying
title.innerHTML = "<strong>New Bold Title</strong>"
title.innerText = "Plain Text Title"
```

### Modifying Styles
```js
title.style.color = "red"
title.style.backgroundColor = "#333"  // camelCase!
title.style.fontSize = "2rem"
title.style.display = "none"
```

### Modifying Classes
```js
title.classList.add('bg-dark')
title.classList.remove('bg-dark')
title.classList.toggle('active')
title.classList.contains('heading')  // true/false
```

### Modifying Attributes
```js
title.getAttribute('id')
title.setAttribute('class', 'newClass')
title.removeAttribute('class')
```

---

## 7.4 Creating and Removing Elements

```js
// Create new element
const newDiv = document.createElement('div')
newDiv.innerHTML = "Hello World"
newDiv.id = "myNewDiv"
newDiv.classList.add('container')

// Add to DOM
document.body.appendChild(newDiv)
document.body.prepend(newDiv)

// Insert relative to element
const heading = document.querySelector('h1')
heading.insertAdjacentHTML('beforebegin', '<p>Before heading</p>')
heading.insertAdjacentHTML('afterend', '<p>After heading</p>')

// Remove elements
const elem = document.getElementById('myDiv')
elem.remove()                        // Modern way
elem.parentNode.removeChild(elem)    // Old way
```

---

# 8. Events

> **Folder:** `07_events/`

---

## 8.1 Event Fundamentals

> **File:** `1_events.html`

### Ways to Handle Events

**1. DOM Property (basic):**
```js
document.getElementById('owl').onclick = function() {
    alert("owl clicked")
}
```

**2. addEventListener (recommended):**
```js
document.getElementById('japan').addEventListener('click', function(e) {
    alert("japan clicked")
})
```

Why use `addEventListener`?
- Multiple handlers on same event
- Can remove handlers later
- Gives access to event object

### Common Events
```js
element.addEventListener('click', handler)
element.addEventListener('dblclick', handler)
element.addEventListener('mouseover', handler)
element.addEventListener('mouseout', handler)
element.addEventListener('keydown', handler)
element.addEventListener('keyup', handler)
element.addEventListener('submit', handler)
element.addEventListener('change', handler)
element.addEventListener('input', handler)
element.addEventListener('load', handler)
element.addEventListener('DOMContentLoaded', handler)
element.addEventListener('scroll', handler)
element.addEventListener('resize', handler)
```

---

## 8.2 The Event Object

```js
document.getElementById('japan').addEventListener('click', function(e) {
    console.log(e)               // Full event object
    console.log(e.type)          // "click"
    console.log(e.target)        // Element actually clicked
    console.log(e.currentTarget) // Element the listener is on
    console.log(e.timeStamp)     // When event occurred
    console.log(e.clientX)       // X from viewport
    console.log(e.clientY)       // Y from viewport
    console.log(e.altKey)        // Was Alt held?
    console.log(e.ctrlKey)       // Was Ctrl held?
    console.log(e.shiftKey)      // Was Shift held?
    console.log(e.keyCode)       // Key code (keyboard events)
})
```

---

## 8.3 Event Bubbling and Capturing

Event propagation has three phases:
1. **Capture Phase** — Event travels from document down to target
2. **Target Phase** — At the target element
3. **Bubble Phase** — Event travels from target back up to document

```js
// false (default) = Bubbling — handler fires during bubble phase
element.addEventListener('click', handler, false)

// true = Capturing — handler fires during capture phase
element.addEventListener('click', handler, true)

// Stop propagation — event won't travel further
element.addEventListener('click', function(e) {
    e.stopPropagation()
})
```

---

## 8.4 Event Delegation

Add ONE listener to parent, handle all child events via `e.target`:

```js
// Efficient — one listener for all images
document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.tagName)

    if (e.target.tagName === 'IMG') {
        let removeIt = e.target.parentNode
        removeIt.remove()  // Remove the li containing the img
    }
})
```

Benefits:
- Better performance (one listener instead of many)
- Works for dynamically added elements too!

---

## 8.5 Preventing Default Behavior

```js
document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault()    // Prevents link navigation
    e.stopPropagation()   // Prevents bubbling
    console.log("google clicked — won't navigate!")
})

form.addEventListener('submit', function(e) {
    e.preventDefault()  // Prevents page reload
    // Handle with JavaScript
})
```

---

## 8.6 setTimeout and setInterval

```js
// setTimeout — runs ONCE after delay
setTimeout(function() {
    console.log("Runs after 2 seconds")
}, 2000)

// setInterval — runs REPEATEDLY every interval
const intervalId = setInterval(function() {
    console.log("Runs every 3 seconds")
}, 3000)

// Stop the interval
clearInterval(intervalId)
```

### Background Color Changer Project
```js
const randomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let setIntervalID

const startChangingColor = function() {
    if (!setIntervalID) {
        setIntervalID = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        }, 3000)
    }
}

const stopChangingColor = function() {
    clearInterval(setIntervalID)
    setIntervalID = null
}

document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)
```

---

# 9. Advanced JS

> **Folder:** `08_advanced_js/`

---

## 9.1 Asynchronous JavaScript

JavaScript is **single-threaded** — it can only do one thing at a time. But web apps need to be non-blocking.

### The Event Loop
```
Call Stack → where JS runs synchronous code
Web APIs   → setTimeout, fetch, DOM events (browser handles these)
Task Queue → callbacks wait here when Web API finishes
Event Loop → when stack empty, move task from queue to stack
```

```js
console.log("1")        // Sync — runs immediately

setTimeout(() => {
    console.log("2")    // Async — goes to Web API, then queue
}, 0)

console.log("3")        // Sync — runs immediately

// Output: 1, 3, 2
// Even with 0ms timeout, it goes through the queue!
```

---

## 9.2 Callbacks

A **callback** is a function passed as argument, called when an operation completes.

```js
function fetchData(url, callback) {
    setTimeout(() => {
        const data = { user: "hitesh" }
        callback(null, data)  // null = no error
    }, 1000)
}

fetchData("https://api.example.com", function(err, data) {
    if (err) {
        console.log("Error:", err)
        return
    }
    console.log("Data:", data)
})
```

### Callback Hell — The Problem
```js
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            getFinalData(c, function(d) {
                console.log(d)  // Deeply nested = hard to maintain!
            })
        })
    })
})
```

**Solution:** Use Promises!

---

## 9.3 Promises

> **File:** `2_promises.js`

A **Promise** represents the eventual completion or failure of an async operation.

### Promise States
- **Pending** — Initial state, not yet completed
- **Fulfilled** — Operation completed successfully
- **Rejected** — Operation failed

### Creating and Consuming Promises
```js
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task is completed")
        resolve()  // Call when successful
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise Consumed")  // Runs after resolve()
})
```

### Promise with Data
```js
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user)  // { username: "Chai", email: "chai@example.com" }
})
```

### Full Promise Chain with Error Handling
```js
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false

        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        console.log(user)
        return user.username  // Pass data to next .then()
    })
    .then((username) => {
        console.log(username)  // "hitesh"
    })
    .catch(function(error) {
        console.log(error)     // Catches any rejection
    })
    .finally(() => {
        console.log("Promise is either resolved or rejected")  // Always runs
    })
```

### fetch API with Promises
```js
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log("Error:", error)
    })
```

---

## 9.4 async and await

`async/await` is syntactic sugar over Promises — makes async code look synchronous.

```js
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // 'await' pauses execution until Promise resolves
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error:", error)
    }
}

getAllUsers()
```

### With Custom Promise
```js
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
```

### Comparison
```js
// Using Promises
fetch('/api/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

// Using async/await (cleaner!)
async function getData() {
    try {
        const res = await fetch('/api/data')
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
```

---

## 9.5 Closures

A **closure** is a function that remembers variables from its outer scope even after the outer function has finished.

```js
function outer() {
    let count = 0  // "Closed over" variable

    function inner() {
        count++
        return count
    }

    return inner
}

const counter = outer()  // outer() returns inner
counter()  // 1
counter()  // 2
counter()  // 3  — count persists between calls!
```

### Practical Example
```js
function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier  // 'multiplier' is closed over
    }
}

const triple = makeMultiplier(3)
triple(5)   // 15
triple(10)  // 30
```

---

## 9.6 Destructuring Assignment

```js
// Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5]
// first=1, second=2, rest=[3,4,5]

// Swap variables
let a = 1, b = 2
[a, b] = [b, a]  // a=2, b=1

// Object Destructuring
const { name, age, city = "Unknown" } = { name: "Saksham", age: 20 }

// Rename while destructuring
const { name: myName } = { name: "Saksham" }

// Nested destructuring
const { address: { street } } = { address: { street: "MG Road" } }
```

---

## 9.7 Spread Operator

```js
// Arrays
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]   // [1, 2, 3, 4, 5]

// Objects
const obj1 = { a: 1, b: 2 }
const obj2 = { ...obj1, c: 3 } // { a: 1, b: 2, c: 3 }

// Function calls
Math.max(...[1, 5, 3, 2])      // 5
```

---

## 9.8 Optional Chaining (?.)

Access deeply nested properties without errors if intermediate values are null/undefined:

```js
const user = { profile: { name: "Saksham" } }

// Old way
const name = user && user.profile && user.profile.name

// Optional chaining
const name = user?.profile?.name       // "Saksham"
const phone = user?.contact?.phone     // undefined (no error!)
const upper = user?.profile?.name?.toUpperCase()  // "SAKSHAM"
```

---

## 9.9 Map and Set Data Structures

### Map — Key-Value pairs with any key type
```js
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States")
map.set(1, "One")         // Number key
map.set(true, "Boolean")  // Boolean key

map.get('IN')     // "India"
map.has('USA')    // true
map.size          // Total entries
map.delete('USA') // Remove entry
map.clear()       // Remove all

// Iterate
for (const [key, value] of map) {
    console.log(key, ":", value)
}
```

### Set — Unique Values Only
```js
const set = new Set([1, 2, 3, 3, 4, 4, 5])
console.log(set)  // {1, 2, 3, 4, 5} — duplicates removed!

set.add(6)
set.has(3)    // true
set.delete(3)
set.size
set.clear()

// Remove duplicates from array
const arr = [1, 2, 2, 3, 3, 4]
const uniqueArr = [...new Set(arr)]  // [1, 2, 3, 4]
```

---

## 9.10 Error Handling

```js
try {
    const result = riskyOperation()
    console.log(result)
} catch (error) {
    console.log("Error:", error.message)
    console.log("Type:", error.name)
    console.log("Stack:", error.stack)
} finally {
    console.log("Always runs — cleanup code here")
}

// Throwing custom errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!")
    }
    return a / b
}

// Custom Error class
class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}
```

---

## 9.11 Modules (ES6)

```js
// utils.js — Exporting
export const PI = 3.14159
export function add(a, b) { return a + b }
export default class Calculator { /* ... */ }

// main.js — Importing
import Calculator from './utils.js'        // Default import
import { PI, add } from './utils.js'       // Named imports
import * as utils from './utils.js'        // Import everything
import { add as sum } from './utils.js'    // Alias
```

---

## 9.12 'this' Keyword — Complete Guide

```js
// 1. Global context — 'this' = global object
console.log(this)  // window (browser) or global (Node.js)

// 2. Regular function — 'this' = global (non-strict) or undefined (strict)
function regular() { console.log(this) }
regular()

// 3. Object method — 'this' = the object
const obj = {
    name: "Saksham",
    greet() { console.log(this.name) }  // "Saksham"
}
obj.greet()

// 4. Arrow function — 'this' = inherited from enclosing scope
const arrow = () => console.log(this)

// 5. Constructor — 'this' = newly created object
function Person(name) { this.name = name }
const p = new Person("Saksham")

// 6. call/apply/bind — explicitly set 'this'
function greet() { console.log(`Hello, ${this.name}`) }
greet.call({ name: "Saksham" })
greet.apply({ name: "Hitesh" })
const boundGreet = greet.bind({ name: "Chai" })
boundGreet()
```

---

# Quick Reference Cheatsheet

## String Methods
| Method | Description | Example |
|--------|-------------|---------|
| `length` | Length | `"hi".length` → 2 |
| `toUpperCase()` | Uppercase | `"hi".toUpperCase()` → `"HI"` |
| `toLowerCase()` | Lowercase | `"HI".toLowerCase()` → `"hi"` |
| `trim()` | Remove whitespace | `" hi ".trim()` → `"hi"` |
| `split()` | Split to array | `"a,b".split(",")` → `["a","b"]` |
| `includes()` | Contains? | `"hello".includes("he")` → true |
| `indexOf()` | Position | `"hello".indexOf("l")` → 2 |
| `slice()` | Extract | `"hello".slice(1,3)` → `"el"` |
| `replace()` | Replace | `"hi".replace("i","o")` → `"ho"` |
| `repeat()` | Repeat | `"ha".repeat(3)` → `"hahaha"` |

## Array Methods
| Method | Mutates? | Description |
|--------|----------|-------------|
| `push()` | Yes | Add to end |
| `pop()` | Yes | Remove from end |
| `unshift()` | Yes | Add to beginning |
| `shift()` | Yes | Remove from beginning |
| `splice()` | Yes | Remove/add at index |
| `sort()` | Yes | Sort in place |
| `reverse()` | Yes | Reverse in place |
| `concat()` | No | Merge arrays |
| `slice()` | No | Extract portion |
| `map()` | No | Transform elements |
| `filter()` | No | Filter elements |
| `reduce()` | No | Reduce to single value |
| `find()` | No | First match |
| `some()` | No | Any match? |
| `every()` | No | All match? |
| `flat()` | No | Flatten nested |
| `forEach()` | No | Loop (no return) |
| `includes()` | No | Value exists? |
| `join()` | No | Array to string |

## Object Methods
| Method | Description |
|--------|-------------|
| `Object.keys(obj)` | Array of keys |
| `Object.values(obj)` | Array of values |
| `Object.entries(obj)` | Array of [key, value] pairs |
| `Object.assign(target, ...src)` | Copy properties |
| `Object.freeze(obj)` | Make immutable |
| `Object.create(proto)` | Create with prototype |
| `Object.getPrototypeOf(obj)` | Get prototype |
| `Object.setPrototypeOf(obj, p)` | Set prototype |

---

# Key Concepts Summary

## JavaScript is Single-Threaded but Non-Blocking
- Single thread = one operation at a time
- Non-blocking = I/O operations (fetch, setTimeout) don't freeze the thread
- Event Loop manages this balance

## Scope Chain
When JS looks for a variable:
1. Local scope (current function)
2. Enclosing function scopes (closures)
3. Global scope
4. If not found → ReferenceError

## Hoisting
- `function declarations` → hoisted with their full body
- `var` → hoisted, initialized as `undefined`
- `let` and `const` → hoisted but in "Temporal Dead Zone" (TDZ) — cannot access before declaration

## Pass by Value vs Reference
- Primitives (number, string, boolean) → pass by VALUE (copy)
- Objects (arrays, objects, functions) → pass by REFERENCE (pointer)

---

# Common Interview Questions

**Q1: What is the difference between var, let, and const?**
`var` is function-scoped and hoisted as undefined. `let` is block-scoped in TDZ before declaration. `const` is block-scoped, TDZ, and cannot be reassigned. Prefer `const` and `let`.

**Q2: What is closure?**
A closure is a function that retains access to its outer scope's variables even after the outer function returns. Created every time a function is created.

**Q3: Difference between == and ===?**
`==` is loose equality — performs type coercion. `===` is strict equality — no type conversion. `"5" == 5` is true but `"5" === 5` is false. Always prefer `===`.

**Q4: Explain the Event Loop.**
JavaScript is single-threaded. The Event Loop checks: if Call Stack is empty, it takes the next callback from Task Queue and pushes it to the stack. This allows async operations without blocking.

**Q5: What is Prototype?**
Every JavaScript object has a prototype property linking it to another object. When you access a property, JS searches the object, then its prototype, forming a chain. This enables inheritance.

**Q6: What is 'this'?**
`this` refers to the object calling the function. In regular functions it's the calling object. Arrow functions inherit `this` from the enclosing scope. `call`, `apply`, `bind` explicitly set `this`.

**Q7: Promise vs async/await?**
Both handle async operations. `async/await` is built on Promises but provides cleaner, more readable syntax. Error handling uses try/catch instead of `.catch()`.

**Q8: What is Event Delegation?**
Attaching one event listener to a parent instead of each child. Use `e.target` to identify which child was clicked. Improves performance and works for dynamically added elements.

---

# Repository Folder Structure

```
javascript hitesh sir/
├── 01_basics/                    # Variables, Data Types, Operators, Strings, Dates
│   ├── 1_variable.js
│   ├── 2_datatypes.js
│   ├── 3_conversionOperator.js
│   ├── 4_comparision.js
│   ├── 5_datatypessummary.js
│   ├── 6_string.js
│   ├── 7_maths&nums.js
│   └── 8_dates.js
│
├── 02_arrays_and_objects/                 # Arrays and Objects
│   ├── 01_array.js
│   ├── 02_array.js
│   ├── 03_objects.js
│   ├── 04_objects.js
│   ├── 05_objects.js
│   └── json.js
│
├── 03_functions_and_scopes/                  # Functions, Scope, Arrow Functions, IIFE
│   ├── 1_function.js
│   ├── 2_function.js
│   ├── 3_function.js
│   ├── 4_scopes.js
│   ├── 5_Arrowfunction.js
│   ├── 6_iife.js
│   └── 7_js_executioncontent
│
├── 04_control_flow/              # if/else, switch, Truthy/Falsy
│   ├── if_ifelse.js
│   ├── 2_switch.js
│   └── truth.js
│
├── 05_iterations/         # All loop types
│   ├── 1_loops.js
│   ├── 5_foreach.js
│   ├── forrelatedloops.js
│   ├── objects.js
│   └── while_dowhile.js
│
├── 09_classes_and_oop/            # OOP, Classes, Prototypes
│   ├── oop.js
│   ├── myClasses.js
│   ├── Prototype.js
│   ├── inheritance.js
│   ├── Call.js
│   ├── getterandsetter.js
│   ├── Staticproperties.js
│   ├── Object.js
│   ├── Mathpi.js
│   └── properties_get_set.js
│
├── 06_dom/                         # DOM Manipulation
│   ├── 1_basic.html
│   ├── 2_DOM.html
│   ├── 3_nodes.html
│   └── 4_Dom.html
│
├── 07_events/                      # Events and Projects
│   ├── 1_events.html
│   ├── 2_events.html
│   ├── 3_events.html
│   ├── 5_unlimitedcolors.html
│   ├── 5_projectsunlimited.js
│   └── 6_keyboardproject.html
│
└── 08_advanced_js/               # Async JS, Promises, Fetch API
    ├── 01_ApiRequest.html
    └── 2_promises.js
```

---

*Made with love following Hitesh Choudhary's JavaScript Course — Chai aur Code*

*This README is your complete JavaScript reference from Beginner to Advanced*

---

# 10. Deep Dive - JavaScript Internals

---

## 10.1 JavaScript Runtime Environment

JavaScript runs inside a runtime environment (browser or Node.js) that provides APIs beyond the language itself.

### Event Loop Priority
JavaScript handles tasks in this order:
1. **Call Stack** - Synchronous code runs first
2. **Microtask Queue** - Promises (.then()), queueMicrotask() - higher priority
3. **Macrotask Queue** - setTimeout, setInterval, DOM events - lower priority

```js
console.log("1 - Sync")

setTimeout(() => {
    console.log("4 - Macrotask")
}, 0)

Promise.resolve().then(() => {
    console.log("3 - Microtask")
})

console.log("2 - Sync")

// Output order: 1, 2, 3, 4
// Microtasks ALWAYS run before macrotasks!
```

---

## 10.2 Memory Management

JavaScript uses Garbage Collection (Mark and Sweep algorithm) to automatically free memory.

### Common Memory Leaks

```js
// 1. Accidental globals
function leaky() {
    forgotVar = "I am global!"  // No let/const/var
}

// 2. Forgotten timers
const id = setInterval(() => {}, 1000)
// Always: clearInterval(id) when done!

// 3. DOM references after removal
let btn = document.getElementById('btn')
document.body.removeChild(btn)
btn = null  // Must set to null for GC!
```

---

## 10.3 Advanced Closures

### Memoization with Closure
```js
function memoize(fn) {
    const cache = new Map()
    return function(...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) return cache.get(key)
        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

const fastFib = memoize(function fib(n) {
    if (n <= 1) return n
    return fastFib(n-1) + fastFib(n-2)
})

fastFib(50)  // Very fast! Values cached.
```

### Currying with Closures
```js
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }
        return function(...args2) {
            return curried.apply(this, args.concat(args2))
        }
    }
}

function multiply(a, b, c) { return a * b * c }

const curriedMul = curry(multiply)
curriedMul(2)(3)(4)   // 24
curriedMul(2, 3)(4)   // 24
curriedMul(2)(3, 4)   // 24

// Create specialized functions
const double = curriedMul(2)
const triple = curriedMul(3)
double(5)   // 10 (but needs 3rd arg - curriedMul(2)(5) is still partial)
```

---

## 10.4 Advanced Array Techniques

### Immutable Array Operations
```js
// All these return new arrays without mutating original!

const arr = [1, 2, 3, 4, 5]

arr.toSorted((a, b) => b - a)  // [5,4,3,2,1] - original unchanged!
arr.toReversed()                // [5,4,3,2,1] - original unchanged!
arr.with(2, 99)                 // [1,2,99,4,5] - original unchanged!

// Without toSorted/toReversed (pre-ES2023):
[...arr].sort((a, b) => b - a)  // Use spread to avoid mutation
```

### Pipeline Pattern
```js
const employees = [
    { name: "Alice", dept: "Engineering", salary: 90000, active: true },
    { name: "Bob", dept: "Marketing", salary: 70000, active: true },
    { name: "Charlie", dept: "Engineering", salary: 85000, active: false },
    { name: "Diana", dept: "Engineering", salary: 95000, active: true },
]

const avgActiveSalary = employees
    .filter(e => e.active && e.dept === "Engineering")
    .map(e => e.salary)
    .reduce((sum, salary, _, arr) => sum + salary / arr.length, 0)

console.log(avgActiveSalary)  // 92500
```

---

## 10.5 Proxies and Reflect

Proxy allows you to intercept and customize object operations:

```js
const validator = {
    set(target, prop, value) {
        if (prop === 'age') {
            if (typeof value !== 'number') throw new TypeError('Age must be number')
            if (value < 0 || value > 150) throw new RangeError('Age out of range')
        }
        if (prop === 'name' && typeof value !== 'string') {
            throw new TypeError('Name must be string')
        }
        target[prop] = value
        return true
    },
    get(target, prop) {
        if (!(prop in target)) {
            console.warn('Property "' + prop + '" does not exist')
            return undefined
        }
        return target[prop]
    }
}

const user = new Proxy({}, validator)
user.name = "Saksham"   // OK
user.age = 20           // OK
// user.age = "old"     // TypeError!
// user.age = -5        // RangeError!
user.phone              // Warning: Property "phone" does not exist
```

---

## 10.6 Generator Functions

Generators can pause execution with yield:

```js
function* fibonacci() {
    let [a, b] = [0, 1]
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}

const fib = fibonacci()
// Take first 10 fibonacci numbers
const first10 = Array.from({length: 10}, () => fib.next().value)
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Async generators for streaming data
async function* fetchPages(baseUrl) {
    let page = 1
    while (true) {
        const data = await fetch(baseUrl + '?page=' + page).then(r => r.json())
        if (data.length === 0) break
        yield data
        page++
    }
}

for await (const pageData of fetchPages('/api/items')) {
    process(pageData)
}
```

---

## 10.7 Design Patterns

### Singleton Pattern
```js
class Database {
    static #instance = null

    constructor(url) {
        if (Database.#instance) return Database.#instance
        this.url = url
        Database.#instance = this
    }

    static getInstance(url) {
        if (!Database.#instance) new Database(url)
        return Database.#instance
    }
}

const db1 = new Database("mongo://localhost")
const db2 = new Database("sql://localhost")
console.log(db1 === db2)  // true - same instance!
```

### Observer Pattern
```js
class EventEmitter {
    #events = {}

    on(event, cb) {
        (this.#events[event] ??= []).push(cb)
        return () => this.off(event, cb)  // Returns unsubscribe fn
    }

    off(event, cb) {
        this.#events[event] = (this.#events[event] || []).filter(f => f !== cb)
    }

    emit(event, ...args) {
        (this.#events[event] || []).forEach(cb => cb(...args))
    }
}

const store = new EventEmitter()
const unsubscribe = store.on('change', state => console.log('New state:', state))
store.emit('change', { user: 'Saksham' })  // New state: { user: 'Saksham' }
unsubscribe()  // Stop listening
```

### Strategy Pattern
```js
// Different strategies for same interface
const sortStrategies = {
    bubble: (arr) => { /* bubble sort implementation */ return arr },
    quick: (arr) => { /* quick sort implementation */ return arr },
    merge: (arr) => { /* merge sort implementation */ return arr }
}

class Sorter {
    constructor(strategy = 'quick') {
        this.strategy = sortStrategies[strategy]
    }

    setStrategy(name) {
        this.strategy = sortStrategies[name]
        return this
    }

    sort(arr) {
        return this.strategy([...arr])
    }
}

const sorter = new Sorter('bubble')
sorter.sort([3, 1, 2])

sorter.setStrategy('quick')
sorter.sort([3, 1, 2])
```

---

## 10.8 Functional Programming

### Pure Functions and Immutability
```js
// Impure
let state = { count: 0 }
function increment() {
    state.count++  // Side effect - mutates external state
}

// Pure
function increment(state) {
    return { ...state, count: state.count + 1 }  // Returns new object
}

const state1 = { count: 0 }
const state2 = increment(state1)
console.log(state1)  // { count: 0 } - original unchanged!
console.log(state2)  // { count: 1 }
```

### Function Composition
```js
// pipe: left to right execution
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

// compose: right to left execution
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const trim = s => s.trim()
const toLowerCase = s => s.toLowerCase()
const capitalizeFirst = s => s.charAt(0).toUpperCase() + s.slice(1)
const addExclaim = s => s + "!"

const formatName = pipe(trim, toLowerCase, capitalizeFirst, addExclaim)
formatName("  sAKSHAM  ")  // "Saksham!"
```

---

## 10.9 Web APIs

### Fetch API - Complete Reference
```js
// GET request
async function getData(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error('HTTP ' + res.status)
    return res.json()
}

// POST request
async function postData(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return res.json()
}

// With timeout
async function fetchWithTimeout(url, ms = 5000) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), ms)

    try {
        const res = await fetch(url, { signal: controller.signal })
        clearTimeout(timeoutId)
        return res.json()
    } catch (err) {
        if (err.name === 'AbortError') throw new Error('Request timed out')
        throw err
    }
}
```

### LocalStorage API
```js
// Store data (stringify objects!)
localStorage.setItem('user', JSON.stringify({ name: 'Saksham', age: 20 }))
localStorage.setItem('token', 'abc123')

// Retrieve data (parse objects!)
const user = JSON.parse(localStorage.getItem('user'))
const token = localStorage.getItem('token')

// Remove
localStorage.removeItem('token')

// Clear all
localStorage.clear()

// Helper class
class Storage {
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    static get(key, defaultValue = null) {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : defaultValue
    }
    static remove(key) {
        localStorage.removeItem(key)
    }
}

Storage.set('user', { name: 'Saksham' })
Storage.get('user')  // { name: 'Saksham' }
```

---

## 10.10 Performance Optimization

### Debounce
```js
function debounce(fn, delay = 300) {
    let timer
    const debounced = function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn.apply(this, args), delay)
    }
    debounced.cancel = () => clearTimeout(timer)
    return debounced
}

// Search only after user stops typing
const searchInput = document.getElementById('search')
searchInput.addEventListener('input', debounce(e => {
    fetchSearchResults(e.target.value)
}, 300))
```

### Throttle
```js
function throttle(fn, limit = 100) {
    let lastRun = 0
    return function(...args) {
        const now = Date.now()
        if (now - lastRun >= limit) {
            lastRun = now
            return fn.apply(this, args)
        }
    }
}

// Handle scroll without killing performance
window.addEventListener('scroll', throttle(updateScrollPosition, 100))
```

### Virtual Scroll (Concept)
```js
// Render only visible items from large list
class VirtualList {
    constructor(container, items, itemHeight) {
        this.container = container
        this.items = items
        this.itemHeight = itemHeight
        this.render()
        container.addEventListener('scroll', () => this.render())
    }

    render() {
        const { scrollTop, clientHeight } = this.container
        const startIdx = Math.floor(scrollTop / this.itemHeight)
        const endIdx = Math.min(
            startIdx + Math.ceil(clientHeight / this.itemHeight) + 1,
            this.items.length
        )

        // Only render visible items
        this.container.innerHTML = this.items
            .slice(startIdx, endIdx)
            .map((item, i) =>
                '<div style="position:absolute;top:' + (startIdx + i) * this.itemHeight + 'px">' + item + '</div>'
            ).join('')
    }
}
```

---

## 10.11 Modern JavaScript Reference (ES2020-2024)

```js
// ES2020
user?.profile?.name           // Optional chaining
input ?? "default"            // Nullish coalescing
const big = 9007199254740991n // BigInt literal

// ES2021
"hello world".replaceAll("o", "0")  // "hell0 w0rld"
x ??= "fallback"                    // Nullish assignment
x ||= "default"                     // OR assignment
x &&= transform(x)                  // AND assignment
1_000_000                           // Numeric separators

// ES2022
class User {
    #name = ""           // Private field
    age = 0              // Public field

    get name() { return this.#name }
}
[1,2,3].at(-1)          // 5 -- negative index
Object.hasOwn(obj, 'k') // Safe version of hasOwnProperty

// ES2023
[1,2,3].findLast(x => x > 1)      // 3
[1,2,3].findLastIndex(x => x > 1)  // 2
[3,1,2].toSorted()                 // [1,2,3] immutable
[1,2,3].toReversed()               // [3,2,1] immutable
[1,2,3].with(1, 99)                // [1,99,3] immutable
```

---

# Summary � Your Complete JavaScript Journey

You have now covered everything from the very basics of JavaScript all the way to advanced topics used in production applications.

## What You Have Learned

| Topic | Concepts Covered |
|-------|-----------------|
| Variables | const, let, var, scope |
| Data Types | primitives, objects, typeof, coercion |
| Operators | arithmetic, comparison, logical, nullish |
| Functions | declarations, expressions, arrow, IIFE, closures |
| Arrays | methods, HOF (map/filter/reduce), destructuring |
| Objects | creation, methods, prototypes, classes |
| Control Flow | if/else, switch, ternary, truthy/falsy |
| Loops | for, while, for..of, for..in, forEach |
| OOP | classes, extends, super, static, getters/setters |
| Async JS | callbacks, promises, async/await, fetch |
| DOM | selecting, modifying, creating, removing elements |
| Events | listeners, bubbling, delegation, event object |
| Advanced | closures, generators, proxies, modules |
| Performance | debounce, throttle, memoization |
| Patterns | Singleton, Observer, Factory, Module |

## Key JavaScript Principles to Remember

1. **JavaScript is single-threaded** but uses the Event Loop to handle async operations
2. **Closures** give functions access to their outer scope even after the outer function returns
3. **Prototypes** are how JavaScript implements inheritance - every object has one
4. **Primitives are copied by value, objects by reference** - understanding this prevents bugs
5. **	his** depends on HOW a function is called, not WHERE it's defined
6. **Promises** represent eventual completion/failure of async operations
7. **Pure functions** and **immutability** make code more predictable and testable
8. **Event delegation** is more efficient than adding listeners to each element
9. **Hoisting** lifts function declarations and var to top of scope
10. **Strict mode** catches common mistakes - always use "use strict" or ES modules

---

*Made with love following Hitesh Choudhary's JavaScript Course - Chai aur Code*

*Keep coding. Keep learning. Jai JavaScript!*

---

# 11. Complete JavaScript Reference

---

## 11.1 All String Methods

Strings are immutable. All string methods return NEW strings.

```js
const str = "Hello, World!"

// Length and Access
str.length            // 13
str[0]               // "H"
str.at(-1)           // "!" (negative index - ES2022)
str.charAt(0)        // "H"
str.charCodeAt(0)    // 72 (Unicode code)

// Searching
str.indexOf("o")         // 4
str.lastIndexOf("o")     // 8
str.includes("World")    // true
str.startsWith("Hello")  // true
str.endsWith("!")        // true

// Extraction
str.slice(7, 12)     // "World"
str.slice(-6)        // "World!"
str.substring(7, 12) // "World"

// Transformation
str.toUpperCase()    // "HELLO, WORLD!"
str.toLowerCase()    // "hello, world!"
str.trim()           // Remove leading and trailing whitespace
str.trimStart()      // Remove leading whitespace
str.trimEnd()        // Remove trailing whitespace
str.padStart(20, '-') // "-------Hello, World!"
str.padEnd(20, '-')   // "Hello, World!-------"
str.repeat(2)         // "Hello, World!Hello, World!"
str.replace("World", "JS")    // Replace first occurrence
str.replaceAll("l", "L")      // Replace all occurrences (ES2021)

// Splitting
str.split(", ")   // ["Hello", "World!"]
str.split("")     // Array of each character

// Regular Expression methods
str.match(/\w+/g)           // ["Hello", "World"]
str.search(/World/)         // 7 (index) or -1
str.replace(/\w+/g, "X")   // "X, X!"
```

---

## 11.2 All Array Methods

```js
const arr = [1, 2, 3, 4, 5]

// CREATING
Array.from("hello")                    // ["h","e","l","l","o"]
Array.from({length: 5}, (_, i) => i)  // [0,1,2,3,4]
Array.of(1, 2, 3)                      // [1,2,3]

// ADDING/REMOVING (mutate original)
arr.push(6)        // Add to end, return new length
arr.pop()          // Remove from end, return it
arr.unshift(0)     // Add to start, return new length
arr.shift()        // Remove from start, return it
arr.splice(2, 1)   // Remove 1 at index 2
arr.splice(2, 0, 9) // Insert 9 at index 2

// NON-MUTATING
arr.concat([6, 7]) // Merge
arr.slice(1, 3)    // [2, 3]
arr.flat()         // Flatten one level
arr.flat(Infinity) // Flatten all levels
arr.flatMap(x => [x, x*2]) // Map then flat

// ES2023 Immutable Methods
arr.toSorted()     // Sorted copy (no mutation!)
arr.toReversed()   // Reversed copy (no mutation!)
arr.with(2, 99)    // Copy with one changed element

// SEARCHING
arr.indexOf(3)        // 2 (first index)
arr.lastIndexOf(3)    // 2 (last index)
arr.includes(3)       // true
arr.find(x => x > 3) // 4 (first match)
arr.findIndex(x => x > 3) // 3 (index of first match)
arr.findLast(x => x < 4)      // 3 (last match, ES2023)
arr.findLastIndex(x => x < 4)  // 2 (ES2023)

// TRANSFORMING
arr.map(x => x * 2)              // [2,4,6,8,10]
arr.filter(x => x % 2 === 0)     // [2,4]
arr.reduce((acc, x) => acc+x, 0) // 15
arr.sort((a, b) => a - b)        // Sort ascending (MUTATES)
arr.reverse()                    // Reverse (MUTATES)
arr.fill(0)                      // Fill with zeros (MUTATES)

// ITERATION
arr.forEach((x, i) => {})  // No return value
arr.every(x => x > 0)      // All match?
arr.some(x => x > 4)       // Any match?

// CONVERTING
arr.join(" - ")  // "1 - 2 - 3 - 4 - 5"
arr.toString()   // "1,2,3,4,5"

// CHECKING
Array.isArray(arr)  // true
arr.length          // 5
```

---

## 11.3 All Object Methods

```js
const obj = { name: "Saksham", age: 20 }

// READING
Object.keys(obj)     // ["name", "age"]
Object.values(obj)   // ["Saksham", 20]
Object.entries(obj)  // [["name","Saksham"],["age",20]]
Object.hasOwn(obj, "name")     // true (ES2022, safer)
obj.hasOwnProperty("name")     // true (older way)
"name" in obj                  // true (checks prototype too)

// COPYING AND MERGING
Object.assign({}, obj)           // Shallow copy
Object.assign(target, src1, src2) // Merge into target
{ ...obj }                       // Spread copy
{ ...obj1, ...obj2 }            // Merge with spread
structuredClone(obj)             // Deep clone (ES2022)

// PROTECTION
Object.freeze(obj)     // No modifications allowed
Object.seal(obj)       // Can change values, not add/delete

// DEFINING PROPERTIES
Object.defineProperty(obj, 'id', {
    value: 1,
    writable: false,     // Cannot be changed
    enumerable: false,   // Hidden from loops
    configurable: false  // Cannot be reconfigured
})

// PROTOTYPE
Object.getPrototypeOf(obj)           // Get prototype
Object.setPrototypeOf(obj, proto)    // Set prototype
Object.create(proto)                 // New object with prototype

// CONVERTING
Object.fromEntries([["a",1],["b",2]])  // {a:1,b:2}
Object.fromEntries(map)                // Map to object
```

---

## 11.4 All Number Methods and Math

```js
const n = 3.14159

// Number instance methods
n.toFixed(2)          // "3.14" (string!)
n.toPrecision(4)      // "3.142"
n.toString()          // "3.14159"
n.toString(2)         // Binary string
n.toString(16)        // Hex string

// Number static methods
Number.isInteger(42)      // true
Number.isFinite(Infinity) // false
Number.isNaN(NaN)         // true (better than global isNaN)
Number.parseInt("42px")   // 42
Number.parseFloat("3.14") // 3.14

// Constants
Number.MAX_SAFE_INTEGER   // 9007199254740991
Number.MIN_SAFE_INTEGER   // -9007199254740991
Number.EPSILON            // Smallest difference: 2.22e-16

// Math object methods
Math.round(4.6)    // 5
Math.floor(4.9)    // 4 (always down)
Math.ceil(4.1)     // 5 (always up)
Math.trunc(4.9)    // 4 (remove decimal, no round)
Math.abs(-5)       // 5
Math.max(1, 2, 3)  // 3
Math.min(1, 2, 3)  // 1
Math.pow(2, 10)    // 1024
Math.sqrt(16)      // 4
Math.cbrt(27)      // 3
Math.log2(8)       // 3
Math.log10(100)    // 2
Math.PI            // 3.14159265358979...
Math.E             // 2.71828182845904...
Math.random()      // 0 to 1 (exclusive)
Math.sign(-5)      // -1, sign(0) = 0, sign(5) = 1

// Random in range
Math.floor(Math.random() * 100) + 1  // 1 to 100
```

---

## 11.5 Date Methods - Complete Reference

```js
const d = new Date()

// Creating
new Date()                // Now
new Date(2025, 9, 13)     // Oct 13, 2025 (months 0-indexed!)
new Date("2025-10-13")    // From ISO string
new Date(timestamp)       // From milliseconds

// Getters
d.getFullYear()     // 2025
d.getMonth()        // 9 (0=Jan, 11=Dec)
d.getDate()         // Day of month (1-31)
d.getDay()          // Day of week (0=Sunday, 6=Saturday)
d.getHours()        // 0-23
d.getMinutes()      // 0-59
d.getSeconds()      // 0-59
d.getTime()         // Milliseconds since Jan 1, 1970

// Formatting
d.toString()          // Full readable string
d.toDateString()      // "Mon Oct 13 2025"
d.toTimeString()      // "10:45:32 GMT+0530"
d.toISOString()       // "2025-10-13T05:15:32.000Z"
d.toLocaleString('en-IN')  // Indian locale format

// Static
Date.now()  // Current timestamp in ms

// Date calculations
const msPerDay = 24 * 60 * 60 * 1000
const daysBetween = (d1, d2) => Math.round(Math.abs(d2 - d1) / msPerDay)
```

---

## 11.6 Error Types and Handling

```js
// Built-in error types
new Error("Something went wrong")          // Generic
new TypeError("Expected string, got number") // Wrong type
new ReferenceError("x is not defined")      // Undefined variable
new SyntaxError("Unexpected token")         // Invalid syntax
new RangeError("Array index out of bounds") // Out of range
new URIError("Invalid URI")                 // URI encoding error
new EvalError("Eval error")                 // From eval()

// try...catch...finally
try {
    // Code that might throw
    const result = riskyOperation()
} catch (error) {
    console.log(error.name)    // "TypeError"
    console.log(error.message) // Error description
    console.log(error.stack)   // Stack trace

    // Handle by type
    if (error instanceof TypeError) {
        // Handle type error specifically
    } else if (error instanceof RangeError) {
        // Handle range error
    } else {
        throw error  // Re-throw unknown errors
    }
} finally {
    cleanup()  // Always runs
}

// Custom error class
class AppError extends Error {
    constructor(message, code, statusCode = 500) {
        super(message)
        this.name = 'AppError'
        this.code = code
        this.statusCode = statusCode
    }
}

// Throwing custom error
function getUser(id) {
    if (!id) throw new AppError("User ID required", "MISSING_ID", 400)
    if (typeof id !== 'number') throw new AppError("ID must be number", "INVALID_ID", 422)
    return fetchUser(id)
}

// Async error handling
async function loadData() {
    try {
        const response = await fetch('/api/data')
        if (!response.ok) throw new AppError("API failed", "API_ERROR", response.status)
        return await response.json()
    } catch (error) {
        console.error("Error:", error.message)
        return null  // Graceful fallback
    }
}
```

---

## 11.7 Advanced OOP Patterns

```js
// Mixins - Share behavior between classes without inheritance
const Serializable = (Base) => class extends Base {
    serialize() {
        return JSON.stringify(this)
    }

    static deserialize(json) {
        return Object.assign(new this(), JSON.parse(json))
    }
}

const Validatable = (Base) => class extends Base {
    validate() {
        for (const [key, value] of Object.entries(this)) {
            if (value === null || value === undefined) {
                throw new Error(`${key} is required`)
            }
        }
        return true
    }
}

// Apply multiple mixins
class User extends Serializable(Validatable(class {})) {
    constructor(name, email) {
        super()
        this.name = name
        this.email = email
    }
}

const user = new User("Saksham", "saksham@example.com")
user.validate()          // true
const json = user.serialize()  // '{"name":"Saksham","email":"..."}'

// Abstract class pattern
class AbstractShape {
    constructor() {
        if (new.target === AbstractShape) {
            throw new Error("Cannot instantiate abstract class")
        }
    }

    // Abstract method
    area() {
        throw new Error("area() must be implemented")
    }

    // Concrete method using abstract
    describe() {
        return `This shape has area: ${this.area()}`
    }
}

class Circle extends AbstractShape {
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return Math.PI * this.radius ** 2
    }
}

class Rectangle extends AbstractShape {
    constructor(w, h) {
        super()
        this.width = w
        this.height = h
    }

    area() {
        return this.width * this.height
    }
}

// new AbstractShape()  // Error!
const c = new Circle(5)
c.describe()  // "This shape has area: 78.539..."
```

---

## 11.8 Interview Questions - Common Code Puzzles

```js
// Q: What is output of this code?
console.log(typeof typeof 1)  // "string" (typeof 1 = "number", typeof "number" = "string")

// Q: What is output?
console.log(1 + "2" + "3")   // "123" (coercion)
console.log(1 + +"2" + 3)   // 6 (unary + converts "2" to number)

// Q: Deep equal check
function deepEqual(a, b) {
    if (a === b) return true
    if (typeof a !== 'object' || typeof b !== 'object') return false
    if (a === null || b === null) return false
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    if (keysA.length !== keysB.length) return false
    return keysA.every(key => deepEqual(a[key], b[key]))
}

// Q: Implement pipe/compose
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

// Q: Detect circular reference
function hasCircular(obj) {
    const seen = new Set()
    function detect(value) {
        if (typeof value !== 'object' || value === null) return false
        if (seen.has(value)) return true
        seen.add(value)
        return Object.values(value).some(detect)
    }
    return detect(obj)
}

const a = { b: {} }
a.b.a = a  // Circular!
hasCircular(a)  // true

// Q: Convert object to query string
function toQueryString(obj) {
    return new URLSearchParams(obj).toString()
}
toQueryString({ name: "Saksham", age: 20 })  // "name=Saksham&age=20"

// Q: Parse query string to object
function fromQueryString(qs) {
    return Object.fromEntries(new URLSearchParams(qs))
}
fromQueryString("name=Saksham&age=20")  // { name: "Saksham", age: "20" }

// Q: Chunk array into groups of n
function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) },
        (_, i) => arr.slice(i * size, i * size + size))
}
chunk([1,2,3,4,5,6,7], 3)  // [[1,2,3],[4,5,6],[7]]

// Q: Remove duplicates from array of objects by key
function uniqueBy(arr, key) {
    const seen = new Set()
    return arr.filter(item => {
        const val = item[key]
        if (seen.has(val)) return false
        seen.add(val)
        return true
    })
}

// Q: Flatten object
function flattenObj(obj, prefix = '') {
    return Object.entries(obj).reduce((flat, [key, value]) => {
        const fullKey = prefix ? `${prefix}.${key}` : key
        if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
            Object.assign(flat, flattenObj(value, fullKey))
        } else {
            flat[fullKey] = value
        }
        return flat
    }, {})
}

flattenObj({ a: { b: { c: 1 }, d: 2 } })
// { "a.b.c": 1, "a.d": 2 }
```

---

## 11.9 JavaScript Security Best Practices

```js
// 1. Avoid eval() - executes arbitrary code
eval("alert('XSS attack!')")  // Never do this!

// Use JSON.parse instead
const data = JSON.parse(jsonString)  // Safe

// 2. Sanitize HTML to prevent XSS
function sanitizeHTML(html) {
    const div = document.createElement('div')
    div.textContent = html  // This escapes HTML
    return div.innerHTML
}

// Bad
element.innerHTML = userInput  // XSS vulnerable!

// Good
element.textContent = userInput  // Safe - treats as text
// Or sanitize first
element.innerHTML = sanitizeHTML(userInput)

// 3. Content Security Policy headers
// <meta http-equiv="Content-Security-Policy" content="default-src 'self'">

// 4. Avoid storing sensitive data in localStorage (not encrypted)
// Bad
localStorage.setItem('password', 'secret123')

// Good - use httpOnly cookies for auth tokens

// 5. Use HTTPS - prevents man-in-middle attacks

// 6. Validate input on both client AND server
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// 7. Rate limiting - use debounce for API calls
const debouncedSearch = debounce(searchAPI, 300)

// 8. Use integrity for CDN scripts
// <script src="https://cdn.example.com/lib.js"
//         integrity="sha384-..." crossorigin="anonymous"></script>
```

---

## 11.10 Performance Best Practices

```js
// 1. Cache DOM queries
const btn = document.querySelector('.btn')  // Query once
// NOT: document.querySelector('.btn').style = ... (every time)

// 2. Use document fragment for batch DOM inserts
const fragment = document.createDocumentFragment()
items.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    fragment.appendChild(li)
})
document.getElementById('list').appendChild(fragment)  // One reflow!

// 3. Avoid layout thrashing (reading then writing DOM)
// Bad - forces multiple reflows
el.style.width = el.offsetWidth + 10 + 'px'
el.style.height = el.offsetHeight + 10 + 'px'

// Good - read all, then write all
const w = el.offsetWidth
const h = el.offsetHeight
el.style.width = (w + 10) + 'px'
el.style.height = (h + 10) + 'px'

// 4. Use requestAnimationFrame for animations
function animate() {
    // Update animation state
    element.style.left = (x++) + 'px'
    requestAnimationFrame(animate)  // Schedule next frame
}
requestAnimationFrame(animate)

// 5. Lazy load images
<img src="placeholder.jpg" data-src="actual.jpg" loading="lazy">

// 6. Use Web Workers for heavy computation
const worker = new Worker('heavy-calculation.js')
worker.postMessage(bigData)
worker.onmessage = (e) => updateUI(e.data)

// 7. Avoid memory leaks
// Clean up event listeners
const handler = () => {}
el.addEventListener('click', handler)
// When done:
el.removeEventListener('click', handler)

// Or use AbortController
const controller = new AbortController()
el.addEventListener('click', handler, { signal: controller.signal })
// Clean up all at once:
controller.abort()

// 8. Use Map for frequent lookups (O(1))
const map = new Map()
map.set(key, value)
map.get(key)  // O(1) - much faster than object for large sets
```

---

# Final Summary

JavaScript is a vast language but mastering it follows a clear progression. The most important things to remember:

**Core Concepts:**
- Variables: `const` (default), `let` (reassignable), avoid `var`
- Types: 7 primitives (string, number, boolean, null, undefined, symbol, bigint) + objects
- Functions: First-class citizens — can be stored in variables, passed as arguments, returned
- Scope: Block scoping with `let/const`, closures remember outer scope

**The Weird Parts:**
- `typeof null === "object"` — historical bug
- `0.1 + 0.2 !== 0.3` — floating point arithmetic
- `[] == false` — type coercion is confusing, always use `===`
- `this` changes based on how function is called, not where it's defined

**Async JavaScript:**
- JS is single-threaded but non-blocking via the Event Loop
- Callbacks -> Promises -> async/await — each builds on the previous
- Always handle errors in async code!

**Modern JavaScript:**
- Destructuring, spread, rest — make code concise
- Optional chaining (?.) — safe property access
- Nullish coalescing (??) — null-safe defaults
- Private class fields (#) — true encapsulation

**The Golden Rules:**
1. Use strict equality (===) always
2. Avoid var — use const and let
3. Handle all errors (no silent catch blocks)
4. Prefer immutability (don't mutate, return new values)
5. Write pure functions when possible
6. Document your code with meaningful comments
7. Use descriptive variable and function names
8. Break complex functions into smaller, focused ones

---

*Made with love following Hitesh Choudhary's JavaScript Course - Chai aur Code*

*JavaScript: Learn once, run anywhere — Browser, Node.js, Deno, Bun*

*Keep coding! - Saksham*

---

# 12. JavaScript Ecosystem and Tools

---

## 12.1 Node.js Basics

Node.js is a JavaScript runtime built on Chrome's V8 engine — it lets you run JavaScript outside the browser.

```js
// Running JS in Node.js
// node filename.js

// Core modules
const fs = require('fs')           // File System
const path = require('path')       // Path utilities
const http = require('http')       // HTTP server
const os = require('os')           // Operating System info
const crypto = require('crypto')   // Cryptography

// ES Module import (with .mjs or "type":"module" in package.json)
import fs from 'fs'
import { readFile } from 'fs/promises'

// File operations
// Synchronous (blocks!)
const data = fs.readFileSync('file.txt', 'utf8')

// Asynchronous (non-blocking - preferred)
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})

// Promise-based (modern)
const content = await fs.promises.readFile('file.txt', 'utf8')

// Path utilities
path.join('/users', 'saksham', 'file.txt')  // "/users/saksham/file.txt"
path.basename('/users/saksham/file.txt')    // "file.txt"
path.dirname('/users/saksham/file.txt')     // "/users/saksham"
path.extname('readme.md')                   // ".md"
path.resolve('./file.txt')                  // Absolute path

// Environment variables
process.env.NODE_ENV    // "development" or "production"
process.env.PORT        // Custom port
process.cwd()           // Current working directory
process.argv            // Command line arguments

// Simple HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello from Node.js!')
})
server.listen(3000, () => console.log('Server running on port 3000'))
```

---

## 12.2 npm — Node Package Manager

```bash
# Initialize a new project
npm init -y   # -y accepts all defaults

# Install packages
npm install express        # Install in dependencies
npm install --save-dev jest  # Install in devDependencies
npm install -g nodemon      # Install globally

# Useful global tools
npm install -g nodemon    # Auto-restart on file changes
npm install -g live-server # Dev server for static files

# Scripts in package.json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "build": "webpack"
  }
}

npm run dev   # Run dev script
npm start     # Run start script (shorthand)
npm test      # Run test script (shorthand)
```

---

## 12.3 ES Modules vs CommonJS

```js
// CommonJS (Node.js traditional)
const express = require('express')       // Import
module.exports = { myFunction }          // Export
module.exports.myFunction = function() {} // Named export

// ES Modules (Modern - .mjs or "type":"module")
import express from 'express'            // Default import
import { readFile } from 'fs/promises'   // Named import
export function myFunction() {}          // Named export
export default class MyClass {}          // Default export
```

---

## 12.4 JSON in JavaScript

JSON (JavaScript Object Notation) is the standard data format for APIs.

```js
// JavaScript Object to JSON string
const user = { name: "Saksham", age: 20, active: true }
const json = JSON.stringify(user)
// '{"name":"Saksham","age":20,"active":true}'

// With formatting (pretty print)
JSON.stringify(user, null, 2)
// {
//   "name": "Saksham",
//   "age": 20,
//   "active": true
// }

// Selective properties
JSON.stringify(user, ['name', 'age'])
// '{"name":"Saksham","age":20}'

// JSON string to JavaScript Object
const obj = JSON.parse(json)

// Common use: Deep clone (with limitations)
const copy = JSON.parse(JSON.stringify(original))
// Cannot handle: functions, undefined, Date, circular refs, Symbol

// JSON limitations:
JSON.stringify({ fn: () => {}, undef: undefined })
// '{}' -- functions and undefined are omitted!

JSON.stringify({ date: new Date() })
// '{"date":"2025-10-13T05:30:00.000Z"}' -- Date becomes string!

// Always validate JSON from APIs
try {
    const data = JSON.parse(response)
} catch (e) {
    console.error("Invalid JSON:", e.message)
}
```

---

## 12.5 Browser Storage Options

```js
// ============================================================
// localStorage - Persistent, same-origin, 5-10MB
// ============================================================
localStorage.setItem('key', JSON.stringify(value))
const data = JSON.parse(localStorage.getItem('key') || 'null')
localStorage.removeItem('key')
localStorage.clear()  // Remove all

// ============================================================
// sessionStorage - Session only, tab-specific, 5-10MB
// ============================================================
sessionStorage.setItem('key', value)
sessionStorage.getItem('key')
// Cleared when tab closes

// ============================================================
// Cookies - Small (~4KB), sent with every HTTP request
// ============================================================
// Set cookie
document.cookie = 'name=saksham; path=/; expires=Fri, 31 Dec 2025 23:59:59 GMT'
document.cookie = 'token=abc123; path=/; Secure; HttpOnly; SameSite=Strict'

// Read cookie
const cookies = document.cookie  // "name=saksham; token=abc123"

// Helper function
function getCookie(name) {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1]
}

// ============================================================
// IndexedDB - Large amounts of structured data
// ============================================================
const request = indexedDB.open('MyDatabase', 1)

request.onupgradeneeded = (e) => {
    const db = e.target.result
    const store = db.createObjectStore('users', { keyPath: 'id' })
    store.createIndex('name', 'name', { unique: false })
}

// ============================================================
// Choosing Storage
// ============================================================
// localStorage  - User preferences, non-sensitive persistent data
// sessionStorage - Temporary session data, form progress
// Cookies       - Authentication tokens (httpOnly for security)
// IndexedDB     - Large data, offline support, structured queries
```

---

## 12.6 Web Workers

Web Workers run JavaScript in a background thread, keeping the UI responsive.

```js
// Main thread
const worker = new Worker('worker.js')

// Send data to worker
worker.postMessage({ numbers: [1, 2, 3, 4, 5] })

// Receive result from worker
worker.onmessage = (e) => {
    console.log('Result:', e.data)
}

// Handle errors
worker.onerror = (error) => {
    console.error('Worker error:', error.message)
}

// Terminate when done
worker.terminate()

// ---- worker.js ----
// Worker scope has no access to DOM!
self.onmessage = (e) => {
    const { numbers } = e.data

    // Heavy computation (won't block main thread)
    const result = numbers.reduce((sum, n) => {
        // Simulate heavy work
        for (let i = 0; i < 1000000; i++) { /* busy work */ }
        return sum + n
    }, 0)

    // Send result back
    self.postMessage({ sum: result })
}
```

---

## 12.7 Fetch API - Advanced Patterns

```js
// ============================================================
// Common Fetch Patterns
// ============================================================

// GET with error handling
async function get(url) {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    return res.json()
}

// POST/PUT/DELETE with body
async function send(url, method, data) {
    const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json()
}

// With authentication
async function authFetch(url, options = {}) {
    const token = localStorage.getItem('token')
    const res = await fetch(url, {
        ...options,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...options.headers
        }
    })

    if (res.status === 401) {
        // Token expired - redirect to login
        window.location.href = '/login'
        return
    }

    return res.json()
}

// With timeout using AbortController
async function fetchWithTimeout(url, ms = 5000) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), ms)

    try {
        const res = await fetch(url, { signal: controller.signal })
        clearTimeout(timeout)
        return res.json()
    } catch (err) {
        if (err.name === 'AbortError') throw new Error('Request timed out')
        throw err
    }
}

// Retry on failure
async function fetchWithRetry(url, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            return await get(url)
        } catch (err) {
            if (i === retries - 1) throw err
            await new Promise(resolve => setTimeout(resolve, delay * (i + 1)))
        }
    }
}

// Parallel requests
async function fetchMultiple(...urls) {
    const responses = await Promise.all(urls.map(url => get(url)))
    return responses
}

const [users, posts, comments] = await fetchMultiple(
    '/api/users',
    '/api/posts',
    '/api/comments'
)
```

---

## 12.8 Advanced DOM Patterns

```js
// ============================================================
// Virtual DOM Concept
// ============================================================
// Frameworks like React use Virtual DOM to optimize updates:
// 1. Maintain virtual tree of UI state
// 2. When state changes, create new virtual tree
// 3. Diff old and new trees (reconciliation)
// 4. Apply only minimal DOM changes

// ============================================================
// Template Element
// ============================================================
const template = document.getElementById('card-template')
// <template id="card-template">
//   <div class="card">
//     <h2 class="title"></h2>
//     <p class="content"></p>
//   </div>
// </template>

function createCard(title, content) {
    const clone = template.content.cloneNode(true)
    clone.querySelector('.title').textContent = title
    clone.querySelector('.content').textContent = content
    return clone
}

// ============================================================
// MutationObserver - Watch DOM changes
// ============================================================
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            console.log('Children added/removed')
        }
        if (mutation.type === 'attributes') {
            console.log('Attribute changed:', mutation.attributeName)
        }
    })
})

observer.observe(element, {
    childList: true,          // Watch for children changes
    attributes: true,         // Watch for attribute changes
    subtree: true,            // Watch entire subtree
    attributeOldValue: true,  // Track old attribute values
    characterData: true       // Watch text content changes
})

// Stop observing
observer.disconnect()

// ============================================================
// ResizeObserver
// ============================================================
const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {
        const { width, height } = entry.contentRect
        console.log(`Element resized: ${width}x${height}`)
    })
})

resizeObserver.observe(document.querySelector('.container'))

// ============================================================
// IntersectionObserver - Visibility detection
// ============================================================
const intersectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                entry.target.style.opacity = '1'
                intersectionObserver.unobserve(entry.target)
            }
        })
    },
    {
        threshold: 0.1,  // 10% visible to trigger
        rootMargin: '50px' // Start 50px before actually visible
    }
)

document.querySelectorAll('.fade-in').forEach(el =>
    intersectionObserver.observe(el)
)
```

---

## 12.9 Advanced Class Patterns

```js
// ============================================================
// Factory Pattern with Classes
// ============================================================
class UserFactory {
    static create(type, data) {
        switch(type) {
            case 'admin': return new AdminUser(data)
            case 'teacher': return new TeacherUser(data)
            case 'student': return new StudentUser(data)
            default: throw new Error(`Unknown user type: ${type}`)
        }
    }
}

const user = UserFactory.create('admin', { name: 'Saksham', permissions: ['all'] })

// ============================================================
// Builder Pattern
// ============================================================
class QueryBuilder {
    #table = ''
    #conditions = []
    #columns = ['*']
    #limit = null
    #orderBy = null

    from(table) {
        this.#table = table
        return this  // Enable chaining!
    }

    select(...columns) {
        this.#columns = columns
        return this
    }

    where(condition) {
        this.#conditions.push(condition)
        return this
    }

    orderBy(column, direction = 'ASC') {
        this.#orderBy = `${column} ${direction}`
        return this
    }

    limit(n) {
        this.#limit = n
        return this
    }

    build() {
        let query = `SELECT ${this.#columns.join(', ')} FROM ${this.#table}`
        if (this.#conditions.length > 0) {
            query += ` WHERE ${this.#conditions.join(' AND ')}`
        }
        if (this.#orderBy) query += ` ORDER BY ${this.#orderBy}`
        if (this.#limit) query += ` LIMIT ${this.#limit}`
        return query
    }
}

const query = new QueryBuilder()
    .from('users')
    .select('name', 'email', 'age')
    .where('age > 18')
    .where('active = true')
    .orderBy('name')
    .limit(10)
    .build()

// "SELECT name, email, age FROM users WHERE age > 18 AND active = true ORDER BY name ASC LIMIT 10"

// ============================================================
// Decorator Pattern (Manual - ES Decorators coming soon)
// ============================================================
function readonly(target, key, descriptor) {
    descriptor.writable = false
    return descriptor
}

function log(target, key, descriptor) {
    const original = descriptor.value
    descriptor.value = function(...args) {
        console.log(`Calling ${key} with`, args)
        const result = original.apply(this, args)
        console.log(`${key} returned`, result)
        return result
    }
    return descriptor
}

// ============================================================
// Event System in Classes
// ============================================================
class Store extends EventEmitter {
    #state

    constructor(initialState) {
        super()
        this.#state = initialState
    }

    getState() {
        return { ...this.#state }
    }

    setState(updates) {
        const prevState = this.#state
        this.#state = { ...this.#state, ...updates }
        this.emit('change', this.#state, prevState)
    }
}

const store = new Store({ count: 0, user: null })
store.on('change', (state) => console.log('State changed:', state))
store.setState({ count: 1 })  // State changed: { count: 1, user: null }
```

---

## 12.10 Testing JavaScript

```js
// ============================================================
// Unit Testing with Jest (most popular)
// ============================================================

// Function to test
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Arguments must be numbers')
    }
    return a + b
}

// Test file: add.test.js
describe('add function', () => {
    test('adds two numbers', () => {
        expect(add(2, 3)).toBe(5)
        expect(add(-1, 1)).toBe(0)
        expect(add(0, 0)).toBe(0)
    })

    test('throws for non-numbers', () => {
        expect(() => add('1', 2)).toThrow(TypeError)
        expect(() => add(1, null)).toThrow('Arguments must be numbers')
    })

    test('handles large numbers', () => {
        expect(add(1e10, 1e10)).toBe(2e10)
    })
})

// Common matchers
expect(value).toBe(5)              // Strict equality (===)
expect(value).toEqual({a: 1})     // Deep equality
expect(value).toBeTruthy()        // Truthy
expect(value).toBeFalsy()         // Falsy
expect(value).toBeNull()          // null
expect(value).toBeUndefined()     // undefined
expect(value).toBeDefined()       // Not undefined
expect(value).toBeGreaterThan(5)  // > 5
expect(arr).toContain(3)           // Array contains 3
expect(str).toMatch(/pattern/)    // Regex match
expect(fn).toThrow()              // Function throws

// Async testing
test('fetches user data', async () => {
    const user = await fetchUser(1)
    expect(user).toHaveProperty('name')
    expect(user.id).toBe(1)
})

// Mocking
jest.mock('./api', () => ({
    fetchUser: jest.fn().mockResolvedValue({ id: 1, name: 'Saksham' })
}))
```

---

## 12.11 Debugging JavaScript

```js
// ============================================================
// Console Methods
// ============================================================
console.log('Basic log')
console.error('Error message - shows red')
console.warn('Warning - shows yellow')
console.info('Info message')
console.debug('Debug message')

// Grouping
console.group('User Details')
console.log('Name: Saksham')
console.log('Age: 20')
console.groupEnd()

// Tables
console.table([
    { name: 'Saksham', age: 20 },
    { name: 'Hitesh', age: 35 }
])

// Timing
console.time('operation')
expensiveOperation()
console.timeEnd('operation')  // "operation: 23.4ms"

// Counting
console.count('clicked')  // "clicked: 1"
console.count('clicked')  // "clicked: 2"
console.countReset('clicked')

// Assertions
console.assert(2 + 2 === 5, 'Math is broken!')
// Logs error if assertion fails

// Tracing
console.trace('Where was this called?')  // Shows call stack

// ============================================================
// Breakpoints and DevTools
// ============================================================
// In browser: F12 -> Sources -> Click line number
// In code: debugger statement
function buggyFunction(x) {
    debugger  // Pauses execution here in DevTools
    return x * 2
}

// ============================================================
// Common Debugging Patterns
// ============================================================

// Log object without reference issues
console.log(JSON.parse(JSON.stringify(obj)))

// Track when object property changes
const handler = {
    set(target, key, value) {
        console.log(`${key} changed from ${target[key]} to ${value}`)
        target[key] = value
        return true
    }
}
const tracked = new Proxy(myObj, handler)

// Performance profiling
console.profile('myProfile')
slowOperation()
console.profileEnd('myProfile')
```

---

## 12.12 Code Quality Tools

```js
// ============================================================
// ESLint - Find and fix code issues
// ============================================================
// .eslintrc.json
{
  "env": { "browser": true, "es2022": true },
  "extends": ["eslint:recommended"],
  "rules": {
    "no-var": "error",        // No var allowed
    "prefer-const": "error",  // Use const when no reassignment
    "no-console": "warn",     // Warn on console.log
    "eqeqeq": "error"         // Require === not ==
  }
}

// ============================================================
// Prettier - Code formatting
// ============================================================
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}

// ============================================================
// TypeScript (Brief intro)
// ============================================================
// TypeScript adds static types to JavaScript

// Type annotations
let name: string = "Saksham"
let age: number = 20
let active: boolean = true

// Function types
function add(a: number, b: number): number {
    return a + b
}

// Interface
interface User {
    id: number
    name: string
    email: string
    role?: 'admin' | 'user'  // Optional, union type
}

function getUser(id: number): Promise<User> {
    return fetch(`/api/user/${id}`).then(r => r.json())
}

// Type vs Interface
type ID = string | number  // Union type
type Point = { x: number; y: number }  // Object type alias

// Generic types
function first<T>(arr: T[]): T {
    return arr[0]
}
first([1, 2, 3])      // TypeScript knows return type is number
first(['a', 'b', 'c'])  // TypeScript knows return type is string
```

---

# 13. Common JavaScript Patterns in Real Projects

---

## 13.1 State Management Pattern

```js
// Simple state management (before React, Redux etc.)
class StateManager {
    #state
    #listeners = new Set()

    constructor(initialState) {
        this.#state = initialState
    }

    getState() {
        return this.#state
    }

    setState(updater) {
        const prev = this.#state
        this.#state = typeof updater === 'function'
            ? updater(prev)
            : { ...prev, ...updater }

        // Notify all subscribers
        this.#listeners.forEach(listener => listener(this.#state, prev))
    }

    subscribe(listener) {
        this.#listeners.add(listener)
        // Return unsubscribe function
        return () => this.#listeners.delete(listener)
    }
}

// Usage
const store = new StateManager({ count: 0, user: null })

// Subscribe to changes
const unsub = store.subscribe((state) => {
    document.getElementById('count').textContent = state.count
})

// Update state
document.getElementById('inc').addEventListener('click', () => {
    store.setState(s => ({ count: s.count + 1 }))
})

// Unsubscribe when done
unsub()
```

---

## 13.2 Router Pattern

```js
// Simple client-side router (SPA routing)
class Router {
    #routes = {}
    #currentPath = ''

    constructor() {
        window.addEventListener('popstate', () => this.navigate(location.pathname))
    }

    add(path, handler) {
        this.#routes[path] = handler
        return this
    }

    navigate(path) {
        if (path !== this.#currentPath) {
            history.pushState({}, '', path)
            this.#currentPath = path
        }

        const handler = this.#routes[path] || this.#routes['*']
        if (handler) {
            handler()
        }
    }

    start() {
        this.navigate(location.pathname)
    }
}

// Usage
const router = new Router()
router
    .add('/', showHomePage)
    .add('/about', showAboutPage)
    .add('/contact', showContactPage)
    .add('*', show404Page)

router.start()

// Navigate programmatically
document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        router.navigate(e.currentTarget.href)
    })
})
```

---

## 13.3 API Service Layer

```js
// Centralized API service with error handling
class ApiService {
    #baseUrl
    #token

    constructor(baseUrl) {
        this.#baseUrl = baseUrl
    }

    setToken(token) {
        this.#token = token
    }

    #getHeaders() {
        const headers = { 'Content-Type': 'application/json' }
        if (this.#token) headers['Authorization'] = `Bearer ${this.#token}`
        return headers
    }

    async #request(endpoint, options = {}) {
        const url = this.#baseUrl + endpoint
        const response = await fetch(url, {
            headers: this.#getHeaders(),
            ...options
        })

        if (response.status === 401) throw new Error('Unauthorized')
        if (response.status === 404) throw new Error('Not found')
        if (!response.ok) throw new Error(`API Error: ${response.status}`)

        if (response.status === 204) return null  // No content
        return response.json()
    }

    get(endpoint) {
        return this.#request(endpoint)
    }

    post(endpoint, data) {
        return this.#request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    put(endpoint, data) {
        return this.#request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data)
        })
    }

    delete(endpoint) {
        return this.#request(endpoint, { method: 'DELETE' })
    }
}

// Usage
const api = new ApiService('https://api.example.com')
api.setToken(localStorage.getItem('token'))

const users = await api.get('/users')
const newUser = await api.post('/users', { name: 'Saksham', email: 'saksham@example.com' })
```

---

## 13.4 Component Pattern (Vanilla JS)

```js
// A simple component without any framework
class Component {
    constructor(selector, props = {}) {
        this.element = document.querySelector(selector)
        this.props = props
        this.state = {}
        this.init()
    }

    // Lifecycle methods
    init() {}          // Called on creation
    render() {}        // Return HTML string
    afterRender() {}   // Called after DOM update

    setState(updates) {
        this.state = { ...this.state, ...updates }
        this.update()
    }

    update() {
        this.element.innerHTML = this.render()
        this.afterRender()
    }
}

// Usage: Counter Component
class Counter extends Component {
    init() {
        this.state = { count: 0 }
        this.update()
    }

    render() {
        return `
            <div class="counter">
                <button id="dec">-</button>
                <span>${this.state.count}</span>
                <button id="inc">+</button>
            </div>
        `
    }

    afterRender() {
        this.element.querySelector('#inc').addEventListener('click', () => {
            this.setState({ count: this.state.count + 1 })
        })
        this.element.querySelector('#dec').addEventListener('click', () => {
            this.setState({ count: this.state.count - 1 })
        })
    }
}

const counter = new Counter('#app')
```

---

# Final Words

JavaScript is one of the most powerful and versatile programming languages in the world. It powers everything from interactive web pages to server-side APIs, mobile apps (React Native), desktop apps (Electron), and even IoT devices.

## Your JavaScript Learning Checklist

### Beginner Level
- [ ] Understand variables (const, let, var) and scope
- [ ] Know all 7 primitive data types
- [ ] Use arithmetic, comparison, and logical operators
- [ ] Handle type coercion and conversion
- [ ] Work with strings and template literals
- [ ] Use Math and Date objects
- [ ] Create and manipulate arrays
- [ ] Create and manipulate objects
- [ ] Write functions (declaration, expression, arrow)
- [ ] Use control flow (if/else, switch)
- [ ] Know truthy/falsy values
- [ ] Use loops (for, while, for...of, for...in)

### Intermediate Level
- [ ] Understand closures and the closure trap
- [ ] Use prototype and prototype chain
- [ ] Write classes with constructor, methods, extends, super
- [ ] Use static methods and properties
- [ ] Implement getters and setters
- [ ] Understand IIFE and when to use it
- [ ] Know call(), apply(), bind()
- [ ] Manipulate the DOM (select, modify, create, delete)
- [ ] Handle events (listeners, bubbling, delegation)
- [ ] Use higher-order array methods (map, filter, reduce)
- [ ] Destructure arrays and objects
- [ ] Use spread and rest operators

### Advanced Level
- [ ] Understand asynchronous JavaScript (event loop, call stack, queues)
- [ ] Work with Promises (create, chain, handle errors)
- [ ] Use async/await confidently
- [ ] Use the Fetch API for HTTP requests
- [ ] Handle errors properly with try/catch
- [ ] Work with ES Modules (import/export)
- [ ] Use Map and Set data structures
- [ ] Apply optional chaining (?.) and nullish coalescing (??)
- [ ] Understand and use closures for encapsulation
- [ ] Write performant code (debounce, throttle, memoize)
- [ ] Apply design patterns when appropriate

### Expert Level
- [ ] Work with generators and iterators
- [ ] Use Proxy and Reflect for meta-programming
- [ ] Understand JavaScript's memory model
- [ ] Profile and optimize performance
- [ ] Write and run tests (Jest, Vitest)
- [ ] Use TypeScript for type-safe JS
- [ ] Build with modern build tools (Vite, webpack)
- [ ] Understand security best practices (XSS, CSRF)
- [ ] Apply functional programming principles
- [ ] Contribute to open source JavaScript projects

---

*This README was created as part of the Chai aur Code JavaScript learning journey.*

*Author: Saksham | Teacher: Hitesh Choudhary*

*Last Updated: 2025*

*JavaScript — The Language of the Web*

---

# 14. Advanced Design Patterns in JavaScript

Design patterns are reusable solutions to commonly occurring problems in software design.

## 14.1 Creational Patterns

### Factory Pattern
Used for creating objects when the creation process is complex or you need to instantiate multiple objects with similar characteristics.

```javascript
class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'silver';
  }
}

class Truck {
  constructor(options) {
    this.state = options.state || 'used';
    this.wheelSize = options.wheelSize || 'large';
    this.color = options.color || 'blue';
  }
}

class VehicleFactory {
  createVehicle(options) {
    switch(options.vehicleType) {
      case 'car':
        return new Car(options);
      case 'truck':
        return new Truck(options);
      default:
        return null;
    }
  }
}

const factory = new VehicleFactory();
const myCar = factory.createVehicle({
  vehicleType: 'car',
  color: 'yellow',
  doors: 6
});
```

### Abstract Factory
Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

```javascript
function droidProducer(kind) {
  if (kind === 'battle') return battleDroidFactory;
  return pilotDroidFactory;
}

function battleDroidFactory() {
  return new B1();
}

function pilotDroidFactory() {
  return new Rx24();
}

class B1 {
  info() {
    return "B1 Battle Droid";
  }
}

class Rx24 {
  info() {
    return "RX-24 Pilot Droid";
  }
}
```

## 14.2 Structural Patterns

### Facade Pattern
Provides a simplified interface to a larger body of code, such as a class library.

```javascript
class CPU {
  freeze() { /* ... */ }
  jump(position) { /* ... */ }
  execute() { /* ... */ }
}

class Memory {
  load(position, data) { /* ... */ }
}

class HardDrive {
  read(lba, size) { /* ... */ }
}

// Facade
class ComputerFacade {
  constructor() {
    this.processor = new CPU();
    this.ram = new Memory();
    this.hd = new HardDrive();
  }

  start() {
    this.processor.freeze();
    this.ram.load(this.BOOT_ADDRESS, this.hd.read(this.BOOT_SECTOR, this.SECTOR_SIZE));
    this.processor.jump(this.BOOT_ADDRESS);
    this.processor.execute();
  }
}
```

### Proxy Pattern
Provides a surrogate or placeholder for another object to control access to it.

```javascript
class RealSubject {
  request() {
    console.log("RealSubject: Handling request.");
  }
}

class Proxy {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  checkAccess() {
    console.log("Proxy: Checking access prior to firing a real request.");
    return true;
  }

  logAccess() {
    console.log("Proxy: Logging the time of request.");
  }
}
```

## 14.3 Behavioral Patterns

### Observer Pattern
A subscription mechanism to notify multiple objects about any events that happen to the object they're observing.

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action);
    });
  }
}

class Observer {
  constructor(state) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch (action) {
      case 'INC':
        this.state = ++this.state;
        break;
      case 'DEC':
        this.state = --this.state;
        break;
      default:
        this.state = this.initialState;
    }
  }
}
```

### Strategy Pattern
Defines a family of algorithms, encapsulates each one, and makes them interchangeable.

```javascript
class ShoppingCart {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
    this.amount = 0;
  }

  checkout() {
    return this.discountStrategy(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
}

function guestStrategy(amount) {
  return amount;
}

function regularStrategy(amount) {
  return amount * 0.9;
}

function premiumStrategy(amount) {
  return amount * 0.8;
}

const cart = new ShoppingCart(regularStrategy);
cart.setAmount(100);
console.log(cart.checkout()); // 90
```

---

# 15. Testing and Debugging Strategies

## 15.1 Unit Testing with Jest

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// math.test.js
import { add, multiply } from './math';

describe('Math functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
```

## 15.2 Mocking and Spying

```javascript
// user.js
import axios from 'axios';

export class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

// user.test.js
import axios from 'axios';
import { Users } from './user';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  return Users.all().then(data => expect(data).toEqual(users));
});
```

## 15.3 Debugging Techniques

### Using the `debugger` statement
Placing `debugger;` in your code will pause execution when DevTools is open.

```javascript
function complexCalculation(data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    result += data[i] * 2;
    debugger; // Execution pauses here
  }
  return result;
}
```

### Performance Profiling
Use `console.time()` and `console.timeEnd()` to measure execution time.

```javascript
console.time('fetchData');
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.timeEnd('fetchData'); // Logs time taken
    console.log(data);
  });
```

---

# 16. Web Performance Optimization

## 16.1 Minimizing Reflows and Repaints

Reflows and repaints are expensive operations in the browser. Minimizing them improves performance.

```javascript
// BAD: Triggers multiple reflows
const list = document.getElementById('list');
for (let i = 0; i < 100; i++) {
  const item = document.createElement('li');
  item.textContent = `Item ${i}`;
  list.appendChild(item);
}

// GOOD: Use DocumentFragment
const list = document.getElementById('list');
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const item = document.createElement('li');
  item.textContent = `Item ${i}`;
  fragment.appendChild(item);
}
list.appendChild(fragment); // Single reflow
```

## 16.2 Efficient Event Handling

### Event Delegation
Instead of attaching event listeners to multiple child elements, attach a single listener to their parent.

```javascript
// BAD
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Button clicked');
  });
});

// GOOD
const container = document.getElementById('button-container');
container.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    console.log('Button clicked');
  }
});
```

### Debouncing and Throttling
Limit the rate at which a function fires.

```javascript
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.addEventListener('resize', debounce(() => {
  console.log('Resize complete');
}, 250));
```

## 16.3 Memory Management

### Avoiding Memory Leaks
Memory leaks occur when objects are no longer needed but are still referenced.

```javascript
// Example of a memory leak
let elements = [];
function addElement() {
  const el = document.createElement('div');
  document.body.appendChild(el);
  elements.push(el); // Retains reference even if removed from DOM
}

// Solution: Remove reference when element is removed
function removeElement(el) {
  document.body.removeChild(el);
  elements = elements.filter(e => e !== el);
}
```

### Using WeakMap and WeakSet
These structures hold weak references to objects, allowing them to be garbage collected if there are no other references.

```javascript
const cache = new WeakMap();

function processObject(obj) {
  if (!cache.has(obj)) {
    const result = heavyComputation(obj);
    cache.set(obj, result);
  }
  return cache.get(obj);
}
```

---

# 17. Security in JavaScript

## 17.1 Cross-Site Scripting (XSS)

XSS occurs when an application includes untrusted data in a web page without proper validation or escaping.

```javascript
// BAD: Vulnerable to XSS
const userInput = "<script>alert('XSS!')</script>";
document.getElementById('output').innerHTML = userInput;

// GOOD: Escaping user input
const userInput = "<script>alert('XSS!')</script>";
document.getElementById('output').textContent = userInput;
```

## 17.2 Cross-Site Request Forgery (CSRF)

CSRF is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.

**Mitigation Strategies:**
1. Use Anti-CSRF Tokens: Ensure state-changing requests include a secure random token.
2. SameSite Cookies: Set the `SameSite` attribute on cookies to `Strict` or `Lax`.

```javascript
// Setting a SameSite cookie
document.cookie = "session_id=12345; SameSite=Strict; Secure";
```

## 17.3 Content Security Policy (CSP)

CSP is an added layer of security that helps detect and mitigate certain types of attacks, including XSS and data injection attacks.

```html
<!-- Example CSP Header -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';">
```

---

# 18. Functional Programming in JavaScript

Functional programming is a declarative paradigm that emphasizes immutability, pure functions, and avoiding side effects.

## 18.1 Pure Functions

A pure function has no side effects and always returns the same output for the same input.

```javascript
// Impure function
let total = 0;
function add(amount) {
  total += amount; // Modifies external state
  return total;
}

// Pure function
function addPure(a, b) {
  return a + b; // No external dependencies, no side effects
}
```

## 18.2 Immutability

Instead of modifying existing objects or arrays, create new ones.

```javascript
const user = { name: 'Alice', age: 25 };

// BAD: Mutating
user.age = 26;

// GOOD: Creating a new object
const updatedUser = { ...user, age: 26 };
```

## 18.3 Higher-Order Functions

Functions that take other functions as arguments or return functions.

```javascript
const multiplyBy = multiplier => x => x * multiplier;

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

## 18.4 Function Composition

Combining multiple functions to produce a new function.

```javascript
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const toUpper = str => str.toUpperCase();
const exclaim = str => `${str}!`;

const shout = compose(exclaim, toUpper);

console.log(shout('hello')); // HELLO!
```

---

# 19. Advanced Asynchronous Patterns

## 19.1 Promise Combinators

JavaScript provides several methods for handling multiple promises.

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.reject('Error');
const p3 = new Promise(resolve => setTimeout(resolve, 100, 3));

// Promise.all: Waits for all to resolve, rejects if any reject
Promise.all([p1, p3]).then(console.log); // [1, 3]

// Promise.race: Settles as soon as the first promise settles
Promise.race([p1, p3]).then(console.log); // 1

// Promise.allSettled: Waits for all to settle, regardless of outcome
Promise.allSettled([p1, p2]).then(console.log);
// [{status: 'fulfilled', value: 1}, {status: 'rejected', reason: 'Error'}]

// Promise.any: Settles as soon as the first promise resolves
Promise.any([p2, p3]).then(console.log); // 3
```

## 19.2 Generators and Async/Await

Generators can be used to control asynchronous flow, which is how `async/await` was originally implemented under the hood.

```javascript
function* fetchUserData() {
  try {
    const user = yield fetch('/api/user').then(r => r.json());
    const posts = yield fetch(`/api/posts/${user.id}`).then(r => r.json());
    console.log(user, posts);
  } catch (error) {
    console.error(error);
  }
}

// A runner function is needed to execute the generator
function run(generatorObj) {
  const gen = generatorObj();
  
  function step(value) {
    const result = gen.next(value);
    if (result.done) return;
    
    result.value.then(val => step(val))
                 .catch(err => gen.throw(err));
  }
  
  step();
}

run(fetchUserData);
```

---

# 20. Conclusion and Further Learning

Congratulations on reaching the end of this comprehensive JavaScript guide! You've journeyed from the absolute basics to advanced, professional-grade concepts.

## 20.1 Next Steps in Your Journey

1. **Frameworks & Libraries:** Explore React, Vue, or Angular for front-end development.
2. **Backend Development:** Deep dive into Node.js, Express, and database integration.
3. **TypeScript:** Learn static typing to build robust, scalable applications.
4. **Tooling:** Master Webpack, Vite, Babel, and ESLint.
5. **Architecture:** Study Micro-frontends, Server-Side Rendering (SSR), and Static Site Generation (SSG).

## 20.2 Recommended Resources

*   **MDN Web Docs:** The ultimate reference for web technologies.
*   **JavaScript.info:** The Modern JavaScript Tutorial.
*   **You Don't Know JS:** A book series delving deep into the core mechanisms of the language.
*   **Chai aur Code:** Hitesh Choudhary's excellent video tutorials.

Remember, the best way to master JavaScript is to build projects. Code every day, break things, fix them, and keep learning!

*Happy Coding!* 🚀

---

# 21. JavaScript Glossary

A comprehensive dictionary of common JavaScript terms and concepts you will encounter in your developer journey.

### A
- **API (Application Programming Interface):** A set of rules and protocols for building and interacting with software applications.
- **Argument:** The actual value passed to a function when it is invoked.
- **Array:** An ordered, zero-indexed collection of values stored in a single variable.
- **Arrow Function:** A concise syntax for writing function expressions, introduced in ES6, that does not bind its own `this` context.
- **Asynchronous:** Operations that occur independently of the main program flow, allowing the program to continue executing while waiting for the operation to complete.

### B
- **Block Scope:** The scope of variables declared with `let` or `const` inside a block `{}`. They are only accessible within that block.
- **Boolean:** A primitive data type that can only have two values: `true` or `false`.
- **Bubbling (Event Bubbling):** An event propagation mechanism where an event triggers on the deepest target element and then successively triggers on its ancestors up to the document root.

### C
- **Callback:** A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- **Class:** A template for creating objects (a blueprint). Introduced in ES6 as syntactic sugar over prototype-based inheritance.
- **Closure:** A function that retains access to variables from its lexical scope even after the outer function has finished executing.
- **Coercion:** The automatic or implicit conversion of values from one data type to another (e.g., string to number).
- **Constructor:** A special method within a class used for creating and initializing an object instance.

### D
- **DOM (Document Object Model):** The programming interface for HTML and XML documents, representing the page so that programs can change the document structure, style, and content.
- **Destructuring:** A syntax that allows unpacking values from arrays, or properties from objects, into distinct variables.
- **Debounce:** A programming practice used to ensure that time-consuming tasks do not fire so often, making them stall the performance of the web page.

### E
- **ES6 (ECMAScript 2015):** A major update to JavaScript that introduced let/const, arrow functions, classes, promises, and much more.
- **Event Loop:** A process that waits for the Call Stack to be clear before pushing callbacks from the Task Queue to the Call Stack.
- **Expression:** Any valid unit of code that resolves to a value.

### F
- **Factory Function:** Any function which is not a class or constructor that returns a (presumably new) object.
- **Falsy:** A value that translates to false when evaluated in a Boolean context. The falsy values are `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`.
- **First-Class Function:** A language feature where functions are treated like any other variable (can be passed as arguments, returned, or assigned).

### G
- **Garbage Collection:** Automatic memory management that frees up memory occupied by objects that are no longer referenced in the application.
- **Getter:** A method that gets the value of a specific property.
- **Global Scope:** Variables defined outside any function, block, or module.

### H
- **Higher-Order Function:** A function that accepts another function as an argument, returns a function, or both.
- **Hoisting:** A JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

### I
- **IIFE (Immediately Invoked Function Expression):** A JavaScript function that runs as soon as it is defined.
- **Immutability:** The concept where an object's state cannot be modified after it is created.
- **Instance:** A concrete object created from a class or constructor function.
- **Iterable:** An object that allows its properties to be looped over, specifically utilizing the `Symbol.iterator` protocol (like arrays and strings).

### J
- **JSON (JavaScript Object Notation):** A lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.

### K
- **Keyword:** Reserved words in JavaScript that have special meaning (e.g., `let`, `if`, `return`).

### L
- **Lexical Scope:** Scope defined by the physical placement of variables and blocks in the written code.
- **Literal:** Fixed values directly represented in the source code (e.g., `5`, `"hello"`, `[1, 2, 3]`).

### M
- **Method:** A function that is a property of an object.
- **Module:** An independent piece of code that groups related functions, variables, and objects.
- **Mutation:** Changing the state or properties of an existing object or array.

### N
- **NaN (Not-A-Number):** A special numeric value indicating that an arithmetic operation yielded an invalid result.
- **Null:** A primitive value representing the intentional absence of any object value.

### O
- **Object:** A standalone entity, with properties and type. A collection of key-value pairs.
- **Operand:** The values that an operator acts upon.
- **Operator:** A mathematical symbol that produces a result based on two values (or variables).

### P
- **Parameter:** The named variables inside the parentheses of a function definition.
- **Polyfill:** A piece of code that provides the technology that you, the developer, expect the browser to provide natively.
- **Primitive:** Data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
- **Promise:** An object representing the eventual completion or failure of an asynchronous operation.
- **Prototype:** The mechanism by which JavaScript objects inherit features from one another.

### R
- **Reference Type:** Objects, arrays, and functions. They are stored in memory and variables hold a reference (pointer) to them, not the actual data.
- **REST Parameter:** Allows a function to accept an indefinite number of arguments as an array.

### S
- **Scope:** The current context of execution in which values and expressions are "visible" or can be referenced.
- **Setter:** A method that sets the value of a specific property.
- **Spread Syntax:** Allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected.
- **Strict Mode:** A way to opt in to a restricted variant of JavaScript, which eliminates some silent errors by changing them to throw errors.
- **Synchronous:** Code that executes from top to bottom, one line at a time, blocking the execution of the next line until the current line is finished.

### T
- **Template Literal:** String literals allowing embedded expressions, enclosed by the backtick (\`) character.
- **Temporal Dead Zone (TDZ):** The period between entering scope and being declared where variables declared with `let` and `const` cannot be accessed.
- **Truthy:** A value that translates to true when evaluated in a Boolean context. Everything that is not falsy is truthy.

### U
- **Undefined:** A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.

### V
- **Variable:** A named container for storing data values.

### W
- **Web API:** Application programming interfaces provided by the browser (like DOM, setTimeout, fetch) that are not part of the core JavaScript language.

---

# 22. JavaScript Coding Exercises

To truly master JavaScript, you must write code. Here are several exercises designed to test your understanding of the concepts covered in this guide.

## Exercise 1: String Reversal (Beginner)
**Task:** Write a function that takes a string and returns the string reversed. Do not use the built-in `reverse()` method immediately; try a loop first.

```javascript
// Solution using a loop
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Solution using built-in methods
const reverseStrFast = (str) => str.split("").reverse().join("");
```

## Exercise 2: Palindrome Checker (Beginner)
**Task:** Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

```javascript
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversed;
}
```

## Exercise 3: Array Chunking (Intermediate)
**Task:** Write a function that divides an array into many smaller arrays, each with a specified maximum length.

```javascript
function chunkArray(array, size) {
  const chunked = [];
  let index = 0;
  
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  
  return chunked;
}

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); 
// [[1, 2], [3, 4], [5, 6], [7]]
```

## Exercise 4: Anagrams (Intermediate)
**Task:** Check if two provided strings are anagrams of each other.

```javascript
function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}
```

## Exercise 5: FizzBuzz (Beginner)
**Task:** Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

```javascript
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
```

## Exercise 6: Fibonacci Sequence (Advanced - Memoization)
**Task:** Print out the n-th entry in the fibonacci series. Optimize it using memoization.

```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
```

## Exercise 7: Event Delegation Implementation (Advanced)
**Task:** Write a function that acts as a generic event delegator.

```javascript
function delegateEvent(parentElement, eventType, selector, callback) {
  parentElement.addEventListener(eventType, function(event) {
    let targetElement = event.target;
    
    while (targetElement && targetElement !== parentElement) {
      if (targetElement.matches(selector)) {
        callback.call(targetElement, event);
        break;
      }
      targetElement = targetElement.parentNode;
    }
  });
}

// Usage:
// delegateEvent(document.getElementById('list'), 'click', 'li.item', function(e) {
//   console.log('Clicked on', this.textContent);
// });
```

---

# Conclusion

You now hold the keys to JavaScript. The journey from writing your first `console.log("Hello World")` to understanding the intricacies of the Event Loop, Prototypes, and Closures is immense. 

Review this guide often, practice the exercises, and most importantly, build things.

*End of Comprehensive JavaScript Guide.*


