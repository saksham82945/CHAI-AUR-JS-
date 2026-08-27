// =====================================================
// OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT
// =====================================================
// OOP is a programming paradigm based on the concept of "objects".
// JavaScript is a prototype-based object-oriented language.

// ─────────────────────────────────────────────────
// 1. OBJECT LITERALS
// ─────────────────────────────────────────────────
// The most basic way to create an object in JS. It is a literal representation of an object.
const user = {
    username: "saksham",
    loginCount: 8,
    signedIn: true,

    // Methods (functions inside objects)
    getUserDetails: function(){
        console.log("Got user details from database");
        
        // 'this' refers to the CURRENT context (the object itself).
        // If we just write 'username', JS will look for a global variable.
        console.log(`Username: ${this.username}`); 
        console.log(this); // Prints the whole object
    }
}

// console.log(user.username)
// user.getUserDetails()

// What is 'this' in the global context?
// - In a browser, console.log(this) gives the Window object.
// - In Node.js environment, console.log(this) gives an empty object {}.

// ─────────────────────────────────────────────────
// 2. CONSTRUCTOR FUNCTIONS
// ─────────────────────────────────────────────────
// Object literals are great for ONE object. What if we need many?
// Writing literal objects 10 times is bad. Enter Constructor Functions!

// Example of built-in constructors:
// const promiseOne = new Promise()
// const date = new Date()

// Creating our own constructor function (Convention: Capitalize first letter)
function User(username, loginCount, isLoggedIn){
    // this.property = parameter_value
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this; // (Implicitly happens when called with 'new')
}

// ─────────────────────────────────────────────────
// THE 'new' KEYWORD MAGICAL STEPS
// ─────────────────────────────────────────────────
// 1. Creates a brand new empty object: {}
// 2. A constructor function is called because of the 'new' keyword.
// 3. 'this' keyword is injected/bound to the newly created object.
// 4. Returns the object automatically.

const userOne = new User("saksham", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// If we DID NOT use 'new':
// const userOne = User("saksham", 12, true);
// const userTwo = User("ChaiAurCode", 11, false); 
// userTwo would OVERWRITE userOne because they both refer to the global object!

console.log(userOne.constructor); // Returns the function reference [Function: User]
// userOne.greeting();
// userTwo.greeting();
