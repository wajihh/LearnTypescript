var _a;
// Basic Programming Practice Problems
// 1. Hello Variable
// Declare a variable named 'greeting' of type string and assign the string value "Hello, World!"
var greeting = "Hello, World!";
// Print the value of the 'greeting' variable to the console
console.log(greeting);
// 2. Basic Math
// Define two integer variables and assign values
var num1 = 10;
var num2 = 5;
// Calculate the sum
var sum = num1 + num2;
// Calculate the difference
var difference = num1 - num2;
// Calculate the product
var product = num1 * num2;
// Calculate the quotient (assuming non-zero denominator)
var quotient = num1 / num2;
// Print the results
console.log("The sum of", num1, "and", num2, "is", sum);
console.log("The difference of", num1, "and", num2, "is", difference);
console.log("The product of", num1, "and", num2, "is", product);
console.log("The quotient of", num1, "and", num2, "is", quotient);
// 3. Swaping Values
// Define two integer variables and assign values
var a = 10;
var b = 5;
// Swap values using destructuring assignment
_a = [b, a], a = _a[0], b = _a[1];
// Print the swapped values
console.log("a:", a);
console.log("b:", b);
// 4. Type Annotation
var message;
// Assign a number directly
message = 100;
console.log(typeof message); // This will print the type of the assigned value (string or number)
// 5. Modulus Operator
// Define two integer variables and assign values
var numb1 = 18;
var numb2 = 3;
// Calculate the remainder using the modulus operator
var remainder = numb1 % numb2;
// Print the result
console.log("The remainder of", numb1, "divided by", numb2, "is", remainder);
// 6. Increment Challange
var count = 100;
// Pre-increment: Increment and then use the new value
count = ++count; // count becomes 1
console.log(count); // Output: 1
// Post-increment: Use the current value and then increment
count = count++; // count remains 1 here
console.log(count); // Output: 2 (after the previous line)
// 7. Logical Gates
// Declare three boolean variables
var a1 = true;
var b1 = false;
var c1 = true;
// AND operation (all true for true output)
var andResult = a1 && b1 && c1;
console.log("AND result:", andResult); // Output: false (because b is false)
// OR operation (at least one true for true output)
var orResult = a1 || b1 || c1;
console.log("OR result:", orResult); // Output: true (because a and c are true)
// NOT operation (inverts the value)
var notA = !a1;
var notB = !b1;
var notC = !c1;
console.log("NOT A:", notA); // Output: false (because a1 is true)
console.log("NOT B:", notB); // Output: true (because b1 is false)
console.log("NOT C:", notC); // Output: false (because c1 is true)
// 8. Compund Assignment
var num = 10;
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
var c = 5;
var d = 36;
console.log("".concat(c, " is ").concat(isEvenOrOdd(c), ".")); // Output: "10 is Even."
console.log("".concat(d, " is ").concat(isEvenOrOdd(d), ".")); // Output: "7 is Odd."
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
var person1Age = 20;
var person2Age = 16;
console.log("Person 1 (age ".concat(person1Age, "): ").concat(checkVotingEligibility(person1Age)));
console.log("Person 2 (age ".concat(person2Age, "): ").concat(checkVotingEligibility(person2Age)));
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
var studentScore1 = 85;
var studentScore2 = 72;
console.log("Student 1 (score ".concat(studentScore1, "): Grade ").concat(assignGrade(studentScore1)));
console.log("Student 2 (score ".concat(studentScore2, "): Grade ").concat(assignGrade(studentScore2)));
// 12. Maof Three
var x, y, z; // Assume these variables have some values assigned
// Example values (you can replace these with actual values):
x = 10;
y = 25;
z = 15;
// Determine the largest value
var largest = x; // Assume x is the largest initially
if (y > largest) {
    largest = y; // If y is greater than the current largest, update it
}
if (z > largest) {
    largest = z; // If z is greater than the current largest, update it
}
console.log("The largest value is: ".concat(largest));
// 13. Leap Year Checker
var isLeap = function (year) {
    return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
};
// Example usage:
var givenYear = 2024;
var isLeapYear = isLeap(givenYear);
if (isLeapYear) {
    console.log("".concat(givenYear, " is a leap year."));
}
else {
    console.log("".concat(givenYear, " is not a leap year."));
}
// 14.Fahrenheit to Celsius Converter
var fahrenheitToCelsius = function (fahrenheit) { return (fahrenheit - 32) * 5 / 9; };
// Example usage:
var fahrenheit = 100;
var celsius = fahrenheitToCelsius(fahrenheit);
console.log("".concat(fahrenheit, "\u00B0F is approximately equal to ").concat(celsius.toFixed(2), "\u00B0C."));
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
var givenNumber = -42;
console.log("The sign of ".concat(givenNumber, " is ").concat(getSign(givenNumber), "."));
//16. Multiplication Table
function printMultiplicationTable(number) {
    // Loop from 1 to 10
    for (var i = 1; i <= 10; i++) {
        // Calculate the product and print the result
        var product_1 = number * i;
        console.log("".concat(number, " * ").concat(i, " = ").concat(product_1));
    }
}
// Get a number from the user (assuming a basic input method exists)
var userInput = 9; /* Get user input here */
// Ensure the user input is a number
if (isNaN(userInput)) {
    console.error("Please enter a valid number.");
}
else {
    // Print the multiplication table of the user input
    printMultiplicationTable(userInput);
}
