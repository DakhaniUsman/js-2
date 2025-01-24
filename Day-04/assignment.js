// Basic Level

// 1. Write a for loop to print numbers from 1 to 10.

console.log("1. Write a for loop to print numbers from 1 to 10.");
var start = 1;
var end = 10;
var sequence = 1;

for (let i = start; i <= end; i += sequence) {
  console.log(i);
}

// 2. Use a for loop to print all even numbers between 1 and 20.
console.log("2. Use a for loop to print all even numbers between 1 and 20.");

var start = 1;
var end = 20;
var sequence = 1;

for (let i = start; i <= end; i += sequence) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 3. Write a loop to calculate the sum of the first 10 natural numbers.

console.log(
  "3. Write a loop to calculate the sum of the first 10 natural numbers."
);

// natural numbers start from 1

var start = 1;
var end = 10;
var sequence = 1;
var sum = 0;

for (let i = start; i <= end; i += sequence) {
  sum = sum + i;
}
console.log(sum);

// 4. Use a for loop to print all numbers divisible by 5 between 1 and 50.
console.log(
  "4. Use a for loop to print all numbers divisible by 5 between 1 and 50."
);

var start = 1;
var end = 50;
var sequence = 1;

for (let i = start; i <= end; i += sequence) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

// 5. Write a loop to calculate the factorial of a given number.

console.log("5. Write a loop to calculate the factorial of a given number.");

var number = 5;
var product = 1;

for (let i = 1; i <= number; i++) {
  product = product * i;
}
console.log(number,"! =",product);


// 6. Use a for loop with a conditional to print all odd numbers between 1 and 20.



// 7. Write a loop to calculate the sum of all even numbers between 1 and 100.

// 8. Use a loop to check if a given number is prime.

// 9. Write a for loop to reverse the digits of a number (e.g., input: 123, output: 321).

// 10. Create a for loop to find the smallest number in an array.

// Intermediate Level

// 11. Write a for loop to count the number of vowels in a string.

// 12. Use a loop to find the largest number in an array.

// 13. Write a loop to calculate the sum of numbers in an array.

// 14. Use a for loop to print all elements of an array in reverse order.

// 15. Write a loop to generate a multiplication table for a given number.

// 16. Use a loop and conditionals to print the Fibonacci sequence up to n terms.

// 17. Write a program to check if a given string is a palindrome using loops.

// 18. Use a for loop to find all perfect squares between 1 and 100.

// 19. Write a loop to find the second-largest number in an array.

// 20. Use a for loop and conditionals to print all numbers divisible by both 3 and 5 between 1 and 100.
