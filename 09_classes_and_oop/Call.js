// =====================================================
// THE 'call' METHOD IN JAVASCRIPT
// =====================================================
// The call() method allows you to call a function with a given 'this' value
// and arguments provided individually.
// It is heavily used in older JS for constructor inheritance.

// ─────────────────────────────────────────────────
// UNDERSTANDING THE PROBLEM
// ─────────────────────────────────────────────────

function SetUsername(username){
    // Imagine some complex DB calls happen here to validate the username
    console.log("SetUsername called");
    this.username = username;
}

function createUser(username, email, password){
    // ATTEMPT 1: Normal function call
    // SetUsername(username) 
    // This DOES NOT work as expected! 
    // The function executes, but 'this' inside SetUsername points to the GLOBAL object, 
    // NOT the newly created 'createUser' object.

    // ─────────────────────────────────────────────────
    // THE SOLUTION: using .call()
    // ─────────────────────────────────────────────────
    // .call() executes the function AND passes the current execution context ('this').
    // Now, when SetUsername runs, its 'this' will be the 'createUser' object.
    
    SetUsername.call(this, username); 

    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@123.com", "123");

console.log(chai);
// Output: createUser { username: 'chai', email: 'chai@123.com', password: '123' }
// If we didn't use .call(this), 'username' would be missing from the object!

// ─────────────────────────────────────────────────
// QUICK RECAP: call vs apply vs bind
// ─────────────────────────────────────────────────
// function.call(thisArg, arg1, arg2)   - Calls immediately, comma-separated args
// function.apply(thisArg, [arg1, arg2])- Calls immediately, array of args
// function.bind(thisArg, arg1, arg2)   - Returns a NEW function to be called later