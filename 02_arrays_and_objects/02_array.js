const marvel_heroes = ["thor", "spiderman", "ironman"];
const dc_heroes = ["superman", "flash", "batman"];

// ------------------------------

// marvel_heroes.push(dc_heroes);
// ye poora dc_heroes array ko ek single element ke form me marvel_heroes me daal dega
// output: ["thor", "spiderman", "ironman", ["superman","flash","batman"]]
// isliye ye sahi syntax nahi hai agar dono arrays ko merge karna ho

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// nested array hone ke wajah se access karna padta hai double index se (3rd element ka 1st index)

// ------------------------------

// concat() method use karke arrays ko merge kar sakte hain
// ye dono arrays ko mila kar ek naya array return karta hai (original arrays change nahi hote)

// const all = marvel_heroes.concat(dc_heroes);
// console.log(all);
// // output: ["thor","spiderman","ironman","superman","flash","batman"]

// ------------------------------

// spread operator (...) use karke bhi arrays merge kar sakte hain
// ye concat() ka modern aur easy alternative hai

// const all_new = [...marvel_heroes, ...dc_heroes];
// console.log(all_new);
// output: ["thor","spiderman","ironman","superman","flash","batman"]

// ------------------------------

// nested arrays ko ek single flat array me convert karne ke liye flat() use hota hai
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5, 6]]];

// const real_another = another_array.flat(Infinity);
 // flat(Infinity) → jitni bhi nesting ho sab flatten kar dega

// console.log(real_another);
// output: [1,2,3,4,5,6,7,6,7,4,5,6]

// ------------------------------

// Array.isArray() → check karta hai ki diya gaya data array hai ya nahi
// console.log(Array.isArray("Hitesh"));
// // output: false (kyunki ye string hai)

// ------------------------------

// Array.from() → kisi iterable (like string) ko array me convert karta hai
// console.log(Array.from("saksham"));
// output: ["s","a","k","s","h","a","m"]

// console.log(Array.from({name:"saksham"}));
// output: [] (empty array)
// kyunki object iterable nahi hai (sirf "length" property hoti tab kaam karta)
// ye interesting behavior hai!

// ------------------------------

// Array.of() → given values se ek naya array banata hai
// yahan hum multiple variables ko ek array me convert kar rahe hain

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// output: [100, 200, 300]
