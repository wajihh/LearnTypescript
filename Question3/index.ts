function getRandomNumber(): number {
  // Math.random() generates a number between 0 (inclusive) and 1 (exclusive)
  // We multiply by 100 to get a number between 0 and 99.999...
  // Math.floor() rounds down to the nearest integer, giving us a number between 0 and 99
  // Then we add 1 to get the final range between 1 and 100
  return Math.floor(Math.random() * 100) + 1;
}

// Example usage
const randomNumber = getRandomNumber();
console.log(randomNumber); // This will print a random number between 1 and 100
