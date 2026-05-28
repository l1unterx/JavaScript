// Variables
let x = 5;
const y = 10;
var z = 15; // use hoisting, z can be used before declaration (not recommended)
a = 20; // Implicit global variable (not recommended)
// window.a = 20; // Explicitly creating a global variable (not recommended)

// Reassigning variables
x = 20; // Allowed, x is declared with let
// y = 25; // Not allowed, y is declared with const
z = 30; // Allowed, z is declared with var

// Outputting variables
console.log("Value of x:", x);
console.log("Value of y:", y);
console.log("Value of z:", z);

// Variable scope
function testScope() {
    let a = 1; // Local variable
    var b = 2; // Local variable
    console.log("Inside function - a:", a);
    console.log("Inside function - b:", b);
}

testScope();
// console.log("Outside function - a:", a); // Not allowed, a is not defined outside the function
// console.log("Outside function - b:", b); // Not allowed, b is not defined outside the function