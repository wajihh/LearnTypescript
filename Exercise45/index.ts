// Task 45 Cars
type CarInfo = {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow any additional key-value pairs
  };
  
  function createCar(manufacturer: string, model: string, ...extras: [string, any][]): CarInfo {
    const car: CarInfo = {
      manufacturer,
      model,
    };
  
    extras.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  }
  // Example usage
  const myCar = createCar('Toyota', 'Camry', ['color', 'white'],['sunroof','yes'], ['year', 2024]);
  console.log(myCar);
  