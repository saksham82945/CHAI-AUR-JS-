// Singleton 
// object.create()

// object literals 

// create a symbol and store it in a variable 
const mySym = Symbol("Key1")

// creating an object using literal syntax 
// const jsUser = {
//     name: "Saksham",
//     "fullName": "Saksham Kumar",
   // symbol property — must be written inside square brackets []
//     [mySym]: "mykey1",
//     age: 20,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastlogin: ["Monday", "Wednesday"]
// }

// accessing values from object 
// console.log(jsUser.email);              // dot notation
// console.log(jsUser["email"]);           // bracket notation
// console.log(jsUser["fullName"]);        // property name is a string so [] is required
// console.log(jsUser[mySym]);             // access symbol key using []

// changing a value inside object 
// jsUser.email = "saksham@ratu.com"

// freeze — prevents modification of object values 
// Object.freeze(jsUser)
// jsUser.email = "sakshammicro@.com"      // won’t change after freeze
// console.log(jsUser);

// adding a function (method) to the object 
jsUser.greeting = function() {
    console.log("hello js user")
}

// calling the method 
console.log(jsUser.greeting());

// just shows the function definition (not executed) 
// console.log(jsUser.greeting);

// adding another method using 'this' keyword
// 'this' refers to the current object (jsUser)
jsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`);
}

// calling the 2nd method 
console.log(jsUser.greetingTwo());
