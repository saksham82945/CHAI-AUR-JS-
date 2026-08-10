
// // let a = 300

// // if(true){  // block scope bolte hai iske under jo hai usse
// // let a = 10
// // const b = 20
// // console.log("Inner :",a);
// // }

// // // for( let i =0; i<array.length; i++)
// // // {
// // //      const element = array[i];
// // // }
// // {} //--scope 

// // console.log(a);
// // // console.log(b);
// // //console.log(c);

// function one() {
//     const username = "hitesh"

//     function two() {
//          const website = " youtube"
//          console.log(username);

//     }
//   //  console.log(website);

//     two()
// }

// //one()
// if(true) {
//     const username ="hitesh"
//     if(username === "hitesh"){
//         const website = "  youtube"
//         console.log(username + website );
//     }
// }




// +++++++++++++++++++++Interesting ++++++++++++++

addone(5)
console.log(addone(5));
function addone(num){
    return num + 1
}




const addTwo = function(num){
    return num + 2;
}

addTwo(5)