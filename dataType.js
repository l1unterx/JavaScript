// Template Literals Strings
a = "hello world"
b = 'hello world'
c = `${a}`
//alert(c)

// Number
d = 10  // Int 2 ^ 53
e = 10.5 // Float
f = 1e6 // Exponential
g = 0b1010 // Binary
h = 0o12 // Octal
i = 0xA // Hexadecimal
j = 1000000000n // BigInt

//alert(i)

// Boolean
k = true
l = false
//alert(k)

// Null and Undefined
m = null // 1, true, 'hello', [], {}, function(){} are truthy values
n = undefined // 0, false, '', null, undefined, NaN are falsy values

//alert(m)
// Symbol
o = Symbol('description') // unique and immutable value

//alert(o) 

// Object
p = {name: 'John', age: 30}
r = { name: 'John', age: 30, greet: function() { return 'Hello' } }

// alert(p.name)
// alert(r.greet())

// array
s = [1, 2, 3, 4, 5]
t = [1, 'hello', true, null, undefined, {name: 'John'}, [1, 2, 3], function() { return 'Hello' }]

// alert(s[0])
// alert(t[5].name)
// alert(t[7]())

// Function
function add(a, b) {
    return a + b
}

u = function(a, b) {
    return a * b
}

u2 = (a, b) => a * b

// alert(add(2, 3))
// alert(u(2, 3))
// alert(u2(2, 3))  