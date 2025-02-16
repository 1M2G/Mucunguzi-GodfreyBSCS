//Javascript variables and constrants
//A Javasript variable is a container for storing data

let num = 5; // num is the variable that stores number 5

//In javascript, we use var or let keywords to declare variables

var age;
let name;
//where age and name are variables

//initializing variables in javascript

//Declare variable num1
let num1;

//assign 10 to num1
num1 = 10;

let num2 = 7, num3 = 2, num4 = 9;

//changing values of a variable
let score = 2;
console.log(score);
//change the score to 5
score = 5;
console.log(score);

//naming variables in javascript
let firstNumber = 10; //camelCase format
console.log(firstNumber);
let message = "Hello there";
console.log(message);
let _messsage = "underscore";
console.log(_messsage);
let $message = "dollar sign";
console.log($message);

//Javascript constrants
//A constrant is a type of variable whose value can not be changed

//assign 5 to number
const number = 5;

//assign 10 to number
//number = 10;// when number is assigned a new variable 10, we get an error.
console.log(number);

//a function that calculates the product of two numbers
function productOfTwoNumbers(_num1,_num2){
   return (_num1 * _num2);
}
let results = productOfTwoNumbers(5,3);
console.log(results);


