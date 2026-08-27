

// const person1 = "harkirat";
// const gender1 = "male";

// const person2 = "male";

// const personaArray = ["harkirat","saksham","priya"];
// const genderArray = ["male","male","female"];


//  for (let i =0; i<personaArray.length;i++){
//      if(genderArray[i]== "female") {
//          console.log(personaArray[i]);
//      }
//  }

//object 
const user1 = {
     firstname : "harkirat",
     gender: "male",
     age : 18,
}
// array of an object 
const allUsers = [
  {
    firstname: "saksham",
    age: 20
  },
  {
    firstname: "sahil",
    age: 23
  },
  {
    firstname: "sakshi",
    age: 24
  }
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].age > 20) {
    console.log(allUsers[i].firstname);
  }
}

// console.log(allUsers);

