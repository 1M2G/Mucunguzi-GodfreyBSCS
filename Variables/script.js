// ways to declare a variable
// var, let, const
// var is function scoped, let and const are block scoped

let firstName = "Jacob";
let lastName = "Leva";

console.log(firstName, lastName);

let age = 26;

console.log(age);

// reassigning a variable
age = 27;
console.log(age);

let score;

score = 1;

console.log(score);

if(true) {
    score = score + 1;
}
console.log(score);

const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

const person = {
    name:'Jamson'
};
person.email = 'jamson@gmail.com';
console.log(person);

// declare multiple values at once
let a, b, c;
a = 1, b = 2, c = 3;
console.log(a, b, c);

//primitive data types

// string, number, boolean, null, undefined, symbol, bigint
// string
const firstNmae = 'Peter';
// number
const age1 = 26;
// boolean
const isStudent = true;
// null
const regNumber = null;
// undefined
let regNumber1;

// symbol
const sym = Symbol('This is a symbol');

// bigint
const bigInt = BigInt(1234567890123456789012345678901234567890);

// reference types
const numbers = [1, 2, 3, 4, 5]; // object

const person1 = {
    name: 'Godfrey'
};

function sayHello(){
    console.log('Hello');
}


const output = sayHello;

console.log(output, typeof output);

// values are stored on a stack
const name = 'James';
const age2 = 26;

// reference valuees are stored on a heap
const person2 = {
    name: 'Jane',
    age: 26
};

let newName = name;
newName = 'Peter';

let newPerson3 = person2;
newPerson3.name = 'John';
newPerson3.age = 27;

console.log(name, age2); // James 26
console.log(newName, person2.name); // Peter Jane
console.log(newPerson3, person2); // { name: 'John', age: 27 } { name: 'John', age: 27 }


