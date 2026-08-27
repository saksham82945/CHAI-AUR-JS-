// =====================================================
// MAP, FILTER, REDUCE — Higher Order Array Methods
// =====================================================
// Ye teeno methods array ke saath kaam karte hain
// Ye methods ek function ko argument ke roop me lete hain
// (isliye inhe Higher Order Functions kehte hain)

// ─────────────────────────────────────────────────
// 1. MAP() — Har element ko transform karo
// ─────────────────────────────────────────────────
// map() ek NAYA array return karta hai jisme har element
// transform hoti hai (original array CHANGE nahi hota)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Har number ko 2 se multiply karo
const newNums = myNums.map((num) => {
    return num * 2
})
console.log(newNums)
// Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Shorthand (implicit return)
const doubled = myNums.map(num => num * 2)

// ─────────────────────────────────────────────────
// 2. FILTER() — Sirf matching elements rakhna
// ─────────────────────────────────────────────────
// filter() condition ke basis par elements filter karta hai
// Ek NAYA array return karta hai with only matching elements

// Sirf even numbers
const evenNums = myNums.filter((num) => num % 2 === 0)
console.log(evenNums)
// Output: [2, 4, 6, 8, 10]

// Sirf 5 se bade numbers
const greaterThanFive = myNums.filter(num => num > 5)
console.log(greaterThanFive)
// Output: [6, 7, 8, 9, 10]

// ─────────────────────────────────────────────────
// 3. REDUCE() — Array ko ek single value me reduce karna
// ─────────────────────────────────────────────────
// reduce() har element ke through iterate karta hai
// aur ek single accumulated value return karta hai

const myNums2 = [1, 2, 3]

// Syntax: reduce((accumulator, currentValue) => ..., initialValue)
const sum = myNums2.reduce(function(accumulator, currentValue) {
    console.log(`acc: ${accumulator}, cur: ${currentValue}`)
    return accumulator + currentValue
}, 0)
// Iteration: 0+1=1, then 1+2=3, then 3+3=6
console.log(sum) // 6

// ─────────────────────────────────────────────────
// CHAINING — Map, Filter, Reduce ek saath lagao
// ─────────────────────────────────────────────────
const result = myNums
    .map((num) => num * 10)     // [10, 20, 30, ..., 100]
    .map((num) => num + 1)      // [11, 21, 31, ..., 101]
    .filter((num) => num > 50)  // [51, 61, 71, 81, 91, 101]

console.log(result)
// Output: [51, 61, 71, 81, 91, 101]

// ─────────────────────────────────────────────────
// PRACTICAL EXAMPLE — Shopping Cart Total
// ─────────────────────────────────────────────────
const shoppingCart = [
    { name: "js course", price: 2999 },
    { name: "py course", price: 999 },
    { name: "mobile dev", price: 5999 },
    { name: "data science", price: 12999 },
]

// Total price calculate karna with reduce
const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(`Total Price: ₹${totalPrice}`)
// Output: Total Price: ₹22996

// ─────────────────────────────────────────────────
// OTHER USEFUL ARRAY METHODS
// ─────────────────────────────────────────────────

// find() — Pehla matching element return karta hai
const firstEven = myNums.find(num => num % 2 === 0)
console.log(firstEven)  // 2

// findIndex() — Pehle match ka index return karta hai
const firstEvenIndex = myNums.findIndex(num => num % 2 === 0)
console.log(firstEvenIndex)  // 1

// some() — Kya KUCHH elements condition satisfy karte hain? (true/false)
const hasEven = myNums.some(num => num % 2 === 0)
console.log(hasEven)  // true

// every() — Kya SAARE elements condition satisfy karte hain? (true/false)
const allPositive = myNums.every(num => num > 0)
console.log(allPositive)  // true

// flat() — Nested arrays ko flatten karna
const nested = [1, 2, [3, 4], [5, [6, 7]]]
console.log(nested.flat())          // [1, 2, 3, 4, 5, [6, 7]] — one level
console.log(nested.flat(Infinity))  // [1, 2, 3, 4, 5, 6, 7] — all levels

// flatMap() — map + flat (one level) ek saath
const sentences = ["hello world", "chai aur code"]
const words = sentences.flatMap(sentence => sentence.split(' '))
console.log(words)  // ["hello", "world", "chai", "aur", "code"]
