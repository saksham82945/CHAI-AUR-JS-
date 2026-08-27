// =====================================================
// FUNCTIONS ARE OBJECTS IN JAVASCRIPT
// =====================================================
// In JavaScript, everything is technically an object.
// Even arrays and functions are objects at the end of the day.

// ─────────────────────────────────────────────────
// PROVING FUNCTIONS ARE OBJECTS
// ─────────────────────────────────────────────────
function multiplyBy5(num){
    return num * 5
}

// Since multiplyBy5 is technically an object, we can add properties to it!
multiplyBy5.power = 2

console.log(multiplyBy5(5));         // Output: 25
console.log(multiplyBy5.power);      // Output: 2
console.log(multiplyBy5.prototype);  // Output: {} (Empty object by default)

// ─────────────────────────────────────────────────
// USING FUNCTIONS TO CREATE OBJECTS
// ─────────────────────────────────────────────────

function createUser(username, score){
    this.username = username;
    this.score = score; // Added missing assignment
}

// Every function has a `prototype` property.
// It's an object where we can attach methods that will be shared 
// among all instances created by this constructor function.

createUser.prototype.increment = function(){
    // 'this' gives context. It means "whoever called me, increment THEIR score"
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`);
}

// ─────────────────────────────────────────────────
// THE IMPORTANCE OF 'new' KEYWORD
// ─────────────────────────────────────────────────

// When using 'new':
// 1. A new empty object is created.
// 2. The constructor is called, and `this` is bound to the new object.
// 3. The new object is linked to the constructor's prototype.
const chai = new createUser("chai", 25)

// If we FORGET 'new':
// It acts as a normal function call. `this` points to the global object.
// It returns `undefined` (because there's no return statement).
// const tea = createUser("tea", 250) // 'tea' will be undefined!

chai.printMe() // Output: Score is 25
chai.increment()
chai.printMe() // Output: Score is 26

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
