// =====================================================
// GETTERS AND SETTERS IN CLASSES (ES6)
// =====================================================
// Getters and setters allow you to define Object accessors (Computed Properties).
// They let you execute code when a property is read or written.
// Useful for data validation, encapsulation, and computed properties.

class User {
    constructor(email, password){
        this.email = email;
        this.password = password; // This triggers the password setter!
    }

    // ─────────────────────────────────────────────────
    // GETTER (Called when reading the property)
    // ─────────────────────────────────────────────────
    // Using 'get' keyword.
    // The getter must return a value.
    get email(){
        // We use _email (a different property name) to avoid an infinite loop.
        // If we used this.email, it would call the getter again, and again...
        return this._email.toUpperCase();
    }

    // ─────────────────────────────────────────────────
    // SETTER (Called when writing to the property)
    // ─────────────────────────────────────────────────
    // Using 'set' keyword.
    // The setter must take exactly one parameter.
    set email(value){
        this._email = value;
    }

    // Getter for password
    get password(){
        // e.g., appending 'hitesh' to the actual password when read
        return `${this._password}hitesh`;
    }

    // Setter for password
    set password(value){
        // We can add validation here (e.g. check if length > 6)
        this._password = value;
    }
}

// ─────────────────────────────────────────────────
// USAGE
// ─────────────────────────────────────────────────
const hitesh = new User("h@hitesh.ai", "abc");

// Accessing the properties triggers the getters
console.log(hitesh.email);    // Output: H@HITESH.AI (from the getter)
console.log(hitesh.password); // Output: abchitesh (from the getter)

// NOTE on Infinite Loops:
// If you write:
// get password() { return this.password; }
// When you try to access this.password, it calls the getter, which accesses this.password,
// which calls the getter... resulting in a "Maximum call stack size exceeded" error.
// That's why we use an internal property like `_password` or `#password` (private fields).
