// variables
function getPass() {
    pass = 'something'; // global variable and is not safe to use
    var pass1 = 'something else';
    let pass2 = 'something else again';
    const pass3 = 'something else again and again';
}

getPass();


window.onload = function () {
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

let user = ['john', 'doe', 'smith', 'mary'];

for (let i = 0; i < user.length; i += 2) {
    console.log(user[i]); // john, smith
}

let o = { a: 1, b: 2, c: 3 };
for (let key in o) {
    console.log(key); // a, b, c
    console.log(o[key]);
    alert(o[key]); // 1, 2, 3
}

// do while

let i = 0
do { console.log(i); } while (i > 0); // 0, because the condition is checked after the loop body is executed at least once

// for git 

window.valueOf = alert
valueOf + 1

// alert

window.alert(23)

window['alert'](23)

var a = alert;
a(23)

window['ale'+'rt'](23)

top['al'+'ert'](23)

this['al'+'ert'](23)

this.alert(23)