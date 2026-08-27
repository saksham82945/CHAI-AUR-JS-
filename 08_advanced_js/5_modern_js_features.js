// =====================================================
// OPTIONAL CHAINING, NULLISH COALESCING, & MODERN JS
// =====================================================
// ES2020+ ke modern features jo daily development me
// bahut kaam aate hain

// ─────────────────────────────────────────────────
// 1. OPTIONAL CHAINING (?.)
// ─────────────────────────────────────────────────
// Deeply nested properties access karte waqt
// agar koi intermediate value null/undefined ho
// to error nahi throw hogi — sirf undefined return hoga
//
// Old way (multiple checks zaroori the):
// const name = user && user.profile && user.profile.name
//
// New way (optional chaining):
// const name = user?.profile?.name

const user = {
    name: "Saksham",
    profile: {
        age: 20,
        address: {
            city: "Jaipur"
        }
    }
}

// Access deeply nested property
console.log(user?.profile?.address?.city)  // "Jaipur"
console.log(user?.contact?.phone)          // undefined (no error!)
console.log(user?.profile?.name?.toUpperCase()) // undefined (no error!)

// Without optional chaining:
// console.log(user.contact.phone)  // TypeError: Cannot read property of undefined!

// Method call with optional chaining
console.log(user?.getName?.())  // undefined (method doesn't exist, no error!)

// Array access
const users = [{ name: "Saksham" }, { name: "Hitesh" }]
console.log(users?.[0]?.name)   // "Saksham"
console.log(users?.[5]?.name)   // undefined (index 5 doesn't exist)

// ─────────────────────────────────────────────────
// 2. OPTIONAL CHAINING + NULLISH COALESCING
// ─────────────────────────────────────────────────
// These two are often used together for safe defaults

const config = {
    database: {
        port: 5432
    }
}

// If port exists, use it. Otherwise default to 3000
const port = config?.database?.port ?? 3000
console.log(port)  // 5432

// If a missing property, use default
const timeout = config?.server?.timeout ?? 5000
console.log(timeout)  // 5000 (server doesn't exist)

// ─────────────────────────────────────────────────
// 3. LOGICAL ASSIGNMENT OPERATORS (ES2021)
// ─────────────────────────────────────────────────

// ||= (Logical OR Assignment) — assign only if currently falsy
let a = null
a ||= "default value"
console.log(a)  // "default value"

let b = "existing"
b ||= "default value"
console.log(b)  // "existing" (already truthy, no change)

// &&= (Logical AND Assignment) — assign only if currently truthy
let c = "hello"
c &&= c.toUpperCase()
console.log(c)  // "HELLO"

let d = null
d &&= "something"
console.log(d)  // null (falsy, no assignment)

// ??= (Nullish Assignment) — assign only if null/undefined
let e = null
e ??= "default"
console.log(e)  // "default"

let f = 0
f ??= "default"
console.log(f)  // 0 (0 is not null/undefined, no change)

// ─────────────────────────────────────────────────
// 4. OBJECT.ENTRIES, KEYS, VALUES
// ─────────────────────────────────────────────────

const course = {
    name: "JavaScript",
    instructor: "Hitesh",
    price: 999,
    students: 50000
}

// Object.entries() — [key, value] pairs ke saath iterate
for (const [key, value] of Object.entries(course)) {
    console.log(`${key}: ${value}`)
}

// Object.keys() — sirf keys
const keys = Object.keys(course)
console.log(keys)  // ["name", "instructor", "price", "students"]

// Object.values() — sirf values
const values = Object.values(course)
console.log(values)  // ["JavaScript", "Hitesh", 999, 50000]

// ─────────────────────────────────────────────────
// 5. TEMPLATE LITERALS (Advanced)
// ─────────────────────────────────────────────────

// Multi-line strings
const multiLine = `
    Hello World!
    This is a multi-line string.
    No need for \\n characters.
`

// Expressions inside ${}
const price = 999
const discount = 0.1
console.log(`Original: ₹${price}, Discounted: ₹${price * (1 - discount)}`)
// "Original: ₹999, Discounted: ₹899.1"

// Tagged Templates (Advanced)
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `[${values[i]}]` : '')
    }, '')
}

const name = "Saksham"
const age = 20
const tagged = highlight`Hello ${name}, you are ${age} years old`
console.log(tagged)
// "Hello [Saksham], you are [20] years old"
