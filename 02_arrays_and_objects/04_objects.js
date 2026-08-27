// ------------------------------
// Creating objects

// const tinderuser = new Object()
// or using literal syntax
const tinderuser = {}

// adding properties dynamically
tinderuser.id = "123456"
tinderuser.name = "sakshi"
tinderuser.isLoggedIn = false

// console.log(tinderuser);
// // output: { id: "123456", name: "sakshi", isLoggedIn: false }

// ------------------------------
// Nested Objects example
// const regularUser = {
//     email: "saksjjjs@gmail.com",
//     fullName: {
//         username: {
//             firstname: "saksham",
//             lastname: "singh"
//         }
//     }
// }
// console.log(regularUser.fullName.username.firstname);
// // access nested property → output: "saksham"

// ------------------------------
// Merging objects

// const obj1 = {1: "a", 2:"b"}
// const obj2 = {3: "s", 4:"cv"}

// Using Object.assign
// const obj3 = Object.assign({}, obj1, obj2)

// Using spread operator
// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);
// // output: {1:"a",2:"b",3:"s",4:"cv"}

// ------------------------------
// Array of objects
const users = [
    { id: 1, email: "saksham@ass" },
    {},
    {}
]

// Accessing email of 2nd object (index 1)
// users[1].email → undefined, because object is empty

// ------------------------------
// Object utility methods

console.log(tinderuser);
// // prints full object

console.log(Object.keys(tinderuser))
// // returns all keys of object → ["id","name","isLoggedIn"]

console.log(Object.values(tinderuser))
// // returns all values → ["123456","sakshi",false]

console.log(Object.entries(tinderuser))
// // returns key-value pairs as array → [["id","123456"],["name","sakshi"],["isLoggedIn",false]]

console.log(tinderuser.hasOwnProperty("isLoggedIn"))
// // checks if property exists → true

// ------------------------------
// Object destructuring
const course = {
    coursename: "jss in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructuring with renaming
const { courseInstructor: instructor } = course
// instructor variable now holds "hitesh"

// console.log(courseInstructor)
// ❌ This will throw error because courseInstructor variable does not exist now
console.log(instructor)
// ✅ correct way → output: "hitesh"

// ------------------------------
// Arrow function placeholder
// const navbar = () => { }
// // empty arrow function ready to define
