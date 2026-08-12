// =====================================================
// OBJECT PROPERTY DESCRIPTORS
// =====================================================
// Why can't we change the value of Math.PI in JavaScript?
// The answer lies in Property Descriptors!

// ─────────────────────────────────────────────────
// CHECKING BUILT-IN PROPERTY DESCRIPTORS
// ─────────────────────────────────────────────────
// Object.getOwnPropertyDescriptor tells us the hidden configuration of a property.

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log("Descriptor of Math.PI:");
console.log(descriptor);
/* Output:
{
  value: 3.141592653589793,
  writable: false,       // Cannot be changed/overwritten!
  enumerable: false,     // Will not show up in loops (like for...in)
  configurable: false    // Cannot be deleted or re-configured!
}
*/

// Since writable is false, trying to change it silently fails (or throws error in strict mode).
// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5;
// console.log(Math.PI); // Still 3.141592653589793

// ─────────────────────────────────────────────────
// CUSTOM OBJECT PROPERTY DESCRIPTORS
// ─────────────────────────────────────────────────

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){ 
        console.log("Chai nahi bani");
    }
}

console.log("\nBefore changing descriptor:");
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// By default, our custom objects have writable: true, enumerable: true, configurable: true

// Let's lock down the 'name' property so no one can change it or loop over it!
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log("\nAfter changing descriptor:");
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// ─────────────────────────────────────────────────
// TESTING ENUMERABLE (Loops)
// ─────────────────────────────────────────────────

console.log("\nLooping over chai object:");

// Object.entries returns an array of [key, value] pairs for enumerable properties
for (let [key, value] of Object.entries(chai)) {
    // We don't want to print functions
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}

// Output:
// price: 250
// isAvailable: true
// NOTE: 'name' is MISSING because we set enumerable: false!
