"use strict";
//Task 36 T Shirt
function make_shirt(size, message) {
    console.log(`I made a ${size} shirt with the message: "${message}"`);
}
make_shirt('large', 'I am Qiadi 804'); // Call the function
// Task 37 Large Shirts
function make_shirt_l(size = 'large', message = 'I love Pakistan') {
    console.log(`I made a ${size} shirt with the message: "${message}"`);
}
make_shirt_l(); // Large, default message
make_shirt_l('medium'); // Medium, default message
make_shirt_l('small', 'Pakistan is a Great Country'); // Small, custom message
// Task 38 Cities
function describe_city(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi'); // Default country (Pakistan)
describe_city('Tokyo', 'Japan');
describe_city('New York', 'USA');
// Task39 City Names
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Berlin', 'Germany'));
console.log(city_country('London', 'UK'));
// Task 40 Album
function make_album(artist, title, tracks) {
    return { artist, title, tracks };
}
const album1 = make_album('The Beatles', 'Abbey Road', 10);
const album2 = make_album('Pink Floyd', 'The Dark Side of the Moon', 5);
const album3 = make_album('Kendrick Lamar', 'To Pimp a Butterfly', 14);
console.log(album1);
console.log(album2);
console.log(album3);
// Task 41 Magicians Array and Functions
const magicians = ['David Copperfield', 'Penn & Teller', 'Criss Angel'];
function show_magicians(magicians) {
    magicians.forEach((magician) => console.log(magician));
}
show_magicians(magicians);
// Task41 Great Magicians
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
}
const magiciansCopy = [...magicians]; // Copy the array
make_great(magiciansCopy);
show_magicians(magiciansCopy); // Modified names
show_magicians(magicians); // Original names remain unchanged
// Task 43 Unchanged Magicians
function make_great1(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
const originalMagicians = ['Alice', 'Bob', 'Charlie'];
const greatMagicians = make_great1(originalMagicians.slice()); // Copy the array
show_magicians(originalMagicians); // Original names
show_magicians(greatMagicians); // New array with "the Great" added
// Task 44 Sandwiches (Variable Arguments)
function build_sandwich(...ingredients) {
    console.log(`Your sandwich includes:`);
    ingredients.forEach((ingredient) => console.log(`- ${ingredient}`));
}
build_sandwich('bread', 'cheese');
build_sandwich('bread', 'cheese', 'tomatoes');
build_sandwich('bread', 'cheese', 'tomatoes', 'lettuce', 'mustard');
