// =====================================================
// CLASS INHERITANCE IN JAVASCRIPT
// =====================================================
// Inheritance allows a class (Child) to inherit properties and methods
// from another class (Parent). This promotes code reusability.
// We use the `extends` keyword for inheritance and `super()` to call the parent's constructor.

// ─────────────────────────────────────────────────
// PARENT CLASS (Base Class / Superclass)
// ─────────────────────────────────────────────────
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// ─────────────────────────────────────────────────
// CHILD CLASS (Derived Class / Subclass)
// ─────────────────────────────────────────────────
// Teacher 'extends' User. This means Teacher gets all methods from User.
class Teacher extends User {
    constructor(username, email, password){
        // super() calls the constructor of the parent class (User).
        // It passes 'username' to the User constructor so it can initialize it.
        // You MUST call super() before accessing 'this' in a derived class.
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// ─────────────────────────────────────────────────
// CREATING INSTANCES & TESTING
// ─────────────────────────────────────────────────

// Creating a Teacher instance
const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe();      // Output: USERNAME is chai (Inherited from User!)
chai.addCourse();  // Output: A new course was added by chai (Teacher's own method)

// Creating a plain User instance
const masalaChai = new User("masalaChai");

masalaChai.logMe(); // Output: USERNAME is masalaChai
// masalaChai.addCourse(); // ERROR! User does not have addCourse method.

// ─────────────────────────────────────────────────
// CHECKING INSTANCES (instanceof)
// ─────────────────────────────────────────────────
// 'instanceof' operator tests to see if the prototype property of a constructor
// appears anywhere in the prototype chain of an object.

console.log(chai instanceof Teacher); // true (chai was created by Teacher)
console.log(chai instanceof User);    // true (Teacher extends User, so it's also a User)

console.log(masalaChai instanceof Teacher); // false (masalaChai is just a User, not a Teacher)
console.log(masalaChai instanceof User);    // true