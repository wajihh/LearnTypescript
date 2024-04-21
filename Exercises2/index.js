"use strict";
// Exercises 14 to 19 
// This program demonstrates how to manage guest lists, sort arrays, and print messages throughout the process. 
// Dinner Guest List
const guests = ["Albert Einstein", "Marie Curie", "Ada Lovelace"];
function inviteGuest(guestName) {
    console.log(`Dear ${guestName}, you are invited to dinner. Please join us for an evening of good food and conversation.`);
}
guests.forEach(inviteGuest);
// Guest cannot make it (replace "Marie Curie" with another name)
console.log("Unfortunately, Marie Curie cannot make it to the dinner.");
// Changed Guest List
guests.splice(guests.indexOf("Marie Curie"), 1, "Stephen Hawking");
guests.forEach(inviteGuest);
// More Guests
console.log("We found a bigger table! Inviting more guests.");
guests.unshift("Isaac Asimov"); // Add to the beginning
guests.splice(Math.floor(guests.length / 2), 0, "Alan Turing"); // Add to the middle
guests.push("Richard Feynman"); // Add to the end
guests.forEach(inviteGuest);
// Shrinking Guest List
console.log("Sorry, the new table won't arrive in time. We can only invite two guests.");
while (guests.length > 2) {
    const removedGuest = guests.pop();
    if (removedGuest) {
        console.log(`Unfortunately, ${removedGuest} we can't invite you to dinner due to space constraints.`);
    }
}
console.log("The remaining invited guests are:");
guests.forEach(inviteGuest);
console.log("Final Guest List:", guests); // Print empty list
// Seeing the World
const travelList = ["Japan", "Italy", "New Zealand", "Egypt", "Iceland"];
console.log("Original Travel List:");
console.log(travelList);
console.log("Travel List (Alphabetical - sorted copy):");
console.log(travelList.slice().sort()); // Sort a copy
console.log("Original Travel List (unchanged):");
console.log(travelList);
console.log("Travel List (Reverse Alphabetical - sorted copy):");
console.log(travelList.slice().sort().reverse());
console.log("Original Travel List (unchanged):");
console.log(travelList);
console.log("Travel List (Reversed):");
travelList.reverse();
console.log(travelList);
console.log("Travel List (Back to Original):");
travelList.reverse();
console.log(travelList);
console.log("Travel List (Sorted Alphabetically):");
travelList.sort();
console.log(travelList);
console.log("Travel List (Sorted Reverse Alphabetically):");
travelList.sort((a, b) => b.localeCompare(a)); // Sort descending
console.log(travelList);
// Final Dinner Guests
console.log("You are inviting", guests.length, "people to dinner.");
