// =====================================================
// IIFE — Immediately Invoked Function Expression
// =====================================================
// IIFE ek function hai jo declare hote hi turant execute hota hai
//
// Purpose:
// 1. Global scope pollution avoid karna
//    (variables IIFE ke andar hi rahenge)
// 2. Initialization code ke liye (DB connection, config)
// 3. Private variables/functions create karna
// 4. Avoid naming conflicts
//
// Syntax: (function definition)();
//          ↑ wrap in ()      ↑ invoke immediately
//
// IMPORTANT: Semicolon (;) dono IIFE ke beech lagana hota hai
//            warna JavaScript unhe ek statement samajh sakta hai

// ─────────────────────────────────────────────────
// NAMED IIFE (with a name for debugging purposes)
// ─────────────────────────────────────────────────
(function chai() {
    // Ye code immediately execute hoga
    console.log(`DB Connected`)

    // Ye variables sirf yahan accessible hain
    const secret = "internal config"
    // console.log(secret) — bahar se access nahi kar sakte!

})();  // ← semicolon — next IIFE se alag karne ke liye zaroori!

// ─────────────────────────────────────────────────
// ANONYMOUS IIFE (no name)
// ─────────────────────────────────────────────────
(function() {
    console.log("Anonymous IIFE executed!")
})();

// ─────────────────────────────────────────────────
// ARROW FUNCTION IIFE (with parameters)
// ─────────────────────────────────────────────────
((name) => {
    // 'name' argument immediately pass ho raha hai
    console.log(`DB Database 2 ${name}`)
})('hitesh')  // ← 'hitesh' argument passed here

// ─────────────────────────────────────────────────
// IIFE WITH RETURN VALUE
// ─────────────────────────────────────────────────
const result = (function() {
    const x = 10
    const y = 20
    return x + y  // Return value capture ho sakti hai
})()

console.log(result)  // 30

// ─────────────────────────────────────────────────
// REAL-WORLD IIFE USE CASE
// ─────────────────────────────────────────────────
// Database initialization example:
const dbConfig = (function() {
    // Private variables — koi bahar se nahi dekh sakta
    const host = "localhost"
    const port = 5432
    const dbName = "myApp"

    // Return sirf jo expose karna hai
    return {
        connectionString: `${host}:${port}/${dbName}`,
        connect: function() {
            console.log("Connected to DB!")
        }
    }
})()

console.log(dbConfig.connectionString)  // "localhost:5432/myApp"
dbConfig.connect()                      // "Connected to DB!"
// console.log(dbConfig.host)          // undefined — private!
