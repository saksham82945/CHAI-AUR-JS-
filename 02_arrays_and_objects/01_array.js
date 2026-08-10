// array 
// Array ek ordered list hoti hai jisme hum multiple values store kar sakte hain
// JS me ek hi array me different data types bhi rakh sakte ho (numbers, strings, booleans, etc.)

const myArr = [1, 2, 3, 4, 5];
// basic array declaration with 5 elements

// const myHeroes = ["Shaktiman", "Naagraj"];
// string values ka array

// const myArr2 = new Array(1, 2, 4.7);
// new Array() syntax bhi use kar sakte ho array banane ke liye

// console.log(myArr[4]);
 // array indexing 0 se start hoti hai → yahan index 4 = value 5

// ------------------------------

// push() → array ke end me nayi value add karta hai
// myArr.push(6);
// myArr.push(7);
// console.log(myArr);
 // output: [1,2,3,4,5,6,7]

// ------------------------------

// pop() → last element ko remove karta hai
// myArr.pop();
// console.log(myArr);
 // output: [1,2,3,4,5,6]

// ------------------------------

// unshift() → starting me new element add karta hai
// myArr.unshift(9);
// console.log(myArr);
 // output: [9,1,2,3,4,5]

// shift() → starting ka element remove karta hai
// myArr.shift();
// console.log(myArr);
 // output: [1,2,3,4,5]

// ------------------------------

// includes() → check karta hai ki koi value array me hai ya nahi (true/false)
// console.log(myArr.includes(9));
 // output: false (9 array me nahi hai)

// indexOf() → given element ka index position return karta hai
// console.log(myArr.indexOf(3));
  // output: 2 (3 ka index position)

// ------------------------------

// join() → array ke saare elements ko string me convert karta hai
// console.log(myArr.join());
// output: "1,2,3,4,5"

// ------------------------------
// slice() & splice() dono array ke parts ko manipulate karte hain
// but kaafi important difference hai dono me 👇

// slice(start, end)
// → given range ka copy return karta hai (original array change nahi hota)

//console.log("A", myArr);
// A [1, 2, 3, 4, 5]

//const myn1 = myArr.slice(1, 3);
// index 1 se lekar (3-1) tak elements return karega → [2,3]

//console.log(myn1);
// output: [2, 3]

//console.log("B", myArr);
// original array same rahega → [1, 2, 3, 4, 5]

// ------------------------------

// splice(start, count)
// → original array se elements remove/add karta hai (array ko modify karta hai)

// const myn2 = myArr.splice(1, 3);
// index 1 se start karke 3 elements remove karega → [2,3,4]

// console.log(myn2);
// output: [2,3,4]

// console.log("C", myArr);
// original array ab change ho chuka hai → [1,5]
