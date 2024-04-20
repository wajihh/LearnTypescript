// 1.This program stores a person's name and prints a personalized message.
let personname: string = "Abdullah";
const message: string = `Hello ${personname}, would you like to learn some Python today?`;
console.log(message);
// 2.This program stores a person's name and prints it in lowercase, uppercase, and titlecase.
let name1: string = "Abdullah Wajih";
console.log(`Lowercase: ${name1.toLowerCase()}`);
console.log(`Uppercase: ${name1.toUpperCase()}`);
console.log(`Title Case: ${name1.replace(/(^\w+)|(\s\w+)/g, m => m.toUpperCase())}`);
// 3.This program finds a quote from a famous person and prints it with the author's name.
const famousPerson: string = "Albert Einstein";
const quote: string = `"A person who never made a mistake never tried anything new."`;
console.log(`${famousPerson} once said, ${quote}`);
// 4.This program stores the name and quote in separate variables and prints the message.
const famous_Person: string = "Marie Curie";
const message2: string = `${famous_Person} once said, 'One never notices what has been done; one can only see what remains to be done.'`;
console.log(message2);
// 5. Striping Names This program stores a name with whitespace characters and prints it with and without stripping.
let name3: string = "  \tSultan  \n";
console.log(`Name with whitespace: ${name3}`);
console.log(`Stripped name: ${name3.trim()}`);
// 6. This program performs operations to get the number eight and prints the results.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// 7.This program stores your favorite number and creates a message revealing it.
let favoriteNumber: number = 7;
const message4: string = `My favorite number is ${favoriteNumber}.`;
console.log(message4);

// 8.This program stores a person's name and prints a personalized message.
let person_name: string = "Abdullah";
const message5: string = `Salam ${person_name}, would you like to learn some Python today?`;
console.log(message5);

// Today is 20 April 2024 I have done 8 of the getting started excercises 
// In next I am going to create an array with names of friends

// 9. This program stores names in an array and prints each person's name.
let friend_names: string[] = ["Ali", "Basharat", "Haroon"];

for (let name of friend_names) {
  console.log(name);
}
// 10. Greetings to Friends
for (let name of friend_names) {
    console.log(`Asslam o alikum & Eid Mubarak, ${name}!`);
  }
  