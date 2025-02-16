//check in the number is positive
let number = 5
if(number > 0){
    console.log("The number is positive");
}

let isRaining = true;
if(isRaining){
    console.log("Don't forget your umbrella");
}

let age = 18;
if(age >= 18){
    console.log("Eligable to vote");
}


//if-else statement
//check with the number is even or odd
let firstnum = 5;

if(firstnum % 2 == 0){
    console.log("This number is even");
}else{
    console.log("The number is odd");
}

//Else-if Statement
//checking for students' grade
let score = 65;
if(score >= 80){
    console.log("You have an A");
}else if(score >= 60){
    console.log("You have a B");
}else if(score >= 50){
    console.log("You have a C");
}else {
    console.log("You need to improve");
}

//checking temperature
let temperature = 25;

if(temperature > 30){
    console.log("It's too hot");
}else if(20 >= temperature <= 30){
    console.log("It's moderate");
}else{
    console.log("It's cold")
}

//admission eligibility
let admiScore = 50;

if(admiScore >= 70){
    console.log("Eligible for Admission");
}else if(50 >= admiScore <= 69){
    console.log("Admission on Probation");
}else{
    console.log("Not Eligible for Admission");
}

//Access to Clean Water
let waterAvailable = 300;

if(waterAvailable > 500){
    console.log("Enough Water");
}else if(200 >= waterAvailable <= 500 ){
    console.log("Water is Limited");
}else{
    console.log("Water shortage");
}

//Nested if statements
//check if a number is postive, negative or zero
let numberToTest = -3;

if (numberToTest >= 0){
    if(numberToTest === 0){
        console.log("The number is zero");
    }else {
        console.log("The number is positive");
    }
}else{
    console.log("The number is negative");
}

//A javascript program that checks the quality of a product
let expired = false;
let quality = 7;
if(expired === true){
    console.log("Do not use");
}else{
    if(quality > 8){
        console.log("Good quality");
    }else if(5 >= quality <= 8){
        console.log("Average Quality");
    }else{
        confirm.log("Poor Quality");
    }
}
