// =====================================================
// PROMISES — Asynchronous JavaScript
// =====================================================
// Promise ek object hai jo ek future value ko represent karta hai
// (jo abhi available nahi hai, lekin baad me milegi)
//
// Real-life analogy:
// Jaise restaurant me order karte ho — tumhe turant khana nahi milta
// Waiter ek "promise" deta hai ki khana aayega.
// Either: khana aata hai (resolve) ya nahi aata (reject)
//
// Promise ke 3 states hain:
// 1. PENDING   — Initial state, abhi complete nahi hua
// 2. FULFILLED — Operation successfully complete hua (resolve called)
// 3. REJECTED  — Operation fail hua (reject called)

// ─────────────────────────────────────────────────
// BASIC PROMISE CREATION
// ─────────────────────────────────────────────────
// new Promise(executor) — executor turant run hota hai
// executor function do arguments leta hai: resolve, reject

const promiseOne = new Promise(function(resolve, reject) {
    // Async task simulate karna (e.g., DB call, API call)
    setTimeout(function() {
        console.log('Async task is completed')
        resolve()  // Promise ko fulfilled state me le jao
    }, 1000)
})

// .then() — Promise fulfill hone par chalega
promiseOne.then(function() {
    console.log("Promise Consumed")
})

// ─────────────────────────────────────────────────
// PROMISE DIRECTLY CHAIN KARNA
// ─────────────────────────────────────────────────
// Variable me store karne ki zaroorat nahi
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved")
})

// ─────────────────────────────────────────────────
// PROMISE WITH DATA (resolve me data pass karna)
// ─────────────────────────────────────────────────
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // resolve me data pass karo — .then() me milega
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function(user) {
    // user = { username: "Chai", email: "chai@example.com" }
    console.log(user)
})

// ─────────────────────────────────────────────────
// PROMISE CHAINING + ERROR HANDLING
// ─────────────────────────────────────────────────
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false  // true karo to reject test karo

        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
    .then((user) => {
        // .then() me data milta hai
        console.log(user)
        return user.username  // Ye value next .then() ko milegi
    })
    .then((username) => {
        console.log(username)  // "hitesh"
    })
    .catch(function(error) {
        // .catch() kisi bhi rejection ko pakad leta hai chain me
        console.log(error)
    })
    .finally(() => {
        // .finally() hamesha run hoga — success ya reject koi bhi ho
        console.log("The promise is either resolved or rejected")
    })

// ─────────────────────────────────────────────────
// ASYNC/AWAIT — Promise ka cleaner syntax
// ─────────────────────────────────────────────────
// async function hamesha ek Promise return karta hai
// await keyword sirf async function ke andar kaam karta hai
// await execution rok deta hai jab tak Promise resolve na ho

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        // await Promise resolve hone ka wait karta hai
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        // Rejection yahan pakda jayega
        console.log(error)
    }
}
consumePromiseFive()

// ─────────────────────────────────────────────────
// FETCH API WITH async/await
// ─────────────────────────────────────────────────
// fetch() browser ka built-in API hai HTTP requests ke liye

async function getAllUsers() {
    try {
        // Step 1: HTTP request send karo
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        // Step 2: Response body ko JSON me convert karo
        const data = await response.json()

        // Step 3: Data use karo
        console.log(data)
    } catch (error) {
        // Network errors ya JSON parse errors yahan handle honge
        console.log("Error:", error)
    }
}
getAllUsers()

// ─────────────────────────────────────────────────
// FETCH API WITH PROMISE CHAINING (old style)
// ─────────────────────────────────────────────────
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()  // Response ko JSON me convert karo
    })
    .then((data) => {
        console.log(data)       // Final data
    })
    .catch((error) => {
        console.log(error)      // Error handle karo
    })

// ─────────────────────────────────────────────────
// PROMISE UTILITY METHODS
// ─────────────────────────────────────────────────

// Promise.all() — Saari promises complete hone ka wait
// Agar koi bhi reject ho to turant reject kar deta hai
const p1 = Promise.resolve("First")
const p2 = Promise.resolve("Second")
const p3 = Promise.resolve("Third")

Promise.all([p1, p2, p3]).then((results) => {
    console.log(results)  // ["First", "Second", "Third"]
})

// Promise.allSettled() — Saari complete hone ka wait
// Reject hone par bhi wait karta hai (unlike Promise.all)
Promise.allSettled([p1, p2, Promise.reject("Error!")]).then((results) => {
    console.log(results)
    // [
    //   {status: "fulfilled", value: "First"},
    //   {status: "fulfilled", value: "Second"},
    //   {status: "rejected", reason: "Error!"}
    // ]
})

// Promise.race() — Sabse pehle complete hone wali wins
Promise.race([p1, p2, p3]).then((first) => {
    console.log(first)  // "First" (jo sabse pehle resolve hui)
})
