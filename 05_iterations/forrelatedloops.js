// =====================================================
// MAP DATA STRUCTURE
// =====================================================
// Map ek key-value pair collection hai (Object ki tarah)
// 
// Map vs Object differences:
// 1. Map me ANY type ki key ho sakti hai (Object, Array, Number, etc.)
//    Object me sirf String aur Symbol keys hoti hain
// 2. Map me insertion order maintain hota hai
// 3. Map me .size property hoti hai
// 4. Map iteration ke liye directly use ho sakta hai (iterable)

// ─────────────────────────────────────────────────
// MAP CREATION AND BASIC METHODS
// ─────────────────────────────────────────────────
const map = new Map()

// set(key, value) — Map me entry add karta hai
map.set('IN', "INDIA")                      // String key
map.set('USA', "United States of America")  // String key
map.set('UK', "United Kingdom")             // String key
map.set(1, "One")                           // Number as key
map.set(true, "Boolean key")               // Boolean as key
map.set({ a: 1 }, "Object as key")         // Object as key!

console.log(map)
// Map ki values directly print hoti hain (unlike plain object)

// get(key) — Value retrieve karna
console.log(map.get('IN'))  // "INDIA"

// has(key) — Key exist karti hai? (true/false)
console.log(map.has('USA'))  // true
console.log(map.has('CHINA'))  // false

// size — Total number of entries
console.log(map.size)  // 6

// delete(key) — Ek entry remove karna
map.delete('UK')
console.log(map.size)  // 5

// clear() — Saari entries remove karna
// map.clear()

// ─────────────────────────────────────────────────
// ITERATING OVER MAP
// ─────────────────────────────────────────────────

// for...of se iterate karna
// Map directly iterable hai (unlike Object)
for (const key of map) {
    console.log(key)  // [key, value] pair as array
}

// Destructuring ke saath (better!)
for (const [key, value] of map) {
    console.log(key, ':-', value)
}

// ─────────────────────────────────────────────────
// OBJECTS ARE NOT DIRECTLY ITERABLE WITH for...of!
// ─────────────────────────────────────────────────
const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for ([key,value] of myObject){  // ← Ye ERROR dega!
//    console.log(key , '-:',value);
// }
// Objects iterable nahi hote directly
// Map ya Object.entries() use karo

// Sahi tarika:
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, '-:', value)
}

// ─────────────────────────────────────────────────
// SET DATA STRUCTURE
// ─────────────────────────────────────────────────
// Set ek UNIQUE values ka collection hai
// Duplicate values automatically ignore ho jati hain

const mySet = new Set([1, 2, 3, 3, 4, 4, 5])
console.log(mySet)  // {1, 2, 3, 4, 5} — duplicates removed!

mySet.add(6)          // 6 add karo
mySet.add(1)          // 1 already hai, ignored!
mySet.has(3)          // true
mySet.delete(3)       // 3 remove karo
mySet.size            // Current count

// Duplicate remove karne ke liye array me use
const arr = [1, 2, 2, 3, 3, 4, 5, 5]
const uniqueArr = [...new Set(arr)]
console.log(uniqueArr)  // [1, 2, 3, 4, 5]
