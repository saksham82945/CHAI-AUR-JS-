// =====================================================
// CONTROL FLOW - IF / ELSE STATEMENTS
// =====================================================
// JavaScript executes code line by line (top to bottom).
// Control flow allows us to skip or repeat blocks of code based on conditions.

// ─────────────────────────────────────────────────
// BASIC IF STATEMENT
// ─────────────────────────────────────────────────
const isUserloggedIn = true
const temperature = 41

// Syntax: if (condition) { code to run if condition is true }
// The condition is ALWAYS evaluated to a boolean (true/false)
if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute"); // This runs regardless of the condition

// ─────────────────────────────────────────────────
// COMPARISON OPERATORS
// ─────────────────────────────────────────────────
// <  : Less than
// >  : Greater than
// <= : Less than or equal to
// >= : Greater than or equal to
// == : Equal to (loose equality, checks value, NOT type. e.g. "2" == 2 is true)
// != : Not equal to
// === : Strict equality (checks value AND type. e.g. "2" === 2 is false)
// !== : Strict inequality

// Example of ===
// if (2 === "2") { console.log("executed"); } // Will not execute

// ─────────────────────────────────────────────────
// BLOCK SCOPE WITH IF STATEMENTS
// ─────────────────────────────────────────────────
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);
// ERROR: 'power' is not defined here because 'let' is block-scoped!
// If we used 'var power = "fly"', it would work here, but using 'var' is bad practice.

// ─────────────────────────────────────────────────
// IMPLICIT SCOPE (Short-hand IF)
// ─────────────────────────────────────────────────
const balance = 1000

// Short-hand for a single line of code (NO curly braces {})
// Good for very simple conditions
// if (balance > 500) console.log("test");

// You can chain multiple lines with commas, BUT it is highly unreadable and BAD practice.
// DO NOT do this:
// if (balance > 500) console.log("test"), console.log("test2");

// ─────────────────────────────────────────────────
// IF / ELSE IF / ELSE (Multiple Conditions)
// ─────────────────────────────────────────────────
// Used when you have multiple specific cases to check.
// It stops checking as soon as it finds the FIRST true condition.

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

// ─────────────────────────────────────────────────
// LOGICAL OPERATORS (AND &&, OR ||, NOT !)
// ─────────────────────────────────────────────────

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// && (Logical AND): ALL conditions must be true
if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

// || (Logical OR): AT LEAST ONE condition must be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// ! (Logical NOT): Reverses the boolean value
// if (!userLoggedIn) { console.log("Please log in"); }