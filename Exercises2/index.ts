// Array of desired travel destinations
const locations: string[] = ["Tokyo", "Paris", "Rio de Janeiro", "Sydney", "Cairo"];

// Print original order
console.log("Original Order:", locations);

// Print alphabetically without modifying
console.log("Alphabetical Order:", [...locations].sort()); 

// Show original order remains unchanged
console.log("Original Order (Again):", locations);

// Print reverse alphabetical without modifying
console.log("Reverse Alphabetical Order:", [...locations].sort().reverse());

// Show original order remains unchanged (again)
console.log("Original Order (Still):", locations);

// Reverse the list and print
locations.reverse();
console.log("Reversed Order:", locations);

// Reverse again to restore original order
locations.reverse();
console.log("Original Order Restored:", locations);

// Sort alphabetically and print
locations.sort();
console.log("Sorted Alphabetically:", locations);

// Sort reverse alphabetically and print
locations.sort().reverse();
console.log("Sorted Reverse Alphabetically:", locations);
// Dinner Guests
// Assuming 'locations' array from previous exercise
const numGuests = locations.length;
console.log(`I am inviting ${numGuests} people to dinner.`); 
// 20 & 21 Array and Objects
// Array of mountain ranges
const mountainRanges: string[] = ["Himalayas", "Andes", "Rockies", "Alps", "Atlas"];

// Object representing a city
const city = {
  name: "London",
  country: "UK",
  population: 9000000,
};

console.log(mountainRanges);
console.log(city);

// 22 Intentional Error
const colors: string[] = ["red", "green", "blue"];

// Attempt to access index outside array bounds (error!)
console.log(colors[5]); // This will cause an error

// Corrected access within bounds
console.log(colors[1]); // This will print "green"

// 23 & 24 Conditional Tests

// Examples (expand with more tests)
let x = 10;
let y = 5;

console.log(x > y);   // True
console.log(x === y);  // False
console.log(x !== y);  // True
console.log("apple" < "banana"); // True (alphabetical order)

let isSunny = true;
let isWarm = false;

console.log(isSunny && isWarm); // False
console.log(isSunny || isWarm); // True

let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits.includes("apple")); // True
console.log(fruits.includes("mango")); // False