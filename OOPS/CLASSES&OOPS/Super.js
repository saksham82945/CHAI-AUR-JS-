class User {
    constructor(name, age, username, gender, role, email) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.role = role;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}: ${text}`;   // Fix 1: ${text} not {text}
        document.body.appendChild(h1);               // Fix 2: actually append to DOM
    }

    remove() {                                        // Fix 3: moved inside class
        document.querySelectorAll("h1").forEach(function (elem) {
            elem.remove();
        });
    }
}

class Admin extends User {
    constructor(name, age, username, gender, email) {
        super(name, age, username, gender, "admin", email);
        this.role = "admin";
    }
}

// Fix 4: new User(...) not newUser(...), and matching argument order
let u1 = new User("Harsh", 23, "harsh2233", "male", "engineer", "harsh@gmail.com");

let u2 = new User("Harshita", 33, "harshita33", "female", "engineer", "harshita@gmail.com");

let a1 = new Admin("Admin1", 25, "admin221", "male", "admin@gmail.com");

// Classical Inherietance 

// -  classes banana and unhe extend kar dena 

// Inherietnace  -> Class -> class

// Prototype1 inheritance - object -> object 

 let  coffee = {
color:"dark",
drink: function() {
     connsole.log(" pi le bsdk ");
}

 }
  // ek object hai aap chaho to uski sarri props/methods 
 // ko inherit  kara dete ho doosre object me 
 let arabicCoffe = Object.create(coffee); 

 arabicCoffe.taste = " harder";
 arabicCoffe.drink();
 
 // coffee ke prototype ko leke araha hai and ek me jor deta hai 

 