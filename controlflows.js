// if statements
/*
if(condition){

}else if(condition){

}else{

}
*/

function CheckAge(age){
    if(age >= 13 && age <= 19 ){
    return("Teenager");
}else if(age >= 20 && age <= 69 ){
    return("Adult");
}else{
    return("Old");
}
}

const age = 16;
const ageCategory = CheckAge(age)
console.log(ageCategory);

// for loop
/*
for(initialization, condition, increment){
results
}

*/
/* While loop
initialization
while(condition){
results
increment
}

*/

// frist 100 number using for loop
for(let i = 0; i < 100; i++){
    console.log(i);
    }

// while loop for the first 100 numbers
let i = 0;
while(i < 100){
    console.log(i);
    i++
}

let fruits = ['mangoes','oranges','grapes'];
for(i in fruits){
    console.log(fruits[i]);
}

// for of loop
for(let fruit of fruits){
    console.log(fruit);
}

//switch
/*
switch(param){
    case :
    break :

    case :
    break :

    default :

}
*/
let day = Monday
switch(day){
    case Monday:
        console.log("Today is Monday");
        break;
    

    case Tuesday:
        console.log("Today is Tuesday");
        break;
    case Wednesday:
        console.log("Today is Wednesday");
        break;
    case Thursday:
        console.log("Today is Thursday");
        break;
    case Friday:
        console.log("Today is Friday");
        break;
    case Saturday:
        console.log("Today is Saturday");
        break;
    case Sunday:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        }

