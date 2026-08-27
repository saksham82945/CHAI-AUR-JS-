// ============================================================
//  📦 JAVASCRIPT VARIABLES - Ek Beginner-Friendly Guide
// ============================================================
// Variable ka matlab hai → ek "dabba" (container) jisme hum
// data store karte hain. Jaise real life me drawer me cheezein rakhte hain.
//
// JS me 3 tarike hain variable banane ke:
//   1. const  → fixed value, badal nahi sakti (lock dabba 🔒)
//   2. let    → value badal sakti hai, block-scoped (flexible dabba)
//   3. var    → purana tarika, function-scoped, avoid karo ❌
// ============================================================


// ✅ const → ek baar assign karo, phir kabhi change mat karo
// Use karo jab value KABHI nahi badlegi (e.g., user ID, PI value)
const accountId = 14433;
// accountId = 9999; // ❌ ERROR: Assignment to constant variable


// ✅ let → modern aur preferred way — value baad mein badal sakte ho
// Block-scoped hota hai → sirf usi { } block ke andar kaam karta hai jahan declare hua
let accountEmail = "saksham@1234.com";


// ⚠️ var → AVOID karo modern JS mein
// var function-scoped hota hai, isliye bugs create kar sakta hai
// Example: Loop mein var use karo to loop ke bahar bhi accessible hota hai (dangerous!)
var accountPassword = "123455";


// 🚨 GLOBAL variable — BAHUT BURA PRACTICE
// Bina let/const/var ke declare karne se variable GLOBAL ho jaata hai
// Matlab ye saari file aur even other scripts mein access ho sakta hai → AVOID KARO!
accountCity = "Jaipur"; // ❌ Global variable — intentionally mat banao


// 🔲 Undefined variable → declare kiya but value nahi di
// Jab tak value assign na ho, JS automatically "undefined" deta hai
let accountState;
console.log(accountState); // Output: undefined


// -------------------------------------------------------
// ✅ VALUES REASSIGN KARO (sirf let aur var ke liye kaam karta hai)
// -------------------------------------------------------
accountEmail    = "saks@12.com";    // ✅ let → reassign allowed
accountPassword = "2323455";       // ✅ var → reassign allowed
accountCity     = "Bengaluru";     // ✅ global → reassign allowed

// accountId = 9999;               // ❌ const → ERROR aayega


// -------------------------------------------------------
// 🖨️ CONSOLE.LOG → Values print karo
// -------------------------------------------------------
console.log(accountId);                                         // 14433
console.log(accountEmail);                                      // saks@12.com
console.log(accountPassword);                                   // 2323455
console.log(accountCity);                                       // Bengaluru
console.log(accountState);                                      // undefined

// Multiple values ek saath print karna:
console.log(accountCity, accountState, accountEmail, accountPassword);
// Output: Bengaluru undefined saks@12.com 2323455


// -------------------------------------------------------
// 📊 TABLE FORMAT mein print karna (Dev Tools mein zyada readable)
// -------------------------------------------------------
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// Ye ek table banaata hai console mein — bahut clean dikhta hai!


// ============================================================
// 🔑 KEY POINTS — Yaad rakhna!
// ============================================================
//
//  | Keyword | Reassign? | Scope          | Use When?                   |
//  |---------|-----------|----------------|-----------------------------|
//  | const   | ❌ Nahi   | Block          | Value kabhi na badle        |
//  | let     | ✅ Haan   | Block          | Value baad mein badle       |
//  | var     | ✅ Haan   | Function/Global| Purana code — AVOID karo   |
//
// 💡 Best Practice:
//    → Pehle const use karo
//    → Agar value baadme badlegi to let use karo
//    → var ko bhool jao (legacy code ke liye hi hai)
//
// ============================================================
