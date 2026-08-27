// =====================================================
// CLASSES IN JAVASCRIPT (ES6)
// =====================================================
// ES6 (2015) introduced the 'class' keyword to JavaScript.
// It is syntactic sugar over JavaScript's existing prototype-based inheritance.
// It does NOT introduce a new object-oriented inheritance model to JavaScript.

// ─────────────────────────────────────────────────
// MODERN WAY: USING ES6 CLASSES
// ─────────────────────────────────────────────────
class User {
    // The constructor is a special method for creating and initializing an object created with a class.
    // There can only be one special method with the name "constructor" in a class.
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Methods are added directly to the class body (behind the scenes, they go to the prototype)
    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

// Creating an instance of the class using the 'new' keyword
const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword()); // Output: 123abc
console.log(chai.changeUsername());  // Output: CHAI

// ─────────────────────────────────────────────────
// BEHIND THE SCENES: THE OLD WAY (ES5 Constructor Functions)
// ─────────────────────────────────────────────────
// What the class syntax is actually doing under the hood:

function UserOld(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

// Adding methods to the prototype manually
UserOld.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

UserOld.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const tea = new UserOld("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword()); // Output: 123abc
console.log(tea.changeUsername());  // Output: TEA

// As you can see, ES6 classes just provide a cleaner, more readable syntax
// for doing exactly what constructor functions and prototypes did before!