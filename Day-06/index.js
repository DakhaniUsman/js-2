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

var name = "Kirito"

// Named Function (Traditional Function)
function myFunction(name) {
    console.log("Function is executed");
    console.log("Hello 😁", name);

}
myFunction(name);

// Arrow Function (anonymous Function)

const newFunction = (name) => {
    console.log("Arrow Function is executed");
    console.log("Hello 😁", name);
}

newFunction(name);

// for single prop

const newMyFunction = prop => {console.log(prop)};
newMyFunction("Hello!! Kirito");

// Hoisting is not applicable in arrow function

// Q. arrow function to count even and odd nubmber between range 10 to 30



const countFunction = (start, end) => {
    var evenCount = 0;
    var oddCount = 0;
    while (start <= end) {

        if (start % 2 == 0) {
            evenCount++;
        }
        else {
            oddCount++;
        }

        start++
    }

    console.log(evenCount, "even count", oddCount, "odd count");
}


countFunction(10, 30);


// Array -> stores multiple data 

var location = "Awdiz"

var myArray = ["name","age"]