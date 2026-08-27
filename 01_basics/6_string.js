// ============================================================
//  📝 STRINGS IN JAVASCRIPT — Complete Guide
// ============================================================
// String = Characters ka sequence (text data)
// JavaScript mein strings immutable hote hain → ek baar banao, badal nahi sakte
// (Methods nayi string return karte hain, original nahi badalta)
//
// String banane ke 3 tarike:
//   1. Double quotes: "hello"
//   2. Single quotes: 'hello'
//   3. Template Literals (backticks): `hello ${variable}`
// ============================================================


// ============================================================
// 🔗 STRING CONCATENATION — Purana vs Naya Tarika
// ============================================================

const name      = "Hitesh";
const repoCount = 50;

// ❌ Purana tarika (+ operator) — messy aur error-prone
console.log("Hello my name is " + name + " and my repo count is " + repoCount);

// ✅ Naya tarika → Template Literals (backticks use karo)
// ${ } ke andar koi bhi expression likh sakte ho (variable, math, function call)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output: Hello my name is Hitesh and my repo count is 50

// Template literals mein expressions bhi likh sakte ho:
console.log(`Result: ${2 + 2}`);          // "Result: 4"
console.log(`Uppercase: ${name.toUpperCase()}`); // "Uppercase: HITESH"


// ============================================================
// 🏗️ STRING OBJECT — new String()
// ============================================================
// Hum string ko explicitly object ke roop mein bhi bana sakte hain
// new String() ek String OBJECT banata hai (primitive string se alag)

const gameName = new String("hiteshhh");
console.log(gameName);         // String {'hiteshhh'} → object
console.log(typeof gameName);  // "object" (primitive string hoti to "string" aata)

// String ke characters ko INDEX se access karo (0-based)
console.log(gameName[0]); // "h"
console.log(gameName[1]); // "i"
console.log(gameName[7]); // "h" (last character)

// String ki length check karo
console.log(gameName.length); // 8


// ============================================================
// 🔧 USEFUL STRING METHODS — Saari Important Methods
// ============================================================

// 1️⃣ toUpperCase() / toLowerCase() → Case change karo
console.log(gameName.toUpperCase()); // "HITESHHH"
console.log(gameName.toLowerCase()); // "hiteshhh"

// 2️⃣ indexOf() → Character/substring ka position dhundo
console.log(gameName.indexOf("e")); // 3 (0-based index)
console.log(gameName.indexOf("z")); // -1 (nahi mila to -1 return karta hai)

// 3️⃣ includes() → Check karo ki string mein kuch hai ya nahi
console.log(gameName.includes("hite")); // true
console.log(gameName.includes("xyz"));  // false

// 4️⃣ substring(start, end) → String ka ek part nikalo
//    end index EXCLUDE hota hai (last character include nahi)
const newString = gameName.substring(0, 5); // index 0 to 4
console.log(newString); // "hites"

// 5️⃣ slice(start, end) → substring jaisa hi, lekin NEGATIVE index support karta hai!
//    Negative index → end se count karta hai
console.log(gameName.slice(0, 4));   // "hite" → index 0 to 3
console.log(gameName.slice(-4));     // "hhhh" → last 4 characters
console.log(gameName.slice(-8, 4));  // "hite" → -8 se shuru, index 4 tak

// 💡 slice vs substring:
//    → substring negative index nahi accept karta (0 treat karta hai)
//    → slice negative index accept karta hai

// 6️⃣ trim() → Extra whitespace hata do (before & after)
//    trimStart() → Sirf shuru se
//    trimEnd()   → Sirf ant se
const messyString = "   hello world   ";
console.log(messyString.trim());      // "hello world"
console.log(messyString.trimStart()); // "hello world   "
console.log(messyString.trimEnd());   // "   hello world"

// 7️⃣ replace() → Kisi part ko kisi aur se badlo
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-")); // "https://hitesh.com/hitesh-choudhary"
// %20 = URL-encoded space character

// replaceAll() → Saare occurrences replace karo
const text = "cat-bat-rat";
console.log(text.replaceAll("-", " ")); // "cat bat rat"

// 8️⃣ includes() → Boolean return karta hai
console.log(url.includes("hitesh")); // true
console.log(url.includes("google")); // false

// 9️⃣ split() → String ko tod ke array banao
console.log("hello-world-js".split("-"));  // ["hello", "world", "js"]
console.log("hello".split(""));            // ["h","e","l","l","o"]
console.log(gameName.split("-"));          // ["hiteshhh"] (no "-" found)

// 🔟 startsWith() / endsWith() → Check karo string kis se start/end hoti hai
console.log("hitesh".startsWith("hi"));   // true
console.log("hitesh".endsWith("esh"));    // true
console.log("hitesh".startsWith("xyz"));  // false

// 1️⃣1️⃣ repeat() → String ko multiple times repeat karo
console.log("ha".repeat(3)); // "hahaha"

// 1️⃣2️⃣ padStart() / padEnd() → String ko specific length tak pad karo
console.log("5".padStart(3, "0")); // "005" → OTP, card numbers ke liye useful
console.log("5".padEnd(3, "0"));   // "500"

// 1️⃣3️⃣ charAt() → Specific index ka character do
console.log(gameName.charAt(0)); // "h"
console.log(gameName.charAt(4)); // "s"

// 1️⃣4️⃣ charCodeAt() → Character ka ASCII code do
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97


// ============================================================
// 📌 STRING METHODS QUICK REFERENCE
// ============================================================
//
//  | Method          | Kya karta hai?                          | Example                   |
//  |-----------------|-----------------------------------------|---------------------------|
//  | length          | String ki length batata hai             | "hello".length → 5        |
//  | toUpperCase()   | Uppercase mein convert                  | "hi".toUpperCase() → "HI" |
//  | toLowerCase()   | Lowercase mein convert                  | "HI".toLowerCase() → "hi" |
//  | indexOf()       | Substring ka index dhundo               | "hello".indexOf("l") → 2  |
//  | includes()      | Check karo substring hai ya nahi        | "hello".includes("ell") → true |
//  | slice()         | Part nikalo (negative index support)    | "hello".slice(-3) → "llo" |
//  | substring()     | Part nikalo (no negative index)         | "hello".substring(0,3) → "hel" |
//  | replace()       | Ek part replace karo                    | "a-b".replace("-","_") → "a_b" |
//  | split()         | Array mein tod do                       | "a,b".split(",") → ["a","b"] |
//  | trim()          | Extra spaces hata do                    | "  hi  ".trim() → "hi"   |
//  | startsWith()    | Check start                             | "hello".startsWith("he") → true |
//  | endsWith()      | Check end                               | "hello".endsWith("lo") → true |
//  | repeat()        | Repeat karo                             | "ha".repeat(2) → "haha"  |
//  | padStart()      | Left side pad karo                      | "5".padStart(3,"0") → "005" |
//  | charAt()        | Index ka character do                   | "hi".charAt(1) → "i"     |
//
// ============================================================
// 💡 Remember: Strings IMMUTABLE hote hain!
//    Koi bhi method original string nahi badalta,
//    balki ek NAYI string return karta hai!
// ============================================================
