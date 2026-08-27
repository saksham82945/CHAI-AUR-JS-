// =====================================================
// CLOSURES — Advanced JavaScript Concept
// =====================================================
// Closure ek function hai jo apne outer scope ke
// variables ko "yaad" rakhta hai, chahe outer function
// execute ho chuki ho.
//
// Simple Definition:
// "Function + uske outer scope ka access = Closure"

// ─────────────────────────────────────────────────
// BASIC CLOSURE EXAMPLE
// ─────────────────────────────────────────────────
function outer() {
    let count = 0  // Ye variable "closed over" hai

    function inner() {
        count++           // inner() 'count' ko access kar sakta hai
        return count      // even after outer() finish ho chuki ho
    }

    return inner  // inner function ko return kar rahe hain
}

const counter = outer()  // outer() runs, inner function milta hai
console.log(counter())   // 1
console.log(counter())   // 2
console.log(counter())   // 3 — count persist karta hai!

// ─────────────────────────────────────────────────
// PRACTICAL EXAMPLE — Factory Function
// ─────────────────────────────────────────────────
function makeMultiplier(multiplier) {
    // 'multiplier' ko close kar liya hai
    return function(number) {
        return number * multiplier
    }
}

const double = makeMultiplier(2)
const triple = makeMultiplier(3)

console.log(double(5))   // 10
console.log(triple(5))   // 15
console.log(double(10))  // 20

// ─────────────────────────────────────────────────
// CLOSURE FOR DATA PRIVACY
// ─────────────────────────────────────────────────
// Closures allow "private" variables
function createBankAccount(initialBalance) {
    let balance = initialBalance  // Private — direct access nahi ho sakta

    return {
        deposit: function(amount) {
            balance += amount
            console.log(`Deposited ₹${amount}. Balance: ₹${balance}`)
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log("Insufficient funds!")
                return
            }
            balance -= amount
            console.log(`Withdrew ₹${amount}. Balance: ₹${balance}`)
        },
        getBalance: function() {
            return balance
        }
    }
}

const myAccount = createBankAccount(1000)
myAccount.deposit(500)   // Deposited ₹500. Balance: ₹1500
myAccount.withdraw(200)  // Withdrew ₹200. Balance: ₹1300
console.log(myAccount.getBalance())  // 1300
// console.log(myAccount.balance)    // undefined — private access nahi!

// ─────────────────────────────────────────────────
// CLOSURE IN LOOPS — Common Interview Trap!
// ─────────────────────────────────────────────────

// Problem with var (all print 5, not 0,1,2,3,4)
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)  // Prints 5,5,5,5,5 (all same!)
    }, 100)
}
// Because var is function-scoped — single 'i' shared by all callbacks

// Solution with let (each iteration gets its own 'i')
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)  // Prints 0,1,2,3,4 (correct!)
    }, 100)
}
// Because let is block-scoped — new 'i' for each iteration

// Solution with IIFE (works with var too)
for (var i = 0; i < 5; i++) {
    (function(capturedI) {
        setTimeout(function() {
            console.log(capturedI)  // Prints 0,1,2,3,4
        }, 100)
    })(i)
}
