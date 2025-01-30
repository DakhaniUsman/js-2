// Datatye in JavaSript string, number, boolean, null, undefined
// variable types var, let and const
// Operators    Arihhmetic, Comparison

// Arihtmetic Operators

// Conditional Statements if else, switch

// Loops - For Loop (Forward)

// Loops - For Loop (Reverse)

// Loops - while loop (Forward) (Reverse)

// Loops - break and continue

// Undefined datatype

// Functions - 1. Named Function (Traditional Function), 2. Anonymous Function (Arrow Function)

// while loop is similar to for loop but it gives you freedom to control the sequence anywhere during the itteration

// syntax is

var start = 1; // initialization
var end = 10;

while (start <= end) {
  // condition
  console.log(start);

  start++; // sequence
}

// Q. print number from 1 to 10 with the gap of 2
console.log("Q. print number from 1 to 10 with the gap of 2");

var i = 1;
var end = 10;

while (i <= end) {
  console.log(i);

  i += 2;
}

// Q. print all even numbers between 1 and 20
console.log("Q. print all even numbers between 1 and 20");

var i = 1;
var end = 20;

while (i <= end) {
  if (i % 2 == 0) {
    // even condition
    console.log(i);
  }

  i++; // sequence
}

// Q. print numbers from 1 to 30 if it is odd increment by 2 if it is even increment by 1

console.log(
  "Q. print numbers from 1 to 30 if it is odd increment by 2 if it is even increment by 1"
);

var i = 1;
var end = 30;

while (i <= end) {
  if (i % 2 == 0) {
    console.log("before : ", i);
    i++;
    console.log("after : ", i);
  } else {
    console.log("before : ", i);
    i += 2;
    console.log("after : ", i);
  }
  console.log("----");
}

// Q. write a while loop to print numbers from 20 to 1
console.log("Q. write a while loop to print numbers from 20 to 1");

var i = 20;
var end = 0;

while (i > end) {
  console.log(i);

  i--;
}

// break => breaks the loop and prevents further execution
// continue => skips the current execution and moves to the next iteration


// Break
console.log("concept of break");

var i = 1;
var end = 10;

while (i <= end) {
  console.log(i);

  if (i == 7) {
    console.log(i, "siuuuuuuuuu BREAK");
    break;
  }

  i++;
}

// continue
console.log("concept of continue");

var i = 1;
var end = 10;

while (i <= end) {
  if (i == 5) {
    i++;
    continue;
  }

  console.log(i);

  i++;
}
// noticed how the everything from 1 to 10 is printed except 5

// Function is a block of code that can be called and executed anywhere in the program
// There are two types of functions in JavaScript 1. Named Function (Traditional Function) 2. Anonymous Function (Arrow Function)

// when we define a function we have to call it

// 1. Named Function (Traditional Function) hoisting is possible
// 2. Anonymous Function (Arrow Function ()={}) hositing is not possible
// functionName();

console.log("Named Function (Traditional Function) ----");
function functionName(props) { // props are parameters that are passed to the function
  console.log("Function is called");
  // multiple lines of code
}

functionName();



// functionclear

// add(5,10);  this is anonymous function (arrow function) so here hoisting is not possible


console.log("Anonymous Function (Arrow Function) ----");

const add = (a, b) => {
  console.log(a + b);
}

add(5, 10); // here the function is called and is executed since it is defined earlier


//  Accesing props in function


console.log("Accesing props in function ----")
var num1 = 10;
var num2 = 20;

function Addition(a, b) {
  console.log(a, b);
}

Addition(num1); // this parenthesis has a connection with the above parenthesis anything we pass in here can be accesible above in the function


// undefined datatype
//  when we declare a variable and do not assign any value to it then it is undefined
//  in the above example b is undefined because we have used it but not assigned any value to it


var myName;

console.log(myName, typeof (myName));


// Q. Given an range from 25 to 50 find out count of even numbers using function while loop and conditional statement
var start = 25;
var end = 50;
var count = 0;


const countEven = (start, end, count) => {

  console.log("start :", start, "end :", end, "count :", count,);

  while (start <= end) {
    if (start % 2 == 0) {
      count++;
      console.log(start, count)
    }

    start++; // make sure u increment the sequence otherwise it will go in infinite loop
  }

  console.log(count, "final count");

}

// noticed how everything within the function is dynamic. we can pass any value to the function and it will work accordingly

countEven(start, end, count);
