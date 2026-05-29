// variables
function getPass(){
    pass = 'something'; // global variable and is not safe to use
    var pass1 = 'something else';
    let pass2 = 'something else again';
    const pass3 = 'something else again and again';
}

getPass();


window.onload = function(){
    alert(pass); //show the secret becuse it is a global variable
}

// truthy and falsy values
// truthy like true, 1, '0', 'false', [], {}
// falsy like false, 0, '', null, undefined, NaN, -0

console.log(Boolean('')); // false
console.log(Boolean('0'));

// nullish coalescing operator
let user;
let defaultUser = 'John Doe';

let currentUser = user ?? defaultUser; // if user is null or undefined, use defaultUser
console.log(currentUser); // John Doe