// Answers to last 5 hard questions
// Answer 31 Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function countCharacterOccurrences(inputString: string, character: string): number {
    // Initialize a counter to store the number of occurrences
    let count: number = 0;

    // Iterate through each character in the input string
    for (let i = 0; i < inputString.length; i++) {
        // Check if the current character matches the specified character
        if (inputString[i] === character) {
            // If match found, increment the counter
            count++;
        }
    }

    // Return the total count of occurrences
    return count;
}

// Example usage
const inputString: string = "Today is a holiday";
const characterToCount: string = "a";
const occurrences: number = countCharacterOccurrences(inputString, characterToCount);
console.log(`The character '${characterToCount}' appears ${occurrences} times in the string.`);
// Answer 32 Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
// Define a type for a to-do item
type TodoItem = {
    task: string;
    completed: boolean;
};

// Define a to-do list array of objects
const todoList: TodoItem[] = [
    { task: "Wash Car", completed: true },
    { task: "Buy groceries", completed: false },
    { task: "Go cycling", completed: false },
    { task: "Read a book", completed: true },
    { task: "Visit friends", completed: false }
];

// Function to log only the tasks that are not yet completed
function logIncompleteTasks(todoList: TodoItem[]): void {
    console.log("Incomplete Tasks:");
    todoList.forEach(todo => {
        if (!todo.completed) {
            console.log(todo.task);
        }
    });
}

// Call the function to log incomplete tasks
logIncompleteTasks(todoList);
// Answer 33 Write a function that takes an array of integers and sorts them from smallest to largest.
function sortArray(array: number[]): number[] {
    // Use the sort method to sort the array
    // By default, it sorts elements as strings based on Unicode code points
    // To sort numbers correctly, provide a compare function to sort numerically
    return array.sort((a, b) => a - b);
}

// Example usage
const unsortedArray: number[] = [4, 2, 7, 1, 9, 5];
const sortedArray: number[] = sortArray(unsortedArray);
console.log("Sorted Array:", sortedArray);
// Answer 34 Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function logArrayInReverse<T>(array: T[]): void {
    // Iterate through the array in reverse order
    for (let i = array.length - 1; i >= 0; i--) {
        // Log each element
        console.log(array[i]);
    }
}

// Example usage
const myArray: number[] = [1, 2, 3, 4, 5];
logArrayInReverse(myArray);
// Answer 35 Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function basicCalculator() {
  rl.question('Enter the first number: ', (num1: string) => {
    rl.question('Enter the second number: ', (num2: string) => {
      rl.question('Enter the operator (+, -, *, /): ', (operator: string) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
          console.log('Invalid numbers. Please enter valid numbers.');
          rl.close();
          return;
        }

        let result: number;

        switch (operator) {
          case '+':
            result = n1 + n2;
            break;
          case '-':
            result = n1 - n2;
            break;
          case '*':
            result = n1 * n2;
            break;
          case '/':
            if (n2 === 0) {
              console.log('Division by zero is not allowed.');
              rl.close();
              return;
            }
            result = n1 / n2;
            break;
          default:
            console.log('Invalid operator. Please enter a valid operator.');
            rl.close();
            return;
        }

        console.log(`Result: ${result}`);
        rl.close();
      });
    });
  });
}

basicCalculator();
