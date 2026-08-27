// ============================================================
//         DOM2 — ELEMENT PROPERTIES
// ============================================================
// DOM1 me select karna seekha — getElementById, querySelector, etc.
// DOM2 me seekhenge — selected element ki PROPERTIES kya hoti hain
// ============================================================


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1️⃣  innerHTML vs textContent vs innerText
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - innerHTML  → HTML tags ke saath content read/write karo
//  - textContent → sirf text, koi HTML nahi, hidden text bhi include karta hai
//  - innerText  → sirf visible text (CSS display:none wala nahi aata)
//  - ⚠️ innerHTML se user input inject mat karo — XSS attack ka risk!
//  - ✅ Safe: el.textContent = userInput  (HTML parse nahi hoti)

let h1 = document.querySelector("h1");

// ✅ innerHTML — HTML ke saath content set karna
h1.innerHTML = "<i> Hey DOM2! </i>"; // <i> tag work karega

// ✅ textContent — sirf text (HTML ignore hogi)
// h1.textContent = "<i> Hey DOM2! </i>"; // <i> tag as plain text show hoga

// Difference dekhna console me:
console.log("innerHTML    →", h1.innerHTML);    // <i> Hey DOM2! </i>
console.log("textContent  →", h1.textContent);  // " Hey DOM2! "
console.log("innerText    →", h1.innerText);    // " Hey DOM2! "


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2️⃣  ELEMENT IDENTITY PROPERTIES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - tagName   → kaunsa tag hai (UPPERCASE me aata hai)
//  - id        → element ka id attribute
//  - className → element ke saare class names (ek string me)
//  - classList → classes ka object (add/remove/toggle ke liye — DOM3 me)

console.log("tagName   →", h1.tagName);    // "H1"
console.log("id        →", h1.id);         // "" (koi id nahi)
console.log("className →", h1.className);  // "abcd"


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3️⃣  VISIBILITY PROPERTIES — hidden, style.display
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - hidden = true  → element invisible ho jaata hai (space bhi nahi leta)
//  - hidden = false → element wapas visible
//  - hidden property HTML me bhi use ho sakti hai: <h1 hidden>
//  - Yeh DOM me visibility control karne ka simple tarika hai
//  - Console me bhi reflect hota hai (try karo Elements tab me!)

h1.hidden = true;  // h1 disappear ho gaya!
console.log("h1.hidden →", h1.hidden); // true

// Wapas dikhana:
h1.hidden = false; // h1 wapas aa gaya


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4️⃣  console.dir() — Poori properties dekhna
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - console.log(el)  → element ka HTML dikhata hai
//  - console.dir(el)  → element ki SAARI JavaScript properties dikhata hai
//  - console.dir use karo jab explore karna ho — interview preparation!

console.log("console.log →", h1);  // HTML tag show karega
console.dir(h1);                   // Object ki tarah saari properties!


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔁  QUICK COMPARISON TABLE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  Property     | Read/Write | Returns              | Use
//  -------------|------------|----------------------|------------------
//  innerHTML    | Read/Write | HTML string          | HTML ke saath content
//  textContent  | Read/Write | Plain text           | Safe text manipulation
//  innerText    | Read/Write | Visible text only    | User-visible text
//  tagName      | Read only  | "H1", "DIV"...       | Kaunsa tag hai
//  id           | Read/Write | "myId"               | Element ka ID
//  className    | Read/Write | "class1 class2"      | Saari classes (string)
//  hidden       | Read/Write | true / false         | Visibility toggle
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  💡 HITESH BHAI KI TIP:
//     innerHTML use karo sirf apna content set karne ke liye
//     User ka input NEVER innerHTML me daalo — textContent use karo!
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
