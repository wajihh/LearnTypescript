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
