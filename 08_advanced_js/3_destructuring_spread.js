// =====================================================
// DESTRUCTURING ASSIGNMENT & SPREAD/REST OPERATORS
// =====================================================
// ES6 se aaye ye modern features code ko concise aur 
// readable banate hain

// ─────────────────────────────────────────────────
// 1. ARRAY DESTRUCTURING
// ─────────────────────────────────────────────────
// Array ke elements ko variables me unpack karna

const [first, second, ...rest] = [1, 2, 3, 4, 5]
console.log(first)   // 1
console.log(second)  // 2
console.log(rest)    // [3, 4, 5]  ← rest operator

// Skip elements
const [a, , c] = [10, 20, 30]
console.log(a)  // 10
console.log(c)  // 30 (20 skip hua)

// Default values
const [x = 0, y = 0, z = 0] = [1, 2]
console.log(z)  // 0 (default, kyunki provide nahi hua)

// Swap variables without temp variable!
let num1 = 1, num2 = 2
;[num1, num2] = [num2, num1]
console.log(num1)  // 2
console.log(num2)  // 1

// ─────────────────────────────────────────────────
// 2. OBJECT DESTRUCTURING
// ─────────────────────────────────────────────────
// Object ki properties ko variables me unpack karna

const user = {
    name: "Saksham",
    age: 20,
    city: "Jaipur",
    email: "saksham@gmail.com"
}

// Basic destructuring
const { name, age } = user
console.log(name)  // "Saksham"
console.log(age)   // 20

// Rename while destructuring
const { name: myName, city: myCity } = user
console.log(myName)   // "Saksham"
console.log(myCity)   // "Jaipur"

// Default values
const { phone = "Not provided", email } = user
console.log(phone)  // "Not provided" (property exist nahi thi)
console.log(email)  // "saksham@gmail.com"

// Nested object destructuring
const profile = {
    username: "saksham123",
    address: {
        street: "MG Road",
        pin: "302001"
    }
}

const { username, address: { street, pin } } = profile
console.log(username)  // "saksham123"
console.log(street)    // "MG Road"
console.log(pin)       // "302001"

// Destructuring in function parameters!
function displayUser({ name, age, city = "Unknown" }) {
    console.log(`${name} (${age}) from ${city}`)
}
displayUser(user)  // "Saksham (20) from Jaipur"

// ─────────────────────────────────────────────────
// 3. SPREAD OPERATOR (...)
// ─────────────────────────────────────────────────
// Array/Object ki saari values ko "spread" (expand) karta hai

// Arrays spread karna
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const merged = [...arr1, ...arr2]
console.log(merged)  // [1, 2, 3, 4, 5, 6]

// Objects spread karna
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const mergedObj = { ...obj1, ...obj2 }
console.log(mergedObj)  // { a:1, b:2, c:3, d:4 }

// Object copy with override
const updatedUser = { ...user, age: 21, email: "new@email.com" }
console.log(updatedUser)
// Original user unchanged, updatedUser has new age and email

// Array copy (shallow)
const original = [1, 2, 3]
const copy = [...original]
copy.push(4)
console.log(original)  // [1, 2, 3] — unchanged!
console.log(copy)      // [1, 2, 3, 4]

// Function call with spread
Math.max(1, 5, 3, 2)           // Normal call
Math.max(...[1, 5, 3, 2])      // With spread — same result: 5

// ─────────────────────────────────────────────────
// 4. REST PARAMETER (...)
// ─────────────────────────────────────────────────
// Function ke remaining arguments collect karta hai
// Note: REST and SPREAD same syntax (...) but different use

// Rest collects, Spread expands

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0)
}
console.log(sum(1, 2, 3))        // 6
console.log(sum(1, 2, 3, 4, 5)) // 15

// Mix of regular params and rest
function logItems(first, second, ...rest) {
    console.log("First:", first)
    console.log("Second:", second)
    console.log("Rest:", rest)
}
logItems("a", "b", "c", "d", "e")
// First: a
// Second: b
// Rest: ["c", "d", "e"]
