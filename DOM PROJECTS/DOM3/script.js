// ============================================================
//         DOM3 — STYLES, ATTRIBUTES & EVENTS
// ============================================================
// Pichle chapters me: Element Selection (DOM1), innerHTML/hidden (DOM2)
// Ab seekhenge: Style change, getAttribute/setAttribute, classList, Events
// ============================================================


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1️⃣  ELEMENT STYLES — element.style.property
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - JS me CSS property names camelCase me likhte hain
//  - CSS:  background-color  →  JS: backgroundColor
//  - CSS:  border-radius     →  JS: borderRadius
//  - CSS:  font-size         →  JS: fontSize
//  - Values string hoti hain (units ke saath): "200px", "#fff", "2rem"
//  - Syntax: element.style.propertyName = "value"

const box = document.getElementById("demoBox");

function changeColor() {
    // ✅ CSS background-color → JS backgroundColor (camelCase!)
    box.style.backgroundColor = "#6366f1"; // indigo
    box.style.color = "#fff";
    logAction("🎨 style.backgroundColor = '#6366f1'");
}

function changeSize() {
    // ✅ Width aur height change karna
    box.style.width = "250px";
    box.style.height = "110px";
    box.style.fontSize = "1.2rem"; // CSS: font-size → JS: fontSize
    logAction("📐 style.width='250px', style.height='110px'");
}

function roundCorners() {
    // ✅ CSS border-radius → JS borderRadius
    box.style.borderRadius = "50px";
    box.style.boxShadow = "0 0 20px #f97316"; // CSS: box-shadow → JS: boxShadow
    logAction("⭕ style.borderRadius='50px' + boxShadow added");
}

function resetBox() {
    // ✅ Style remove karne ke liye empty string assign karo
    box.style.backgroundColor = "";
    box.style.width = "";
    box.style.height = "";
    box.style.borderRadius = "";
    box.style.fontSize = "";
    box.style.color = "";
    box.style.boxShadow = "";
    // 💡 TIP: element.removeAttribute("style") se SAARI inline styles ek baar me hata sakte ho
    logAction("🔄 All inline styles reset (empty string assign kiya)");
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2️⃣  ATTRIBUTES — getAttribute / setAttribute / removeAttribute
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - getAttribute("attrName")   → attribute ki VALUE padhna
//  - setAttribute("name", val)  → attribute set/update karna
//  - removeAttribute("name")    → attribute delete karna
//  - hasAttribute("name")       → check karo exist karta hai ya nahi (true/false)
//  - data-* attributes custom data store karne ke liye use hote hain
//  - Syntax: element.getAttribute("src")

const img = document.getElementById("attrImg");
const attrOutput = document.getElementById("attrOutput");

function readAttr() {
    // ✅ getAttribute se values padhna
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    const category = img.getAttribute("data-category"); // custom data attribute

    attrOutput.innerHTML = `
        <div>📖 src = "${src.substring(0, 50)}..."</div>
        <div>📖 alt = "${alt}"</div>
        <div>📖 data-category = "${category}"</div>
    `;
    logAction("getAttribute('src'), getAttribute('alt'), getAttribute('data-category')");
}

function changeAttr() {
    // ✅ setAttribute se value update karna
    img.setAttribute("src", "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=200&q=80");
    img.setAttribute("alt", "Changed photo!");
    attrOutput.innerHTML = `<div>✅ setAttribute ne src aur alt dono badal diye!</div>`;
    logAction("setAttribute('src', newUrl) — image source change ho gaya");
}

function addDataAttr() {
    // ✅ Custom data attributes add karna (data-* pattern)
    img.setAttribute("data-photographer", "Hitesh Sir");
    img.setAttribute("data-year", "2024");

    // dataset property se bhi read kar sakte ho:
    attrOutput.innerHTML = `
        <div>➕ data-photographer = "${img.dataset.photographer}"</div>
        <div>➕ data-year = "${img.dataset.year}"</div>
        <div style="color:#888">💡 img.dataset.photographer se bhi read hota hai!</div>
    `;
    logAction("setAttribute('data-photographer', 'Hitesh Sir') — custom data-attr");
}

function removeAttr() {
    // ✅ removeAttribute se delete karna
    img.removeAttribute("alt");
    const hasAlt = img.hasAttribute("alt"); // false hoga
    attrOutput.innerHTML = `
        <div>🗑️ alt attribute remove kar diya!</div>
        <div>🔍 hasAttribute('alt') = ${hasAlt}</div>
    `;
    logAction("removeAttribute('alt') — attribute delete ho gaya");
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3️⃣  CLASSLIST — add / remove / toggle / contains
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - classList ek object hai jo element ke saare classes manage karta hai
//  - .add("class")       → class add karo
//  - .remove("class")    → class remove karo
//  - .toggle("class")    → agar hai to hatao, nahi hai to lagao
//  - .contains("class")  → check karo class hai ya nahi (true/false)
//  - .replace("old","new") → ek class ko doosri se replace karo
//  - ✅ BEST PRACTICE: Style changes ke liye classList use karo, not style.property directly!
//    Kyunki CSS me define classes maintainable hoti hain

const classBox = document.getElementById("classBox");
const classOutput = document.getElementById("classOutput");

function addClass() {
    // ✅ classList.add()
    classBox.classList.add("highlight-class");
    showCurrentClasses();
    logAction("classList.add('highlight-class')");
}

function removeClass() {
    // ✅ classList.remove()
    classBox.classList.remove("highlight-class");
    showCurrentClasses();
    logAction("classList.remove('highlight-class')");
}

function toggleBorder() {
    // ✅ classList.toggle() — baar baar click karo, toggle hoga
    classBox.classList.toggle("border-class");
    showCurrentClasses();
    logAction("classList.toggle('border-class') — baar baar click karo!");
}

function toggleLarge() {
    // ✅ toggle from another function — same power
    classBox.classList.toggle("large-text");
    showCurrentClasses();
    logAction("classList.toggle('large-text')");
}

function checkClass() {
    // ✅ classList.contains() — boolean check
    const has = classBox.classList.contains("highlight-class");
    classOutput.textContent = `🔍 classList.contains('highlight-class') → ${has}`;
    logAction(`classList.contains('highlight-class') = ${has}`);
}

function showCurrentClasses() {
    // classList ko array me convert karke dekhna
    const classes = Array.from(classBox.classList);
    classOutput.textContent = `📋 Current classes: [${classes.join(", ")}]`;
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4️⃣  EVENTS — addEventListener
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📝 NOTES:
//  - Events = user ke actions (click, hover, type, scroll...)
//  - addEventListener(eventName, callbackFunction) — best way
//  - Event Object (e) automatically milta hai callback me
//  - e.type     → event ka naam ("click", "keyup"...)
//  - e.target   → jis element pe event hua
//  - e.key      → keyboard ke liye — kaunsi key press hui
//  - ❌ Purana tarika: onclick="doSomething()" — avoid karo HTML me
//  - ✅ Sahi tarika: addEventListener — separation of concerns!
//  - Ek element pe MULTIPLE events attach kar sakte ho!

const eventBox = document.getElementById("eventBox");
const eventInput = document.getElementById("eventInput");
const eventLog = document.getElementById("eventLog");

// ✅ CLICK EVENT
eventBox.addEventListener("click", function(e) {
    // e.target = jis element pe click hua
    eventBox.style.background = "#f97316";
    eventBox.style.color = "#fff";
    eventBox.textContent = "✅ Click ho gaya!";
    logAction(`🖱️ click event — e.target.id = "${e.target.id}"`);

    setTimeout(() => {
        eventBox.style.background = "";
        eventBox.style.color = "";
        eventBox.textContent = "👆 Kuch bhi karo yahan...";
    }, 1000);
});

// ✅ MOUSEOVER EVENT
eventBox.addEventListener("mouseover", function(e) {
    eventBox.style.borderColor = "#f97316";
    logAction(`🐭 mouseover — mouse aa gaya box pe`);
});

// ✅ MOUSEOUT EVENT
eventBox.addEventListener("mouseout", function(e) {
    eventBox.style.borderColor = "";
    logAction(`🐭 mouseout — mouse chala gaya`);
});

// ✅ KEYUP EVENT — keyboard events input pe
eventInput.addEventListener("keyup", function(e) {
    // e.key = kaunsi key press hui
    // e.target.value = input me kya type kiya
    logAction(`⌨️ keyup — key: "${e.key}" | value: "${e.target.value}"`);

    // Enter press hone pe event
    if (e.key === "Enter") {
        logAction(`✅ Enter dabaya! Input: "${e.target.value}"`);
    }
});

// ✅ FOCUS & BLUR EVENTS
eventInput.addEventListener("focus", function() {
    logAction("🎯 focus — input box pe click kiya (focus aya)");
});

eventInput.addEventListener("blur", function() {
    logAction("💨 blur — input se focus chala gaya (blur hua)");
});


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  Helper Function — Event Log me entries dikhana
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function logAction(message) {
    const time = new Date().toLocaleTimeString();
    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.innerHTML = `${message} <span>[${time}]</span>`;
    eventLog.prepend(entry); // Latest top pe dikhao
    console.log(`[DOM3 LOG] ${message}`);
}

function clearLog() {
    eventLog.innerHTML = '<div class="log-entry">🟢 Log cleared...</div>';
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  🔁  QUICK COMPARISON TABLE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//
//  Topic          | Method/Property           | Use Case
//  ---------------|---------------------------|---------------------------
//  Style          | el.style.backgroundColor  | Direct inline style change
//  Attribute Read | el.getAttribute("src")    | Koi bhi HTML attribute padhna
//  Attribute Set  | el.setAttribute("id","x") | Attribute set/update karna
//  Attribute Del  | el.removeAttribute("alt") | Attribute delete karna
//  Class Add      | el.classList.add("cls")   | CSS class add karna
//  Class Remove   | el.classList.remove("cls")| CSS class hatana
//  Class Toggle   | el.classList.toggle("cls")| Add/remove — dono baar baar
//  Class Check    | el.classList.contains("c")| Check karo class hai ya nahi
//  Event          | addEventListener("click") | User action pe response
//
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  💡 HITESH BHAI KI TIP:
//     Style changes ke liye ALWAYS classList prefer karo
//     Kyunki CSS class = maintainable, reusable, readable!
//     style.property = quick hack ke liye theek hai
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
