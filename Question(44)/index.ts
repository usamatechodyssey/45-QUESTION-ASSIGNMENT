// Task 45: Cars
function describe_car(manufacturer: string, model_name: string, ...extras: string[]) {
  let car_info: { manufacturer: string, model_name: string, extras?: string[] } = {
      manufacturer: manufacturer,
      model_name: model_name
  };
  if (extras.length > 0) {
      car_info.extras = extras;
  }
  return car_info;
}

// Call the function with different parameters
let car1 = describe_car('Toyota', 'Camry', 'Silver', 'Sunroof', 'Leather Seats');
let car2 = describe_car('Honda', 'Civic', 'Blue');
let car3 = describe_car('Ford', 'Mustang');

console.log(car1);
console.log(car2);
console.log(car3);
