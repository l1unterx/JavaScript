// Mathematical Operators
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

x--; // Decrement operator
++x; // Increment operator
console.log("Decremented x:", x);

// binary operators
let f = 5; // 0101 in binary
let g = 3; // 0011 in binary
console.log("Bitwise AND:", f & g); // 0001 (1 in decimal)
console.log("Bitwise OR:", f | g); // 0111 (7 in decimal)
console.log("Bitwise XOR:", f ^ g); // 0110 (6 in decimal)
console.log("Bitwise NOT:", ~f); // 1010 (-6 in decimal)
console.log("Left Shift:", f << 1); // 1010 (10 in decimal)
console.log("Right Shift:", f >> 1); // 0010 (2 in decimal)

// logical operators
let h = true;
let i = false;
console.log("Logical AND:", h && i); // false
console.log("Logical OR:", h || i); // true
console.log("Logical NOT:", !h); // false
console.log("Logical XOR:", h ^ i); // true (since h and i are different)

// comparison operators
console.log("Equal to:", a == b); // false
console.log("Not equal to:", a != b); // true
console.log("Strict equal to:", a === b); // false
console.log("Strict not equal to:", a !== b); // true
console.log("Greater than:", a > b); // true
console.log("Less than:", a < b); // false
console.log("Greater than or equal to:", a >= b); // true
console.log("Less than or equal to:", a <= b); // false

// Assignment Operators
let e = 20;
e += 5; // e = e + 5
console.log("After addition assignment:", e);
e -= 3; // e = e - 3
console.log("After subtraction assignment:", e);
e *= 2; // e = e * 2
console.log("After multiplication assignment:", e);
e /= 4; // e = e / 4
console.log("After division assignment:", e);
e %= 3; // e = e % 3
console.log("After modulus assignment:", e);

// Ternary Operator
let j = 10;
let k = (j > 5) ? "Greater than 5" : "Less than or equal to 5";
console.log("Ternary Operator Result:", k);

// nullish Coalescing Operator
let l = null;
let m = l ?? "Default Value"; // m will be "Default Value" since l is null
console.log("Nullish Coalescing Operator Result:", m);

// Optional Chaining Operator
let n = { name: "Alice", address: { city: "New York" } };
console.log("Optional Chaining Result:", n?.address?.city); // "New York"
console.log("Optional Chaining with non-existent property:", n?.contact?.phone); // undefined

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // arr2 will be [1, 2, 3, 4, 5]
console.log("Spread Operator Result:", arr2);

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // obj2 will be { a: 1, b: 2, c: 3 }
console.log("Spread Operator with Objects Result:", obj2);

// Rest Operator
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Rest Operator Result:", sum(1, 2, 3, 4)); // 10

// Void Operator
function logMessage(message) {
    console.log("Log Message:", message);
}
console.log("Void Operator Result:", void logMessage("This is a message")); // undefined

// Comma Operator
let x = (1, 2, 3); // x will be assigned the value of the last expression, which is 3
console.log("Comma Operator Result:", x);

// Typeof Operator
console.log("Type of a:", typeof a); // number
console.log("Type of h:", typeof h); // boolean
console.log("Type of p:", typeof p); // object
console.log("Type of add function:", typeof add); // function

// instanceof Operator
console.log("Is p an instance of Object?", p instanceof Object); // true
console.log("Is add an instance of Function?", add instanceof Function); // true

// in Operator
console.log("Is 'name' in p?", 'name' in p); // true
console.log("Is 'greet' in r?", 'greet' in r); // true
console.log("Is 'age' in s?", 'age' in s); // false (s is an array, not an object)

// delete Operator
console.log("Before deletion, p:", p);
delete p.age; // Deletes the age property from object p
console.log("After deletion, p:", p);

// clone object using spread operator
let original = { name: "Bob", age: 30 };
let clone = { ...original };
console.log("Original Object:", original);
console.log("Cloned Object:", clone);

// clone array using spread operator
let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
console.log("Original Array:", originalArray);
console.log("Cloned Array:", clonedArray);

const objA = { x: 1, y: 2 };
const n = structureClone(objA);
console.log("Original Object:", objA);
console.log("Cloned Object using structureClone:", n);