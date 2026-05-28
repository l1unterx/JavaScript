// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

const student1 = new Student('Bob', 20, 'A');
student1.greet(); // Output: Hello, my name is Bob and I am 20 years old.
student1.study(); // Output: Bob is studying.

// encapsulation
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('Insufficient funds');
        } else {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new BankAccount(1000);
account1.deposit(500); // Output: Deposited: 500. New balance: 1500
account1.withdraw(200); // Output: Withdrew: 200. New balance: 1300
console.log(account1.getBalance()); // Output: 1300     

// polymorphism
class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat meows');
    }
}

const dog = new Dog();
const cat = new Cat();

dog.speak(); // Output: Dog barks
cat.speak(); // Output: Cat meows

// abstraction
class Shape {
    area() {
        throw new Error('Method "area()" must be implemented.');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(`Area of circle: ${circle.area()}`); // Output: Area of circle: 78.53981633974483
console.log(`Area of rectangle: ${rectangle.area()}`); // Output: Area of rectangle: 24

// encapsulation with private fields
class Counter {
    #count;

    constructor() {
        this.#count = 0;
    }

    increment() {
        this.#count++;
        console.log(`Count: ${this.#count}`);
    }

    decrement() {
        this.#count--;
        console.log(`Count: ${this.#count}`);
    }

    getCount() {
        return this.#count;
    }
}

const counter = new Counter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
console.log(counter.getCount()); // Output: 1 

// static methods and properties
class MathUtils {
    static pi = 3.14159;

    static calculateCircleArea(radius) {
        return MathUtils.pi * radius * radius;
    }
}

console.log(MathUtils.pi); // Output: 3.14159
console.log(MathUtils.calculateCircleArea(5)); // Output: 78.53975 

// method chaining
class Calculator {
    constructor() {
        this.value = 0;
    }

    add(num) {
        this.value += num;
        return this;
    }

    subtract(num) {
        this.value -= num;
        return this;
    }

    multiply(num) {
        this.value *= num;
        return this;
    }

    divide(num) {
        if (num !== 0) {
            this.value /= num;
        } else {
            console.log('Cannot divide by zero');
        }
        return this;
    }

    getResult() {
        return this.value;
    }
}

const calculator = new Calculator();
const result = calculator.add(10).subtract(5).multiply(2).divide(3).getResult();
console.log(`Result: ${result}`); // Output: Result: 3.3333333333333335

// getters and setters
class PersonWithAge {
    constructor(name, age) {
        this.name = name;
        this._age = age; // Use a private variable to store age
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        } else {
            console.log('Age cannot be negative');
        }
    }
}

const person2 = new PersonWithAge('Charlie', 25);
console.log(person2.age); // Output: 25
person2.age = 30; // Update age using setter
console.log(person2.age); // Output: 30
person2.age = -5; // Attempt to set an invalid age, will trigger validation 

// mixins
const CanFly = {
    fly() {
        console.log(`${this.name} can fly!`);
    }
};

const CanSwim = {
    swim() {
        console.log(`${this.name} can swim!`);
    }
};

class Bird {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Bird.prototype, CanFly);

const eagle = new Bird('Eagle');
eagle.fly(); // Output: Eagle can fly! 

// mixins with multiple behaviors
class Fish {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Fish.prototype, CanSwim);

const salmon = new Fish('Salmon');
salmon.swim(); // Output: Salmon can swim!

// mixin with multiple behaviors
class Duck {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Duck.prototype, CanFly, CanSwim);

const duck = new Duck('Duck');
duck.fly(); // Output: Duck can fly!
duck.swim(); // Output: Duck can swim!  

// mixin with multiple behaviors and properties
const CanQuack = {
    quack() {
        console.log(`${this.name} can quack!`);
    }
};

class Mallard {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Mallard.prototype, CanFly, CanSwim, CanQuack);

const mallard = new Mallard('Mallard');
mallard.fly(); // Output: Mallard can fly!
mallard.swim(); // Output: Mallard can swim!
mallard.quack(); // Output: Mallard can quack!  
