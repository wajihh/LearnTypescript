//1. Personal Message
// This program stores a person's name and prints a personalized message.
let personname: string = "Abdullah";
const message: string = `Hello ${personname}, would you like to learn some Python today?`;
console.log(message);
// 2. Name Cases
// This program stores a person's name and prints it in lowercase, uppercase, and titlecase.
let namecase: string = "Imran Khan";
console.log(`Lowercase: ${namecase.toLowerCase()}`);
console.log(`Uppercase: ${namecase.toUpperCase()}`);
console.log(`Title Case: ${namecase.replace(/(^\w+)|(\s\w+)/g, m => m.toUpperCase())}`);
