// ternary operator  () ? if_true : if_false


console.log("ternary operator")
// Voting eligibility


// logic if age > 18 eligible else not eligible 

let age = 20;

const eligibility = (age >= 18) ? "You are eligible for voting" : "You are not eligible for voting";

console.log(eligibility);
console.log("----------");

console.log("multiple condition ternary operator")
// multiple conditions just like if  else if  else

let marks = 85 ;

const grade = (marks >= 90) ? "A" : (marks >= 80) ? "B" : (marks >= 70) ? "C" : "F";

console.log(`grade : ${grade}`);
console.log("----------");


// do while loop => it executes atleast once evne though if the condition is false
console.log("do-while loop")
let num = 3 ;

do{
    console.log(`num : ${num}`);
    num++;
} while(num > 5);

// even though num = 3 is less than 5 he do while loop is executed once

console.log("----------");


console.log("for in loop in object");

// for in is used to itterate all the keys in an object

let data = {name : "Monkey D. Luffy" , age : 19 , anime : "One Piece"}

for (key in data){
    console.log(`${key} : ${data[key]}`);
}
