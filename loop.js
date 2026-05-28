// while

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// do while

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);

// for

for (let k = 0; k < 5; k++) {
  console.log(k);
}

// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

// for in

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
  console.log(key, obj[key]);
} 


// map 
const arr1 = [1, 2, 3, 4, 5];

const squared = arr1.map(num => num * num);

console.log(squared);


// break and continue
for (let l = 0; l < 10; l++) {
  if (l === 5) {
    break; // exit the loop when l is 5
  }
  console.log(l);
}

for (let m = 0; m < 10; m++) {
  if (m % 2 === 0) {
    continue; // skip even numbers
  }
  console.log(m);
}

// nested loops

for (let n = 0; n < 3; n++) {
  for (let o = 0; o < 3; o++) {
    console.log(`n: ${n}, o: ${o}`);
  }
}  

// for each

const arr2 = [1, 2, 3, 4, 5];

arr2.forEach(num => {
  console.log(num);
});