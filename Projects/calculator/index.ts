// index.ts
import inquirer from "inquirer";

async function main() {
  // Get first number
  const { num1 } = await inquirer.prompt<{ num1: number }>({
    type: "number",
    name: "num1",
    message: "Enter the first number:",
  });

  // Get second number
  const { num2 } = await inquirer.prompt<{ num2: number }>({
    type: "number",
    name: "num2",
    message: "Enter the second number:",
  });

  // Get operation
  const { operation } = await inquirer.prompt<{ operation: string }>({
    type: "list",
    name: "operation",
    message: "Choose an operation:",
    choices: ["+", "-", "*", "/"],
  });

  // Perform calculation
  let result: number;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.error("Error: Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break;
  }

  // Display result
  console.log(`The result is: ${result}`);
}

main();
