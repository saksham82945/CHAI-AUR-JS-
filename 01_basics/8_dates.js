// ============================================================
//  📅 DATES IN JAVASCRIPT — Complete Guide
// ============================================================
// JavaScript mein Date ek built-in object hai.
// Isse tum current date/time le sakte ho, format kar sakte ho,
// aur calculations bhi kar sakte ho (e.g., age calculator, countdown)
//
// Important: JS mein months 0-based hote hain!
//   0 = January, 1 = February, ..., 11 = December
// ============================================================


// ============================================================
// 1️⃣ CURRENT DATE & TIME — Date() Constructor
// ============================================================

let myDate = new Date();
// Date() current date aur time return karta hai

console.log(myDate);                // Full Date object
console.log(typeof myDate);        // "object" → Date bhi ek object type hai

// Different formats mein date dikhao:
console.log(myDate.toString());
// e.g. "Wed Jul 30 2026 01:15:32 GMT+0530 (India Standard Time)"
// → Poori date aur time ek readable string mein

console.log(myDate.toDateString());
// e.g. "Wed Jul 30 2026"
// → Sirf date (time nahi)

console.log(myDate.toTimeString());
// e.g. "01:15:32 GMT+0530 (India Standard Time)"
// → Sirf time (date nahi)

console.log(myDate.toISOString());
// e.g. "2026-07-29T19:45:32.000Z"
// → ISO 8601 format (APIs mein use hota hai, UTC time)

console.log(myDate.toLocaleDateString());
// e.g. "7/30/2026" (US format) ya "30/7/2026" (Indian format)
// → System locale ke hisaab se

console.log(myDate.toLocaleTimeString());
// e.g. "1:15:32 am"
// → Local time format

console.log(myDate.toLocaleString());
// e.g. "7/30/2026, 1:15:32 am"
// → Date + Time dono local format mein


// ============================================================
// 2️⃣ SPECIFIC DATE BANANA — Custom Date Create Karna
// ============================================================

// Method A: Numbers se (Year, Month, Day, Hour, Min, Sec)
// ⚠️ MONTH 0-BASED HAI: 0=Jan, 1=Feb, ..., 8=Sept, 11=Dec
let date1 = new Date(2023, 0, 23);          // 23 January 2023
let date2 = new Date(2023, 8, 5);           // 5 September 2023 (8 = Sept)
let date3 = new Date(2023, 8, 5, 14, 30);  // 5 Sept 2023, 2:30 PM
console.log(date1.toDateString()); // "Mon Jan 23 2023"
console.log(date2.toDateString()); // "Tue Sep 05 2023"

// Method B: String se (ISO format — YYYY-MM-DD)
// String mein MONTH 1-BASED hoti hai: "2023-08-15" = 15 August 2023
let date4 = new Date("2023-08-15");
console.log(date4.toDateString());    // "Tue Aug 15 2023"
console.log(date4.toLocaleString());  // "8/15/2023, 5:30:00 am"

// Method C: Full ISO string
let date5 = new Date("2023-08-15T14:30:00");
console.log(date5.toLocaleString()); // "8/15/2023, 2:30:00 pm"

// Method D: Milliseconds se (Unix timestamp)
let date6 = new Date(0);       // Unix Epoch: 1 Jan 1970 00:00:00 UTC
let date7 = new Date(1000000); // 1000000 milliseconds = 1000 seconds baad
console.log(date6.toISOString()); // "1970-01-01T00:00:00.000Z"


// ============================================================
// 3️⃣ TIMESTAMPS — Milliseconds mein Time
// ============================================================
// Timestamps Unix Epoch (1 January 1970) se milliseconds count karte hain
// Ye servers, databases, aur APIs mein date store karne ka standard hai

let myTimeStamp = Date.now();
console.log(myTimeStamp); // e.g. 1722284132000 (bahut badi sankhya)

// Milliseconds → Seconds mein convert karo:
console.log(Math.floor(Date.now() / 1000));
// e.g. 1722284132

// Kisi specific date ka timestamp:
let specificDate = new Date("2023-01-01");
console.log(specificDate.getTime()); // Uski date ka timestamp (milliseconds)

// 💡 Use case: Timestamps se do dates ka difference nikalo
let start = new Date("2023-01-01");
let end   = new Date("2023-12-31");
let diffMs = end.getTime() - start.getTime();
let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log(`Days between: ${diffDays}`); // "Days between: 364"


// ============================================================
// 4️⃣ DATE GET METHODS — Date ke Parts Alag Nikalo
// ============================================================

let newDate = new Date();

console.log(newDate.getFullYear());  // e.g. 2026 → Full 4-digit year
console.log(newDate.getMonth());     // e.g. 6 (July, 0-based!) → +1 karo human-readable ke liye
console.log(newDate.getMonth() + 1); // e.g. 7 → Actual month number
console.log(newDate.getDate());      // e.g. 30 → Month ka din (1-31)
console.log(newDate.getDay());       // e.g. 3 → Hafte ka din (0=Sun, 6=Sat)
console.log(newDate.getHours());     // e.g. 1 → Hour (0-23)
console.log(newDate.getMinutes());   // e.g. 15 → Minutes (0-59)
console.log(newDate.getSeconds());   // e.g. 32 → Seconds (0-59)
console.log(newDate.getTime());      // Timestamp in milliseconds

// getDay() ke values:
// 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(`Today is: ${days[newDate.getDay()]}`); // e.g. "Today is: Wednesday"


// ============================================================
// 5️⃣ DATE SET METHODS — Date ke Parts Change Karo
// ============================================================

let modDate = new Date();
modDate.setFullYear(2025);   // Year change karo
modDate.setMonth(0);         // Month → January (0-based)
modDate.setDate(15);         // Din → 15th
console.log(modDate.toDateString()); // "Wed Jan 15 2025"


// ============================================================
// 6️⃣ TOLOCALESTRING() WITH OPTIONS — Custom Formatting
// ============================================================
// toLocaleString() ke saath options pass karke powerful formatting milti hai

// Sirf din ka naam (full)
console.log(newDate.toLocaleString("default", { weekday: "long" }));
// e.g. "Wednesday"

// Sirf din ka naam (short)
console.log(newDate.toLocaleString("default", { weekday: "short" }));
// e.g. "Wed"

// Custom full format:
console.log(newDate.toLocaleString("en-IN", {
  weekday : "long",
  year    : "numeric",
  month   : "long",
  day     : "numeric",
  hour    : "2-digit",
  minute  : "2-digit"
}));
// e.g. "Wednesday, 30 July 2026 at 01:15 am"

// US format mein dikhao:
console.log(newDate.toLocaleString("en-US", {
  dateStyle: "full",
  timeStyle: "short"
}));
// e.g. "Wednesday, July 30, 2026 at 1:15 AM"


// ============================================================
// 💡 PRACTICAL EXAMPLES
// ============================================================

// Example 1: Age Calculator
function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today     = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  // Agar birthday is saal abhi nahi aayi to age - 1 karo
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
console.log(`Age: ${calculateAge("2000-05-15")} years`); // e.g. "Age: 26 years"


// Example 2: Days Until New Year
function daysUntilNewYear() {
  const today   = new Date();
  const newYear = new Date(today.getFullYear() + 1, 0, 1); // 1 Jan next year
  const diffMs  = newYear - today;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}
console.log(`Days until New Year: ${daysUntilNewYear()}`);


// ============================================================
// 📌 DATE METHODS QUICK REFERENCE TABLE
// ============================================================
//
//  | Method                | Kya return karta hai?           | Example result           |
//  |-----------------------|---------------------------------|--------------------------|
//  | new Date()            | Current date/time object        | Wed Jul 30 2026           |
//  | Date.now()            | Current timestamp (ms)          | 1722284132000            |
//  | .toString()           | Full readable string            | "Wed Jul 30 2026 01:15..." |
//  | .toDateString()       | Sirf date                       | "Wed Jul 30 2026"        |
//  | .toTimeString()       | Sirf time                       | "01:15:32 GMT+0530"      |
//  | .toISOString()        | ISO format (UTC)                | "2026-07-29T19:45:32Z"   |
//  | .toLocaleString()     | Local format                    | "7/30/2026, 1:15:32 am"  |
//  | .getFullYear()        | 4-digit year                    | 2026                     |
//  | .getMonth()           | Month (0-11, +1 karo)           | 6 (July)                 |
//  | .getDate()            | Month ka din (1-31)             | 30                       |
//  | .getDay()             | Week ka din (0=Sun, 6=Sat)      | 3 (Wednesday)            |
//  | .getHours()           | Hours (0-23)                    | 1                        |
//  | .getTime()            | Timestamp in ms                 | 1722284132000            |
//
// ============================================================
// ⚠️ KEY REMINDERS:
//   → new Date(year, month, day) mein MONTH 0-BASED hai!
//   → new Date("2023-08-15") mein MONTH 1-BASED hai!
//   → getMonth() ka result hamesha +1 karo human-readable ke liye
//   → getDay() → 0=Sunday se 6=Saturday
// ============================================================
