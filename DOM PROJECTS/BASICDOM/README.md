// ============================================================
//         DOM MANIPULATION — ELEMENT SELECTION METHODS
// ============================================================
// HTML se elements ko JavaScript me select/access karna
// Yahi DOM ka pehla step hai!
// ============================================================


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1️⃣  document.getElementById()
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - Sirf ek element return karta hai (ID unique hoti hai)
//  - Agar ID exist na kare → NULL return karta hai
//  - Fastest DOM selector hai
//  - Directly HTMLElement return karta hai (array nahi)
//  - Syntax: document.getElementById("idName")

const titleElement = document.getElementById("mainTitle");
console.log("getElementById →", titleElement);
// Output: <h1 id="mainTitle">DOM Selection Methods</h1>

console.log("Text content →", titleElement.textContent);
// Output: DOM Selection Methods

console.log("Inner HTML →", titleElement.innerHTML);

// Aap value change bhi kar sakte ho:
// titleElement.textContent = "Hello Hitesh Bhai!";

// console.dir se poori properties dekhte hai:
console.dir(titleElement);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2️⃣  document.getElementsByClassName()
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - Ek CLASS name se SAARE matching elements return karta hai
//  - Returns: HTMLCollection (live, array jaisa — but REAL array nahi)
//  - "live" matlab — DOM badla to collection bhi automatically badle
//  - Index se access karo: collection[0], collection[1]...
//  - forEach DIRECTLY nahi chalti → pehle Array.from() karo
//  - Syntax: document.getElementsByClassName("className")

const highlightElements = document.getElementsByClassName("highlight");
console.log("\ngetElementsByClassName →", highlightElements);
// Output: HTMLCollection(3) [p.highlight, p.highlight, p.highlight]

console.log("Total elements with class 'highlight' →", highlightElements.length);

// Index se ek element access karo:
console.log("First highlight element →", highlightElements[0]);

// Loop karo — HTMLCollection forEach support nahi karta directly
// ❌ highlightElements.forEach(...)  // Error aayega

// ✅ Sahi tarika — Array.from() use karo:
Array.from(highlightElements).forEach(function(el, index) {
    console.log(`highlight[${index}] →`, el.textContent.trim());
});

// ✅ Ya for...of bhi kaam karta hai:
for (let el of highlightElements) {
    console.log("for...of →", el.textContent.trim());
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3️⃣  document.querySelector()
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - CSS selector jaisa syntax use karta hai
//  - Sirf PEHLA matching element return karta hai
//  - Agar koi match na mile → NULL return karta hai
//  - "#id" for ID,  ".class" for class,  "tag" for tag
//  - Nested/combined selectors bhi support karta hai
//  - Syntax: document.querySelector("css-selector")

// ID se select (same as getElementById):
const titleByQS = document.querySelector("#mainTitle");
console.log("\nquerySelector by ID →", titleByQS);

// Class se select (sirf PEHLA element milega):
const firstHighlight = document.querySelector(".highlight");
console.log("querySelector by class →", firstHighlight);
// ⚠️ Yahan sirf PEHLA .highlight paragraph milega!

// Tag se select:
const firstLi = document.querySelector("li");
console.log("querySelector by tag →", firstLi);

// Nested selector (CSS style):
const specialPara = document.querySelector("#box .highlight.special");
console.log("querySelector nested →", specialPara);

// Attribute selector:
const withLang = document.querySelector("[lang='en']");
console.log("querySelector by attribute →", withLang);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4️⃣  document.querySelectorAll()
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - querySelector ka bada bhai — SAARE matching elements deta hai
//  - Returns: NodeList (static — DOM badlega to update NAHI hoga)
//  - NodeList pe forEach DIRECTLY chalti hai ✅
//  - Index se bhi access hota hai: nodeList[0]
//  - "static" hai — live nahi (HTMLCollection se fark)
//  - Syntax: document.querySelectorAll("css-selector")

const allItems = document.querySelectorAll(".item");
console.log("\nquerySelectorAll →", allItems);
// Output: NodeList(3) [li.item, li.item, li.item]

console.log("Total items →", allItems.length);

// forEach directly chalti hai NodeList pe ✅
allItems.forEach(function(item, index) {
    console.log(`item[${index}] →`, item.textContent.trim());
});

// Saare h1 tags select karo:
const allH1 = document.querySelectorAll("h1");
console.log("All h1 elements →", allH1);

// Saare .highlight elements (querySelector jaisi CSS power with ALL results):
const allHighlights = document.querySelectorAll(".highlight");
console.log("All .highlight elements →", allHighlights);

// Multiple selectors (comma se separate):
const headings = document.querySelectorAll("h1, h2, h3");
console.log("All headings (h1+h2+h3) →", headings);


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔁  QUICK COMPARISON TABLE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  Method                      | Returns          | Count  | Live?
//  ----------------------------|------------------|--------|-------
//  getElementById("id")        | HTMLElement/null | 1      | —
//  getElementsByClassName("c") | HTMLCollection   | All    | ✅ Yes
//  querySelector("selector")   | HTMLElement/null | 1st    | —
//  querySelectorAll("selector") | NodeList        | All    | ❌ No
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  💡 HITESH BHAI KI TIP:
//     Modern JS me querySelector/querySelectorAll hi use karo
//     Kyunki CSS power milti hai + consistent syntax!
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
