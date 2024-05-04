"use strict";
/* This is part of 5th practice assignment dated 27 April 2024 contains answers 21 to 35 on functions*/
// Answer 21//
function calculateProduct(numbers) {
    if (numbers.length === 0) {
        return 0; // Assuming if the array is empty, return 0 as the product
    }
    let product = 1;
    for (let num of numbers) {
        product *= num;
    }
    return product;
}
// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(calculateProduct(numbers)); // Output: 120 (1*2*3*4*5 = 120)
// Answer 22
function filterByLength(strings, n) {
    return strings.filter(str => str.length > n);
}
// Example usage:
const words = ["apple", "banana", "watermelon", "orange", "grapefruit"];
const filteredWords = filterByLength(words, 5);
console.log(filteredWords); // Output: ["banana", "orange"]
// Answer 23
/**
 * Find and log duplicates in an array.
 * @param array An array in which duplicates need to be found.
 */
function findDuplicates(array) {
    const duplicates = [];
    const visited = {}; // Object to keep track of visited elements
    // Loop through each element in the array
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        // Check if the element has been visited before
        if (visited[element]) {
            // If it's a duplicate, add it to the duplicates array
            if (!duplicates.includes(element)) {
                duplicates.push(element);
            }
        }
        else {
            // Mark the element as visited
            visited[element] = true;
        }
    }
    // Log the duplicates found
    if (duplicates.length > 0) {
        console.log("Duplicates found:");
        console.log(duplicates);
    }
    else {
        console.log("No duplicates found.");
    }
}
// Example usage:
const array = [1, 2, 3, 4, 2, 5, 4, 3, 7];
findDuplicates(array);
// Answer 24
/**
 * Increment all elements in an array by one.
 * @param numbers An array of integers to increment.
 * @returns An array with all elements incremented by one.
 */
function incrementAll(numbers) {
    const incrementedArray = [];
    // Loop through each element in the array
    for (let i = 0; i < numbers.length; i++) {
        // Increment the current element by one and push it to the incrementedArray
        incrementedArray.push(numbers[i] + 1);
    }
    // Return the array with all elements incremented by one
    return incrementedArray;
}
// Example usage:
const numbers1 = [5, 6, 7, 8, 9];
const incrementedNumbers = incrementAll(numbers1);
console.log(incrementedNumbers); // Output: above incremented by 1
// Answer 25
/**
 * Count occurrences of a specific element in an array.
 * @param array An array in which occurrences need to be counted.
 * @param target The element to count occurrences of.
 * @returns The number of occurrences of the target element in the array.
 */
function countOccurrences(array, target) {
    let count = 0; // Initialize a variable to store the count of occurrences
    // Loop through each element in the array
    for (let i = 0; i < array.length; i++) {
        // Check if the current element matches the target element
        if (array[i] === target) {
            count++; // Increment the count if the elements match
        }
    }
    return count; // Return the total count of occurrences
}
// Example usage:
const array1 = [1, 2, 2, 3, 2, 4, 2, 5];
const target = 2;
const occurrences = countOccurrences(array1, target);
console.log(`The element ${target} appears ${occurrences} times.`); // Output: The element 2 appears 4 times.
// Answer 26
/**
 * Check if an array is sorted in ascending order.
 * @param array An array to check for sorting.
 * @returns True if the array is sorted in ascending order, otherwise false.
 */
function isSorted(array) {
    // Loop through each element in the array
    for (let i = 0; i < array.length - 1; i++) {
        // If the current element is greater than the next element, the array is not sorted
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    // If the loop completes without returning false, the array is sorted
    return true;
}
// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [3, 1, 4, 2, 5];
console.log(isSorted(sortedArray)); // Output: true
console.log(isSorted(unsortedArray)); // Output: false
// Answer 27
/**
 * Format an array of names into a string separated by commas, except for the last two names, which are separated by "and".
 * @param names An array of names to format.
 * @returns A string with formatted names.
 */
function formatNames(names) {
    const length = names.length;
    if (length === 0) {
        return ""; // Return an empty string if the array is empty
    }
    else if (length === 1) {
        return names[0]; // Return the only name if there's only one element in the array
    }
    else if (length === 2) {
        return names.join(" and "); // Join the two names with "and" if there are exactly two elements
    }
    else {
        // Join all names with commas except for the last two, which are separated by "and"
        return names.slice(0, length - 2).join(", ") + ", " + names.slice(length - 2).join(" and ");
    }
}
// Example usage:
const names1 = ["Ali", "Boby", "Chaudry", "Daanish"];
const names2 = ["Jabbar", "Daania"];
const names3 = [];
console.log(formatNames(names1)); // Output: Ali, Boby, Chaudry and Daanish
console.log(formatNames(names2)); // Output: Jabbar and Daania
console.log(formatNames(names3)); // Output: 
// Answer 28
// Function to convert Fahrenheit temperatures to Celsius
function fahrenheitToCelsius(fahrenheitTemperatures) {
    // Create an empty array to store converted temperatures
    const celsiusTemperatures = [];
    // Answer 29 
    // Iterate through each temperature in the input array
    for (let i = 0; i < fahrenheitTemperatures.length; i++) {
        // Convert Fahrenheit to Celsius using the formula: (Fahrenheit - 32) * 5/9
        const celsius = (fahrenheitTemperatures[i] - 32) * 5 / 9;
        // Push the converted temperature to the new array
        celsiusTemperatures.push(celsius);
    }
    // Return the array of converted Celsius temperatures
    return celsiusTemperatures;
}
// Example usage
const fahrenheitTemperatures = [32, 68, 86, 104];
const celsiusTemperatures = fahrenheitToCelsius(fahrenheitTemperatures);
// Log the original and converted temperatures
console.log("Original Fahrenheit Temperatures:", fahrenheitTemperatures);
console.log("Converted Celsius Temperatures:", celsiusTemperatures);
//Answer 29
function minMaxAverage(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return {
            min: NaN,
            max: NaN,
            average: NaN
        };
    }
    // Calculate minimum and maximum
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    // Calculate average
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    // Return an object with min, max, and average properties
    return {
        min: min,
        max: max,
        average: average
    };
}
// Example usage
const numbers2 = [4, 7, 2, 9, 5];
const result = minMaxAverage(numbers2);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
console.log("Average:", result.average);
// Answer 30
function swapElements(array, index1, index2) {
    // Check if indices are within the bounds of the array
    if (index1 < 0 || index1 >= array2.length || index2 < 0 || index2 >= array2.length) {
        console.error("Indices out of bounds");
        return;
    }
    // Swap elements at the specified indices
    const temp = array2[index1];
    array2[index1] = array2[index2];
    array2[index2] = temp;
}
// Example usage
const array2 = [9, 8, 6, 4, 5];
console.log("Original Array:", array2);
swapElements(array, 1, 2); // Swapping elements at index 1 and 3
console.log("Array after swapping:", array2);
