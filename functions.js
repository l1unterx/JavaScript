
// decalre functions here
function add(a, b) {
    return a + b;
}

// arrow function
const subtract = (a, b) => a - b;

// function expression
const multiply = function(a, b) {
    return a * b;
};


// anonymous functions 
setTimeout(function() {
    console.log("This is an anonymous function executed after 2 seconds");
}, 2000);


// function with default parameters
function divide(a, b = 1) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// function with callback
function operate(a, b, operation) {
    return operation(a, b);
}

// example usage of operate function
const result = operate(5, 3, add); // returns 8
const result2 = operate(5, 3, subtract); // returns 2
const result3 = operate(5, 3, multiply); // returns 15
const result4 = operate(5, 3, divide); // returns 1.6666666666666667

// function with closure
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log("Counter:", counter()); // 1
console.log("Counter:", counter()); // 2
console.log("Counter:", counter()); // 3

// function with recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5)); // 120

// function with async/await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// example usage of fetchData function
fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log("Fetched Data:", data))
    .catch(error => console.error("Error:", error));


// function with generator
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();
console.log("Generator Output:", generator.next().value); // 1
console.log("Generator Output:", generator.next().value); // 2
console.log("Generator Output:", generator.next().value); // 3
console.log("Generator Output:", generator.next().value); // undefined


