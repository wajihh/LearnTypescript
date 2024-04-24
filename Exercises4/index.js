"use strict";
// Task 25 Alien Colors 1
let alien_color1 = "green"; // Assign alien color
if (alien_color1 === "green") {
    console.log("You just earned 5 points!"); // Earned points for green alien
}
else {
    console.log("No points awarded."); // No points for other colors (optional)
}
// Test case (alien color is green)
alien_color1 = "green";
console.log("--- Test Case 1 ---");
if (alien_color1 === "green") {
    console.log("You just earned 5 points!");
}
// Test case (alien color is not green)
alien_color1 = "red";
console.log("--- Test Case 2 ---");
if (alien_color1 === "green") {
    console.log("You just earned 5 points!"); // This won't print
}
// Task 26 Alien Colors 2
let alien_color2 = "yellow"; // Assign alien color
if (alien_color2 === "green") {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points for shooting the alien.");
}
// Test case (alien is green)
alien_color2 = "green";
console.log("--- Test Case 1 ---");
if (alien_color2 === "green") {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points for shooting the alien."); // This won't print
}
// Test case (alien is not green)
alien_color2 = "red";
console.log("--- Test Case 2 ---");
if (alien_color2 === "green") {
    console.log("You just earned 5 points for shooting the alien."); // This won't print
}
else {
    console.log("You just earned 10 points for shooting the alien.");
}
// Task 27 Alien Colors 3
let alien_color3 = "yellow"; // Assign alien color
if (alien_color3 === "green") {
    console.log("You earned 5 points for the green alien.");
}
else if (alien_color3 === "yellow") {
    console.log("You earned 10 points for the yellow alien.");
}
else if (alien_color3 === "red") {
    console.log("You earned 15 points for the red alien.");
}
else {
    console.log("Invalid alien color."); // Handle unexpected colors (optional)
}
// Test case (alien is green)
alien_color1 = "green";
console.log("--- Test Case 1 ---");
if (alien_color1 === "green") {
    console.log("You earned 5 points for the green alien.");
}
else if (alien_color1 === "yellow") {
    console.log("You earned 10 points for the yellow alien."); // This won't print
}
else if (alien_color1 === "red") {
    console.log("You earned 15 points for the red alien."); // This won't print
}
// Test case (alien is yellow)
alien_color2 = "yellow";
console.log("--- Test Case 2 ---");
if (alien_color2 === "green") {
    console.log("You earned 5 points for the green alien."); // This won't print
}
else if (alien_color2 === "yellow") {
    console.log("You earned 10 points for the yellow alien.");
}
else if (alien_color2 === "red") {
    console.log("You earned 15 points for the red alien."); // This won't print
}
// Test case (alien is red)
alien_color3 = "red";
console.log("--- Test Case 3 ---");
if (alien_color3 === "green") {
    console.log("You earned 5 points for the green alien."); // This won't print
}
else if (alien_color3 === "yellow") {
    console.log("You earned 10 points for the yellow alien."); // This won't print
}
else if (alien_color3 === "red") {
    console.log("You earned 15 points for the red alien.");
}
// Task 28 Stages of Life
let age = 65; // Set the age variable
if (age < 2) {
    console.log("You are a baby.");
}
else if (age < 4) {
    console.log("You are a toddler.");
}
else if (age < 13) {
    console.log("You are a kid.");
}
else if (age < 20) {
    console.log("You are a teenager.");
}
else if (age < 65) {
    console.log("You are an adult.");
}
else {
    console.log("You are an elder.");
}
// Task 29 Faviourite Fruit
let favoriteFruits = ["Apples", "Bananas", "Mangoes"];
if (favoriteFruits.includes("Bananas")) {
    console.log("You really like bananas!");
}
if (favoriteFruits.includes("Apples")) {
    console.log("You enjoy apples as well.");
}
if (favoriteFruits.includes("Mangoes")) {
    console.log("Mangoes are a great choice!");
}
// Add more checks for other favorite fruits
// Task 30 Hello Admin
let usernames1 = ["user1", "user2", "admin", "user4", "user5"];
for (let username of usernames1) {
    if (username.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
// Task 31 No Users
let usernames = []; // Empty array
if (!(usernames === null || usernames === void 0 ? void 0 : usernames.length)) { // Check if usernames is null or undefined and then length
    console.log("We need to find some users!");
}
else {
    // ... rest of the code from Exercise 30
}
//Task 32 Checking User Names Case Sensitive Comparison
let currentUsers = ["javed", "jannat", "ali", "bilal"];
let newUsers = ["JAVED", "Marium", "alishba", "Dawood"];
for (let newUser of newUsers) {
    let isAvailable = currentUsers.every((currentUser) => currentUser.toLowerCase() !== newUser.toLowerCase());
    if (isAvailable) {
        console.log(`${newUser} is available.`);
    }
    else {
        console.log(`${newUser} will need to enter a new username.`);
    }
}
// Task 33 Ordinal Numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ending;
    if (number % 10 === 1 && number !== 11) {
        ending = "st";
    }
    else if (number % 10 === 2 && number !== 12) {
        ending = "nd";
    }
    else if (number % 10 === 3 && number !== 13) {
        ending = "rd";
    }
    else {
        ending = "th";
    }
    console.log(`${number}${ending}`);
}
//Task 34 Pizzas
let pizzas = ["Focaccia", "Hawaiian", "Margherita"];
for (let pizza of pizzas) {
    console.log(`I like ${pizza.toLowerCase()} pizza.`);
}
console.log("I really love pizza!");
// Task 35 Animals
let animals = ["Dogs", "Cats", "Rabbits"];
for (let animal of animals) {
    console.log(`${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great companion!");
