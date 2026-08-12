// =====================================================
// PROTOTYPE CHAIN & PROTOTYPE-BASED INHERITANCE
// =====================================================
// JavaScript me har object ek "prototype" se connected hota hai
// Prototype bhi ek object hai jisme methods/properties hoti hain
// Jab koi property/method object me nahi milti, JS prototype chain
// me search karta hai
//
// Prototype Chain:
// yourObject → Object.prototype → null
// yourArray  → Array.prototype  → Object.prototype → null
// yourString → String.prototype → Object.prototype → null

// ─────────────────────────────────────────────────
// STRING METHODS KA ACTUAL SOURCE — String.prototype
// ─────────────────────────────────────────────────
let myName = "hitesh     "

console.log(myName.length)    // 11 — String.prototype se milta hai!
// console.log(myname.truelength)  // error — custom method add nahi ki

let myHeros = ["thor", "spiderman"]

// heroPower ek plain object hai
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`)
    }
}

// ─────────────────────────────────────────────────
// PROTOTYPE ME CUSTOM METHOD ADD KARNA
// ─────────────────────────────────────────────────

// SAARE objects ko ek method add karna (Object.prototype se)
Object.prototype.hitesh = function() {
    console.log(`hitesh is present in all objects`)
}

// SIRF arrays ko ek method add karna (Array.prototype se)
Array.prototype.heyHitesh = function() {
    console.log(`hitesh says hello`)
}

// Ab ye methods saare instances me available hain!
// heroPower.hitesh()   // Works! (Object.prototype se)
// myHeros.hitesh()     // Works! (Object.prototype se — array bhi object hai)
// myHeros.heyHitesh()  // Works! (Array.prototype se)
// heroPower.heyHitesh() // Error! Objects ke paas Array.prototype nahi hoti

// ─────────────────────────────────────────────────
// PROTOTYPE-BASED INHERITANCE (without classes)
// ─────────────────────────────────────────────────
const User = {
    name: "chai",
    email: 'saksham@12333'
}

const Teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

// OLD STYLE: __proto__ se set karna (deprecated)
const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: teachingSupport  // TASupport inherits from teachingSupport
}
// Ab TASupport ke paas teachingSupport ke bhi properties hain

// OLD STYLE (avoid!)
// Teacher.__proto__ = User

// MODERN/RECOMMENDED STYLE: Object.setPrototypeOf()
Object.setPrototypeOf(teachingSupport, Teacher)
// Ab teachingSupport Teacher ko inherit karta hai
// Jo Teacher ke paas hai (makeVideo) ab teachingSupport ke paas bhi hai!

// ─────────────────────────────────────────────────
// CUSTOM STRING METHOD USING PROTOTYPE
// ─────────────────────────────────────────────────
let anotherUser = 'Chai aur code.    '

// Saare strings ke liye ek custom method banana
String.prototype.trueLength = function() {
    console.log(`String: "${this}"`)
    // this.trim() — leading/trailing whitespace hatata hai
    console.log(`True length is: ${this.trim().length}`)
}

anotherUser.trueLength()
// String: "Chai aur code.    "
// True length is: 14 (whitespace remove hone ke baad)

"saksham kumar".trueLength()
// String: "saksham kumar"
// True length is: 13

// ─────────────────────────────────────────────────
// PROTOTYPE CHAIN — How it works
// ─────────────────────────────────────────────────
// Jab bhi JS koi property/method dhundta hai:
// Step 1: Object me khojega
// Step 2: Object.prototype me khojega
// Step 3: Object.prototype.prototype (null) → "undefined" return

const arr = [1, 2, 3]
// arr.map() → Array.prototype.map ← here it is!
// arr.hasOwnProperty() → Object.prototype.hasOwnProperty ← here!
// arr.nonExistent() → not in Array.prototype, not in Object.prototype → TypeError

// ─────────────────────────────────────────────────
// Object.create() — Prototype set kar ke object banana
// ─────────────────────────────────────────────────
const animal = {
    makeSound: function() {
        console.log(`${this.name} says ${this.sound}`)
    }
}

const dog = Object.create(animal)  // dog's prototype = animal
dog.name = "Tommy"
dog.sound = "Woof"

dog.makeSound()  // "Tommy says Woof"
// makeSound animal.prototype se mila via prototype chain!
