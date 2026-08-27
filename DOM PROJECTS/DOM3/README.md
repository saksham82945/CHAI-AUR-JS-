// ============================================================
//         DOM3 — STYLES, ATTRIBUTES & EVENTS
// ============================================================
// HTML se elements ko JavaScript me select/access karna seekha tha
// Ab seekhenge: unhe CHANGE karna, CONTROL karna, aur REACT karna
// ============================================================


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1️⃣  ELEMENT STYLES — element.style.property
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - JS me CSS property names camelCase me likhte hain
//  - CSS:  background-color  →  JS: backgroundColor
//  - CSS:  border-radius     →  JS: borderRadius
//  - CSS:  font-size         →  JS: fontSize
//  - CSS:  z-index           →  JS: zIndex
//  - Values string hoti hain — units ke saath likhna zaroori hai:
//    "200px", "#fff", "2rem", "50%"
//  - Style set karna: element.style.propertyName = "value"
//  - Style remove karna: element.style.propertyName = ""  ← empty string!
//  - Saari inline styles ek baar me hatana: element.removeAttribute("style")

const box = document.getElementById("demoBox");

// ✅ Color change karna
box.style.backgroundColor = "#6366f1"; // indigo color
box.style.color = "#ffffff";           // white text

// ✅ Size change karna
box.style.width = "250px";
box.style.height = "110px";
box.style.fontSize = "1.2rem";         // font-size → fontSize

// ✅ Shape change karna
box.style.borderRadius = "50px";
box.style.boxShadow = "0 0 20px #f97316"; // box-shadow → boxShadow

// ✅ Style hatana — empty string assign karo
box.style.backgroundColor = ""; // reset ho gaya!
box.style.width = "";           // default pe wapas

// ⚠️ GALTI — Units mat bhoolna!
// box.style.width = 200;     // ❌ WRONG — number nahi, string chahiye
// box.style.width = "200px"; // ✅ CORRECT


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2️⃣  ATTRIBUTES — getAttribute / setAttribute / removeAttribute
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - HTML me har element ke attributes hote hain: src, href, id, class, alt, etc.
//  - getAttribute("name")   → attribute ki value padhna
//  - setAttribute("n","v")  → attribute set ya update karna
//  - removeAttribute("n")   → attribute delete karna
//  - hasAttribute("n")      → check — true/false return karta hai
//  - data-* attributes:     → apna custom data store karo
//    <img data-category="landscape"> → img.dataset.category → "landscape"

const img = document.getElementById("attrImg");

// ✅ getAttribute — attribute padhna
const src     = img.getAttribute("src");       // image ka url
const altText = img.getAttribute("alt");       // alt text
const width   = img.getAttribute("width");     // width attribute
// Agar attribute exist na kare → null return karta hai

// Custom data attribute padhna:
const category = img.getAttribute("data-category"); // "landscape"
// Ya shorthand:
const sameThing = img.dataset.category;             // "landscape" — same result!

// ✅ setAttribute — attribute set/update karna
img.setAttribute("src", "https://new-image-url.com/photo.jpg"); // src badal diya
img.setAttribute("alt", "Naya alt text");    // alt update kiya
img.setAttribute("data-photographer", "Hitesh"); // custom attr add kiya

// ✅ removeAttribute — attribute delete karna
img.removeAttribute("alt"); // alt gone!

// ✅ hasAttribute — check karo exist karta hai ya nahi
const hasAlt = img.hasAttribute("alt"); // false — kyunki abhi remove kiya
console.log("alt exists?", hasAlt);     // false


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3️⃣  CLASSLIST — add / remove / toggle / contains
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - classList = element ke saare CSS classes ka manager
//  - .add("class")         → class add karo (already hai to kuch nahi hoga)
//  - .remove("class")      → class hatao (nahi hai to error nahi aayega)
//  - .toggle("class")      → hai to hatao, nahi hai to lagao  ← MOST USEFUL!
//  - .contains("class")    → boolean — class hai ya nahi check karo
//  - .replace("old","new") → ek class ki jagah doosri lagao
//  - Array.from(el.classList) → sabhi classes ek array me pao
//
//  💡 WHY classList over style.property?
//     CSS classes reusable hain, maintainable hain, separation of concerns!
//     style.property inline hota hai — hard to manage in big projects.

const classBox = document.getElementById("classBox");

// ✅ classList.add() — class add karna
classBox.classList.add("highlight-class");
// Ab element ka class: "highlight-class"

// ✅ classList.remove() — class hatana
classBox.classList.remove("highlight-class");
// Ab class chali gayi

// ✅ classList.toggle() — magic method — add/remove automatically!
classBox.classList.toggle("border-class");
// First click: class add hogi
// Second click: class remove hogi
// ← yahi reason hai toggle bahut use hota hai dark mode jaise features me

// ✅ classList.contains() — check karo
const hasHighlight = classBox.classList.contains("highlight-class"); // false
console.log("highlight class hai?", hasHighlight); // false

// ✅ classList.replace() — swap classes
classBox.classList.replace("border-class", "highlight-class");
// border-class → highlight-class

// ✅ Saari classes dekhna
const allClasses = Array.from(classBox.classList);
console.log("Saari classes →", allClasses); // ["highlight-class"]


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4️⃣  EVENTS — addEventListener
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - Events = user ki actions pe kuch karna
//  - addEventListener("event", callbackFn) → BEST way to attach events
//  - Ek element pe MULTIPLE events attach kar sakte ho
//  - Event Object (e) har callback me automatically aata hai
//  - e.type   → event ka naam ("click", "keyup"...)
//  - e.target → jis element pe event hua (useful in event delegation)
//  - e.key    → keyboard events ke liye: "Enter", "Escape", "a", "1"...
//
//  ❌ AVOID:  <button onclick="doSomething()">   ← HTML me JS likhna bad practice
//  ✅ PREFER: addEventListener — JS alag, HTML alag!

const eventBox = document.getElementById("eventBox");
const eventInput = document.getElementById("eventInput");

// ✅ CLICK EVENT — Mouse click pe kuch karo
eventBox.addEventListener("click", function(e) {
    console.log("Event type →", e.type);   // "click"
    console.log("Target →", e.target);     // <div id="eventBox">
    console.log("Target ID →", e.target.id); // "eventBox"
    eventBox.textContent = "Clicked!";
});

// ✅ MOUSEOVER — Mouse hover pe kuch karo
eventBox.addEventListener("mouseover", function(e) {
    eventBox.style.border = "2px solid #f97316";
});

// ✅ MOUSEOUT — Mouse hata lo to kuch karo
eventBox.addEventListener("mouseout", function(e) {
    eventBox.style.border = "";
});

// ✅ KEYUP — Keyboard key ko press karke uthane pe
eventInput.addEventListener("keyup", function(e) {
    console.log("Key pressed →", e.key);        // "Enter", "a", "Backspace"...
    console.log("Input value →", e.target.value); // input box me kya likha hai

    // Enter key detect karna:
    if (e.key === "Enter") {
        console.log("Enter dabaya! Submit karo:", e.target.value);
    }

    // Escape key detect karna:
    if (e.key === "Escape") {
        e.target.value = ""; // input clear karo
    }
});

// ✅ FOCUS — Element pe focus aane pe (input click karo)
eventInput.addEventListener("focus", function(e) {
    console.log("Focus aa gaya input pe");
    eventInput.style.border = "1px solid #f97316";
});

// ✅ BLUR — Focus chala jaane pe
eventInput.addEventListener("blur", function(e) {
    console.log("Focus chala gaya");
    eventInput.style.border = "";
});

// ✅ DOUBLE CLICK EVENT
eventBox.addEventListener("dblclick", function(e) {
    console.log("Double click! e.type →", e.type); // "dblclick"
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  📋 COMMON EVENT NAMES — Reference List
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  🖱️  Mouse Events:
//      "click"       → single click
//      "dblclick"    → double click
//      "mouseover"   → mouse hover karna
//      "mouseout"    → mouse hatana
//      "mousedown"   → mouse button dabana (before release)
//      "mouseup"     → mouse button uthana
//      "mousemove"   → mouse move karna
//
//  ⌨️  Keyboard Events:
//      "keydown"     → key dabane pe (before keyup)
//      "keyup"       → key uthane pe
//      "keypress"    → (deprecated — keydown use karo)
//
//  📝  Input/Form Events:
//      "input"       → value change hote hi (real-time)
//      "change"      → value change hone ke baad focus hatane pe
//      "focus"       → element pe focus aana
//      "blur"        → element se focus jaana
//      "submit"      → form submit hone pe
//      "reset"       → form reset hone pe
//
//  🌐  Window Events:
//      "load"        → page puri load ho gayi
//      "resize"      → window resize hui
//      "scroll"      → page scroll hua


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔁  QUICK COMPARISON TABLE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  Topic          | Method/Property           | Use Case
//  ---------------|---------------------------|---------------------------
//  Style          | el.style.backgroundColor  | Direct inline style set
//  Style Reset    | el.style.property = ""    | Inline style hatana
//  Attribute Read | el.getAttribute("src")    | Koi bhi HTML attribute padhna
//  Attribute Set  | el.setAttribute("id","x") | Attribute set/update karna
//  Attribute Del  | el.removeAttribute("alt") | Attribute delete karna
//  Attr Check     | el.hasAttribute("n")      | Exist karta hai? (boolean)
//  Data Attr      | el.dataset.name           | data-* attribute shorthand
//  Class Add      | el.classList.add("cls")   | CSS class add karna
//  Class Remove   | el.classList.remove("cls")| CSS class hatana
//  Class Toggle   | el.classList.toggle("cls")| Add/remove — toggle
//  Class Check    | el.classList.contains("c")| Class hai? (boolean)
//  Class Swap     | el.classList.replace(o,n) | Old class ko new se replace
//  Event          | addEventListener("click") | User action pe response
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  💡 HITESH BHAI KI TIP:
//     1. Style ke liye ALWAYS classList prefer karo — maintainable!
//     2. Events ALWAYS addEventListener se lagao — HTML me onclick mat likho!
//     3. e.target use karo — event delegation ke liye powerful tool hai!
//     4. data-* attributes bahut useful hain — custom data store karne ke liye
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
