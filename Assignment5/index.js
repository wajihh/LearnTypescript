// Assignment questions 1 to 20 included here
// Simple console log
console.log("Hello, World!"); // Prints "Hello, World!" to the console
// Temperature check with comment explaining the purpose
// Declare a variable 'temperature' as a number and assign a value
var temperature = 15;
// Check if temperature is below 20 and log a message if true
if (temperature < 20) {
    console.log("It's cold!"); // Log message if temperature is below 20
}
// Apples remaining with comment explaining the scenario
// Declare a variable 'apples' as a number and assign a value
var apples = 10;
// Subtract 3 from apples using the shorthand assignment operator
apples -= 5;
// Use template literals to embed the value of 'apples' within the string 
console.log("You have ".concat(apples, " apples left.")); // Log remaining apples using template literals
// Full name construction with comment explaining the process
// Declare variables 'firstName' and 'lastName' as strings and assign values
var firstName = "John";
var lastName = "Doe";
// Combine names using template literals and store in 'fullName' constant
var fullName = "".concat(firstName, " ").concat(lastName);
// Use template literals to embed the 'fullName' value within the message 
console.log("Your full name is: ".concat(fullName)); // Log the full name using template literals
// Comparison operator check with comment explaining the task
// Declare constants 'num1' and 'num2' as numbers and assign values
var num1 = 5;
var num2 = 2;
// Check if 'num1' is greater than 'num2'
if (num1 > num2) {
    console.log("Yes"); // Log "Yes" if num1 is greater than num2
}
else {
    console.log("No"); // Log "No" otherwise
}
// Function to calculate the area of a circle
function calculateArea(radius) {
    var pi = 3.14159; // Define PI as a constant
    return pi * Math.pow(radius, 2); // Calculate and return area using PI and radius squared
}
// Loop with FizzBuzz logic
for (var i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Log "FizzBuzz" for multiples of 3 and 5
    }
    else if (i % 3 === 0) {
        console.log("Fizz"); // Log "Fizz" for multiples of 3
    }
    else if (i % 5 === 0) {
        console.log("Buzz"); // Log "Buzz" for multiples of 5
    }
    else {
        console.log(i); // Log the number otherwise
    }
}
// Finding the highest temperature
var temperatures = [10, 25, 18, 32, 15]; // Define an array of temperatures
var highestTemp = temperatures[0]; // Initialize highestTemp with the first element
for (var _i = 0, temperatures_1 = temperatures; _i < temperatures_1.length; _i++) {
    var temp = temperatures_1[_i];
    if (temp > highestTemp) {
        highestTemp = temp; // Update highestTemp if a higher temperature is found
    }
}
console.log("The highest temperature is: ".concat(highestTemp, " degrees Celsius")); // Log the highest temperature
// Function to count positive numbers in an array
function countPositives(numbers) {
    var count = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num > 0) {
            count++; // Increment count for positive numbers
        }
    }
    return count;
}
// Example usage of countPositives function
var numbers = [1, -2, 3, 0, -5, 4];
var positiveCount = countPositives(numbers);
console.log("There are ".concat(positiveCount, " positive numbers in the array."));
// Checking user age 
var userAge = 25; // Replace with a placeholder age
if (userAge < 18) {
    console.log("You are a minor.");
}
else {
    console.log("You are an adult.");
}
// Filter words starting with a
function filterWordsByA(words) {
    return words.filter(function (word) { return word.toLowerCase().startsWith('a'); });
}
// Example usage
var allWords = ["apple", "banana", "cat", "around"];
var wordsStartingWithA = filterWordsByA(allWords);
console.log(wordsStartingWithA); // Output: ["apple", "around"]
// log second to last statement
var fruits = ["apple", "banana", "orange", "mango"];
if (fruits.length >= 2) {
    console.log(fruits[fruits.length - 2]); // Access second to last element
}
else {
    console.log("Array has less than 2 elements.");
}
// Square each number in an array
function squareNumbers(numbers) {
    return numbers.map(function (num) { return num * num; }); // Use map to square each element
}
// Example usage
var originalNumbers = [1, 2, 3, 4];
var squaredNumbers = squareNumbers(originalNumbers);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]
// Recerse array elements
function reverseArray(arr) {
    var reversedArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]); // Push elements in reverse order
    }
    return reversedArr;
}
// Example usage
var originalArray = ["apple", "banana", "orange"];
var reversedArray = reverseArray(originalArray);
console.log(reversedArray); // Output: ["orange", "banana", "apple"]
// Count scores exceeding/below min/max:
function analyzeScores(scores) {
    var maxScore = Math.max.apply(Math, scores); // Find maximum score
    var minScore = Math.min.apply(Math, scores); // Find minimum score
    var aboveMax = 0;
    var belowMin = 0;
    for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
        var score = scores_1[_i];
        if (score > maxScore) {
            aboveMax++;
        }
        else if (score < minScore) {
            belowMin++;
        }
    }
    console.log("Scores exceeding max (".concat(maxScore, "): ").concat(aboveMax));
    console.log("Scores below min (".concat(minScore, "): ").concat(belowMin));
}
// Example usage
var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
analyzeScores(scores);
//  Function removes false, null, 0, "", undefined, and NaN values from an array:
// Concatenate two arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combinedArray = arr1.concat(arr2); // Use concat to combine arrays
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
// Define a TypeScript function called cleanArray
// This function removes specified values from an array
function cleanArray(arr) {
    // Filter out the unwanted values
    var cleanedArray = arr.filter(function (value) {
        // Check if the value is not false, null, 0, "", undefined, or NaN
        return value !== false && // Check if value is not false
            value !== null && // Check if value is not null
            value !== 0 && // Check if value is not 0
            value !== "" && // Check if value is not an empty string
            value !== undefined && // Check if value is not undefined
            !Number.isNaN(value); // Check if value is not NaN
    });
    return cleanedArray; // Return the filtered array
}
// Test the cleanArray function
var originalArray1 = [false, null, 0, "", undefined, NaN, 42, "hello", true];
var cleanedArray = cleanArray(originalArray1); // Call cleanArray function with originalArray1
console.log(cleanedArray); // Output the cleaned array
/*
Explanation:
1. We define a TypeScript function called `cleanArray` that takes an array `arr` as input and returns a new array with unwanted values removed.
2. Inside the function, we use the `filter` method on the input array (`arr`) to create a new array (`cleanedArray`). The `filter` method creates a new array with all elements that pass the test implemented by the provided function.
3. In the filter callback function, we check each value against the conditions specified: `value !== false`, `value !== null`, `value !== 0`, `value !== ""`, `value !== undefined`, and `!Number.isNaN(value)`. These conditions ensure that we filter out false, null, 0, "", undefined, and NaN values.
4. The filtered array (`cleanedArray`) is then returned from the function.
5. Finally, we test the function with a sample array (`originalArray`) containing various values, including the ones we want to remove, and log the result to the console.
*/
// Sum of even and odd elements
// Define a TypeScript function called sumOfElements
// This function calculates the sum of elements in an array based on whether they are even or odd
function sumOfElements(arr, isEven) {
    // Initialize the sum variable to store the total sum
    var sum = 0;
    // Iterate through each element in the array
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        // Check if the number is even or odd based on the isEven parameter
        if (isEven && num % 2 === 0) { // If isEven is true, check if the number is even
            sum += num; // Add the number to the sum
        }
        else if (!isEven && num % 2 !== 0) { // If isEven is false, check if the number is odd
            sum += num; // Add the number to the sum
        }
    }
    return sum; // Return the total sum
}
// Test the sumOfElements function
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sumOfEven = sumOfElements(array1, true); // Calculate sum of even numbers
var sumOfOdd = sumOfElements(array1, false); // Calculate sum of odd numbers
console.log("Sum of even numbers:", sumOfEven); // Output the sum of even numbers
console.log("Sum of odd numbers:", sumOfOdd); // Output the sum of odd numbers
/* Sure! Here's how you can implement a TypeScript function called `sumOfElements` that calculates the sum of all elements in an array based on whether they are even or odd, controlled by a parameter:

```typescript
// Define a TypeScript function called sumOfElements
// This function calculates the sum of elements in an array based on whether they are even or odd
function sumOfElements(arr: number[], isEven: boolean): number {
    // Initialize the sum variable to store the total sum
    let sum = 0;

    // Iterate through each element in the array
    for (const num of arr) {
        // Check if the number is even or odd based on the isEven parameter
        if (isEven && num % 2 === 0) { // If isEven is true, check if the number is even
            sum += num; // Add the number to the sum
        } else if (!isEven && num % 2 !== 0) { // If isEven is false, check if the number is odd
            sum += num; // Add the number to the sum
        }
    }

    return sum; // Return the total sum
}

// Test the sumOfElements function
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOfEven = sumOfElements(array, true); // Calculate sum of even numbers
const sumOfOdd = sumOfElements(array, false); // Calculate sum of odd numbers
console.log("Sum of even numbers:", sumOfEven); // Output the sum of even numbers
console.log("Sum of odd numbers:", sumOfOdd); // Output the sum of odd numbers
```

Explanation:

1. We define a TypeScript function called `sumOfElements` that takes an array `arr` of numbers and a boolean parameter `isEven` indicating whether to sum even or odd numbers.
2. We initialize a variable `sum` to store the total sum of the selected elements.
3. We iterate through each element in the array using a for...of loop.
4. Inside the loop, we check if the current number is even or odd based on the `isEven` parameter.
   - If `isEven` is `true` and the number is even (`num % 2 === 0`), we add it to the sum.
   - If `isEven` is `false` and the number is odd (`num % 2 !== 0`), we add it to the sum.
5. After iterating through all elements, we return the total sum.
6. We test the function by calling it with a sample array (`array`) and output the sums of even and odd numbers separately.*/
// Define a TypeScript function called findIndexInArray
// This function checks whether an element exists in an array and returns its index or -1 if not found
function findIndexInArray(arr, element) {
    // Iterate through each element in the array
    for (var i = 0; i < arr.length; i++) {
        // If the current element matches the given element, return its index
        if (arr[i] === element) {
            return i;
        }
    }
    // If the element is not found, return -1
    return -1;
}
// Test the findIndexInArray function
var array = [1, 2, 3, 4, 5];
var elementToFind = 3;
var index = findIndexInArray(array, elementToFind);
if (index !== -1) {
    console.log("Element ".concat(elementToFind, " found at index ").concat(index, "."));
}
else {
    console.log("Element ".concat(elementToFind, " not found in the array."));
}
// Define a TypeScript function called findSmallestNumber
// This function finds and returns the smallest number in an array of integers
function findSmallestNumber(arr) {
    // If the array is empty, return undefined
    if (arr.length === 0) {
        return undefined;
    }
    // Initialize the smallest number variable with the first element of the array
    var smallestNumber = arr[0];
    // Iterate through each element in the array starting from the second element
    for (var i = 1; i < arr.length; i++) {
        // If the current element is smaller than the current smallest number,
        // update the smallest number variable to the current element
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }
    }
    // Return the smallest number found
    return smallestNumber;
}
// Test the findSmallestNumber function
var testarray = [5, 3, 8, 2, 10, 1];
var smallestNumber = findSmallestNumber(testarray);
if (smallestNumber !== undefined) {
    console.log("The smallest number in the array is:", smallestNumber);
}
else {
    console.log("The array is empty.");
}
