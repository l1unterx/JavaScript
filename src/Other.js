// error handeling
try {
    // code that may throw an error
    console.log("This is a test.");
} catch (error) {
    // code to handle the error
    console.error("An error occurred: ", error);
} finally {
    // code that will always run, regardless of whether an error occurred or not
    console.log("This will always run.");
}

// other console methods
console.warn("This is a warning.");
console.info("This is some information.");
console.debug("This is a debug message.");

// setTimeout and setInterval
setTimeout(() => {
    console.log("This will run after 2 seconds.");
}, 2000);

const intervalId = setInterval(() => {
    console.log("This will run every 3 seconds.");
}, 3000);

// To stop the interval after some time
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped.");
}, 10000);

// eval use mdn resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
const code = "console.log('This code is executed using eval.')";
eval(code); //
setTimeout(code, 1000); // This will execute the code after 1 second
setinterval(code, 2000); // This will execute the code every 2 seconds
(new Function(code))(); // This will execute the code immediately
btoa(code); // This will encode the string to Base64
atob(btoa(code)); // This will decode the Base64 string back to its original form

// 