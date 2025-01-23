/** 
 Multi line comment
*/

//single line


//variables
//var
var numberTwo = 6; //int

var name = "James"; //string

//const
const PI = 23.98; //float
console.log(PI)

//let
let numberOne = 3;
console.log(numberOne);

//add PI and numberTwo
console.log(PI + numberTwo);

//multipy numberTwo and numberOne
console.log(numberTwo * numberOne);

//divide numberTwo and numberOne
console.log(numberTwo / numberOne);

//Strings
let name1 = "James";
//let firstName = 'John';
//let lastName = `Simon`;
//display all names
//console.log(name + " " + firstName + " " + lastName);

//let welcome = `Welcome back ${firstName} 👏 `;
//console.log(welcome)

//console.log(firstName.toUpperCase());
//console.log(lastName.length);

//Booleans
let isStudent = true;
let isInHall = false;

//logical operation
console.log(isStudent && isInHall);
console.log(isStudent || isInHall);

//arrays
let fruits = ['mangoes','oranges','grapes'];
console.log(fruits);

//appending items to the array
fruits.push('pineapple');
fruits.push('apples');

//removing items from the array
fruits.pop()
console.log(fruits);

//objects
let credentials = {
    "email": "ekuma@ucu.ac.ug",
    "password": "1234"
}

console.log(credentials.email)
credentials["userName"] = "Fred";
console.log(credentials);

let signUp = {
    "firstName": "Godfrey",
    "lastName": "Mucunguzi",
    "email": "godfreymucu@gmail.com",
    "password": 3456
    }
// comparison operation
signUp["cofirmPassword"] = "3456"
console.log(signUp.password == signUp.cofirmPassword);
console.log(signUp.password === signUp.cofirmPassword);



