// =====================================================
// CONTROL FLOW - SWITCH STATEMENT
// =====================================================
// A switch statement is an alternative to a long if/else if chain.
// It evaluates an expression and compares it to different "cases".

// ─────────────────────────────────────────────────
// BASIC SYNTAX
// ─────────────────────────────────────────────────
// switch (key) {
//     case value1:
//         // code to execute if key === value1
//         break;
//     case value2:
//         // code to execute if key === value2
//         break;
//     default:
//         // code to execute if NO case matches
//         break;
// }

// ─────────────────────────────────────────────────
// PRACTICAL EXAMPLES
// ─────────────────────────────────────────────────

// Example 1: Matching Numbers
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break; // break is CRUCIAL! It stops execution here.
    case "april":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}

// ─────────────────────────────────────────────────
// THE "FALL-THROUGH" GOTCHA (Why 'break' is important)
// ─────────────────────────────────────────────────
// If you omit the 'break' statement, the switch will execute the matching case
// AND EVERY CASE AFTER IT until it hits a break or the end of the switch block.
// Note: It does NOT execute the default block during a fall-through in modern JS (unless it falls into it directly or you place default before break).
// Actually, it executes ALL code below the matched case until a break is found.

const day = 2

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); // Matches this!
        // oops! I forgot the break statement here
    case 3:
        console.log("Wednesday"); // This gets executed too! (Fall-through)
        break; // Stops here
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid day");
        break;
}
// Output will be:
// Tuesday
// Wednesday

// ─────────────────────────────────────────────────
// MULTIPLE CASES, SAME OUTCOME
// ─────────────────────────────────────────────────
// You can intentionally use fall-through when multiple cases should do the same thing:
const animal = "Dog"

switch (animal) {
    case "Cow":
    case "Giraffe":
    case "Dog":
    case "Pig":
        console.log("This animal will go on Noah's Ark.");
        break;
    case "Dinosaur":
    default:
        console.log("This animal will not.");
}
