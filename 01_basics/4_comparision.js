// ============================================================
//  ⚖️ COMPARISON OPERATORS — JS Mein Values Ko Compare Karna
// ============================================================
// Comparison operators do values ko compare karte hain
// Aur hamesha TRUE ya FALSE return karte hain (boolean result)
//
// Operators list:
//   >   → Greater than (bada hai)
//   <   → Less than (chhota hai)
//   >=  → Greater than or equal to (bada ya barabar)
//   <=  → Less than or equal to (chhota ya barabar)
//   ==  → Loose equality (sirf value compare, type ignore)
//   !=  → Not equal (barabar nahi)
//   === → Strict equality (value AND type dono compare)
//   !== → Strict not equal
// ============================================================


// ============================================================
// ✅ BASIC COMPARISONS
// ============================================================

console.log(2 > 1);  // true  → 2, 1 se bada hai
console.log(2 >= 1); // true  → 2, 1 se bada ya barabar hai
console.log(2 < 1);  // false → 2, 1 se chhota nahi hai
console.log(2 == 1); // false → 2 aur 1 barabar nahi hain
console.log(2 != 1); // true  → 2 aur 1 barabar nahi hain


// ============================================================
// ⚠️ TYPE COERCION WITH COMPARISONS (Tricky!)
// ============================================================
// Comparison operators mein agar ek operand number aur dusra string ho,
// to JS string ko NUMBER mein convert karke compare karta hai
// Yahi hai Type Coercion — automatic type badalna

console.log("2" > 1);   // true  → "2" → 2 (number ban gaya), 2 > 1 = true
console.log("02" > 1);  // true  → "02" → 2 (number ban gaya), 2 > 1 = true
console.log("10" > 9);  // true  → "10" → 10, 10 > 9 = true

// 💡 Tip: Kabhi bhi MIXED types (string & number) compare mat karo
//         Always ek hi type mein compare karo for predictable results


// ============================================================
// 🚨 NULL COMPARISONS — JS ka Sabse Confusing Behavior!
// ============================================================
// Null ke saath comparison karte waqt JS bahut inconsistent behave karta hai
// Isliye ye cases AVOID karo practical code mein

console.log(null > 0);  // false → null → 0, 0 > 0 false
console.log(null == 0); // false → == mein null ko convert nahi kiya
console.log(null >= 0); // true  → null → 0, 0 >= 0 true ← WEIRD!
console.log(null < 1);  // true  → null → 0, 0 < 1 true

// 🤔 Kaise possible hai?
//    null >= 0 true hai lekin null > 0 bhi false hai aur null == 0 bhi false!
//    Reason: Relational operators (>, <, >=) mein null → 0 convert hota hai
//            Equality operator (==) mein null SIRF undefined ke equal hota hai
//            Isliye null == 0 → false

console.log(null == undefined); // true  → Sirf ye dono ek dusre ke equal hain
console.log(null === undefined); // false → Strict mein alag types hain


// ============================================================
// ❓ UNDEFINED COMPARISONS
// ============================================================

console.log(undefined > 0);  // false → undefined → NaN, NaN > 0 = false
console.log(undefined < 0);  // false → undefined → NaN, NaN < 0 = false
console.log(undefined == 0); // false → undefined sirf null ke equal hai, 0 ke nahi

// 💡 Rule: undefined ko kisi bhi number se compare karna hamesha false deta hai
//          Undefined aur null sirf ek dusre ke saath == karte hain


// ============================================================
// 🔒 STRICT EQUALITY ( === ) vs LOOSE EQUALITY ( == )
// ============================================================
// == (Loose)  → Sirf VALUE compare karta hai, type badal ke
// === (Strict) → VALUE aur TYPE dono compare karta hai (koi conversion nahi)

console.log("2" == 2);   // true  → "2" string ko 2 number mein convert kiya
console.log("2" === 2);  // false → "string" !== "number" → type alag hai
console.log(0 == false); // true  → false → 0, 0 == 0 = true
console.log(0 === false);// false → "number" !== "boolean" → type alag hai
console.log("" == false);// true  → dono 0/false bante hain
console.log("" === false);// false → type alag hai

// 🏆 BEST PRACTICE:
//    HAMESHA === (strict equality) use karo
//    == unexpected results de sakta hai (bugs ka source ban sakta hai)


// ============================================================
// 📌 OPERATORS QUICK REFERENCE TABLE
// ============================================================
//
//  | Operator | Name                | Example   | Result | Note               |
//  |----------|---------------------|-----------|--------|---------------------|
//  | >        | Greater than        | 5 > 3     | true   |                     |
//  | <        | Less than           | 3 < 5     | true   |                     |
//  | >=       | Greater or equal    | 3 >= 3    | true   |                     |
//  | <=       | Less or equal       | 3 <= 5    | true   |                     |
//  | ==       | Loose equal         | "2" == 2  | true   | Type convert hota   |
//  | !=       | Not equal           | 2 != 3    | true   |                     |
//  | ===      | Strict equal        | "2" === 2 | false  | Type bhi check hota |
//  | !==      | Strict not equal    | "2" !== 2 | true   | Type bhi check hota |
//
// ============================================================
// 💡 GOLDEN RULE:
//    → Hamesha === use karo == ki jagah
//    → null aur undefined ke saath comparisons avoid karo
//    → Mixed types (string vs number) compare mat karo
// ============================================================
