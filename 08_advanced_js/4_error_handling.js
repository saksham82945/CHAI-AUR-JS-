// =====================================================
// ERROR HANDLING — try, catch, finally, throw
// =====================================================
// Errors ko gracefully handle karna taaki application
// crash na ho aur user ko proper message mile

// ─────────────────────────────────────────────────
// 1. BASIC try...catch
// ─────────────────────────────────────────────────
// try block — code jisme error ho sakta hai
// catch block — error hone par execute hoga
// finally block — hamesha execute hoga (success ya error)

try {
    // Ye code run hoga
    const result = 10 / 0
    console.log(result)  // Infinity (no error actually!)
    
    // Ye error throw karega
    const obj = null
    console.log(obj.property)  // TypeError!
    
} catch (error) {
    // Error object ke properties:
    console.log("Error name:", error.name)       // TypeError
    console.log("Error message:", error.message) // Cannot read properties of null
    console.log("Error stack:", error.stack)     // Stack trace
    
} finally {
    // Ye HAMESHA chalega — whether error hua ya nahi
    console.log("This always runs — cleanup code here")
}

// ─────────────────────────────────────────────────
// 2. THROWING CUSTOM ERRORS
// ─────────────────────────────────────────────────
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!")  // Custom error
    }
    return a / b
}

try {
    console.log(divide(10, 2))   // 5
    console.log(divide(10, 0))   // Throws error!
} catch (e) {
    console.log("Caught:", e.message)  // "Cannot divide by zero!"
}

// ─────────────────────────────────────────────────
// 3. BUILT-IN ERROR TYPES
// ─────────────────────────────────────────────────
// JavaScript me kai built-in error types hain:

// SyntaxError — Code galat syntax
// let x = {  // Missing closing brace — SyntaxError

// ReferenceError — Variable exist nahi karta
try {
    console.log(undeclaredVariable)  // ReferenceError
} catch (e) {
    console.log(e.name)  // ReferenceError
}

// TypeError — Wrong type par operation
try {
    null.property  // TypeError
} catch (e) {
    console.log(e.name)  // TypeError
}

// RangeError — Value out of valid range
try {
    const arr = new Array(-1)  // RangeError
} catch (e) {
    console.log(e.name)  // RangeError
}

// ─────────────────────────────────────────────────
// 4. CUSTOM ERROR CLASSES
// ─────────────────────────────────────────────────
class ValidationError extends Error {
    constructor(message, field) {
        super(message)           // Parent Error ka constructor call
        this.name = "ValidationError"
        this.field = field       // Extra property
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.name = "NetworkError"
        this.statusCode = statusCode
    }
}

// Using custom errors
function validateEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError("Invalid email format", "email")
    }
    return true
}

try {
    validateEmail("invalidemail.com")
} catch (e) {
    if (e instanceof ValidationError) {
        console.log(`Validation failed on field '${e.field}': ${e.message}`)
    } else {
        console.log("Unknown error:", e.message)
    }
}

// ─────────────────────────────────────────────────
// 5. ERROR HANDLING WITH ASYNC CODE
// ─────────────────────────────────────────────────

// With Promises
fetch('https://invalid-url.com')
    .then(response => response.json())
    .catch(error => {
        console.log("Network error:", error.message)
    })

// With async/await (cleaner)
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.com')
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Async error:", error.message)
        return null  // Graceful fallback
    } finally {
        console.log("Fetch attempt completed")
    }
}

// ─────────────────────────────────────────────────
// BEST PRACTICES
// ─────────────────────────────────────────────────
// 1. Sirf zaroori code ko try me rakho
// 2. Errors ko silently swallow mat karo — log karo!
// 3. Custom error classes use karo for better error types
// 4. finally me cleanup code raho (DB connections close, etc.)
// 5. Production me errors ko monitoring service ko send karo
