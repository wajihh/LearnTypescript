"use strict";
function createCar(manufacturer, model, ...extras) {
    const car = {
        manufacturer,
        model,
    };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Example usage
const myCar = createCar('Toyota', 'Camry', ['color', 'white'], ['sunroof', 'yes'], ['year', 2024]);
console.log(myCar);
