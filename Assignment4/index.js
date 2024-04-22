"use strict";
// Basic Programming Practice Problems
// 1. Hello Variable
// Declare a variable named 'greeting' of type string and assign the string value "Hello, World!"
let greeting = "Hello, World!";
// Print the value of the 'greeting' variable to the console
console.log(greeting);
// 2. Basic Math
// Define two integer variables and assign values
let num1 = 10;
let num2 = 5;
// Calculate the sum
let sum = num1 + num2;
// Calculate the difference
let difference = num1 - num2;
// Calculate the product
let product = num1 * num2;
// Calculate the quotient (assuming non-zero denominator)
let quotient = num1 / num2;
// Print the results
console.log("The sum of", num1, "and", num2, "is", sum);
console.log("The difference of", num1, "and", num2, "is", difference);
console.log("The product of", num1, "and", num2, "is", product);
console.log("The quotient of", num1, "and", num2, "is", quotient);
// 3. Swaping Values
// Define two integer variables and assign values
let a = 10;
let b = 5;
// Swap values using destructuring assignment
[a, b] = [b, a];
// Print the swapped values
console.log("a:", a);
console.log("b:", b);
// 4. Type Annotation
let message;
// Assign a number directly
message = 100;
console.log(typeof message); // This will print the type of the assigned value (string or number)
// 5. Modulus Operator
// Define two integer variables and assign values
let numb1 = 18;
let numb2 = 3;
// Calculate the remainder using the modulus operator
let remainder = numb1 % numb2;
// Print the result
console.log("The remainder of", numb1, "divided by", numb2, "is", remainder);
// 6. Increment Challange
let count = 100;
// Pre-increment: Increment and then use the new value
count = ++count; // count becomes 1
console.log(count); // Output: 1
// Post-increment: Use the current value and then increment
count = count++; // count remains 1 here
console.log(count); // Output: 2 (after the previous line)
// 7. Logical Gates
// Declare three boolean variables
let a1 = true;
let b1 = false;
let c1 = true;
// AND operation (all true for true output)
let andResult = a1 && b1 && c1;
console.log("AND result:", andResult); // Output: false (because b is false)
// OR operation (at least one true for true output)
let orResult = a1 || b1 || c1;
console.log("OR result:", orResult); // Output: true (because a and c are true)
// NOT operation (inverts the value)
let notA = !a1;
let notB = !b1;
let notC = !c1;
console.log("NOT A:", notA); // Output: false (because a1 is true)
console.log("NOT B:", notB); // Output: true (because b1 is false)
console.log("NOT C:", notC); // Output: false (because c1 is true)
// 8. Compund Assignment
let num = 10;
// Add and assign: num becomes 15
num += 5;
console.log("num after += 5:", num);
// Subtract and assign: num becomes 5
num -= 10;
console.log("num after -= 10:", num);
// Multiply and assign: num becomes 50
num *= 5;
console.log("num after *= 5:", num);
// Divide and assign (assuming no division by zero): num becomes 2
num /= 2.5;
console.log("num after /= 2.5:", num);
// 9. Even or Odd
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
// Example usage:
const c = 5;
const d = 36;
console.log(`${c} is ${isEvenOrOdd(c)}.`); // Output: "10 is Even."
console.log(`${d} is ${isEvenOrOdd(d)}.`); // Output: "7 is Odd."
// 10. Voting Eligibility
function checkVotingEligibility(age) {
    if (age >= 18) {
        return "Eligible to vote!";
    }
    else {
        return "Not eligible to vote.";
    }
}
// Example usage:
const person1Age = 20;
const person2Age = 16;
console.log(`Person 1 (age ${person1Age}): ${checkVotingEligibility(person1Age)}`);
console.log(`Person 2 (age ${person2Age}): ${checkVotingEligibility(person2Age)}`);
// 11. Grading System
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
// Example usage:
const studentScore1 = 85;
const studentScore2 = 72;
console.log(`Student 1 (score ${studentScore1}): Grade ${assignGrade(studentScore1)}`);
console.log(`Student 2 (score ${studentScore2}): Grade ${assignGrade(studentScore2)}`);
// 12. Maof Three
let x, y, z; // Assume these variables have some values assigned
// Example values (you can replace these with actual values):
x = 10;
y = 25;
z = 15;
// Determine the largest value
let largest = x; // Assume x is the largest initially
if (y > largest) {
    largest = y; // If y is greater than the current largest, update it
}
if (z > largest) {
    largest = z; // If z is greater than the current largest, update it
}
console.log(`The largest value is: ${largest}`);
// 13. Leap Year Checker
const isLeap = (year) => {
    return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
};
// Example usage:
const givenYear = 2024;
const isLeapYear = isLeap(givenYear);
if (isLeapYear) {
    console.log(`${givenYear} is a leap year.`);
}
else {
    console.log(`${givenYear} is not a leap year.`);
}
// 14.Fahrenheit to Celsius Converter
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
// Example usage:
const fahrenheit = 100;
const celsius = fahrenheitToCelsius(fahrenheit);
console.log(`${fahrenheit}°F is approximately equal to ${celsius.toFixed(2)}°C.`);
// 15. Positive, Negative, or Zero
function getSign(number) {
    if (number > 0) {
        return "Positive";
    }
    else if (number < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
// Example usage:
const givenNumber = -42;
console.log(`The sign of ${givenNumber} is ${getSign(givenNumber)}.`);
//16. Multiplication Table
function printMultiplicationTable(number) {
    // Loop from 1 to 10
    for (let i = 1; i <= 10; i++) {
        // Calculate the product and print the result
        let product = number * i;
        console.log(`${number} * ${i} = ${product}`);
    }
}
// Get a number from the user (assuming a basic input method exists)
let userInput = 9; /* Get user input here */
// Ensure the user input is a number
if (isNaN(userInput)) {
    console.error("Please enter a valid number.");
}
else {
    // Print the multiplication table of the user input
    printMultiplicationTable(userInput);
}
