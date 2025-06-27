/**
 * Function to check if an object inherits from a specified class.
 * This function checks if the object is an instance of a subclass of the specified class,
 * but NOT an instance of the class itself.
 * 
 * @param {Object} obj - The object to check
 * @param {Function} classDefinition - The class constructor to check inheritance from
 * @returns {boolean} True if obj inherits from classDefinition but is not exactly classDefinition
 */
function inheritsFrom(obj, classDefinition) {
  // Check if both parameters are valid
  if (obj === null || obj === undefined || typeof classDefinition !== 'function') {
    return false;
  }

  // Check if object is an instance of the class (inheritance chain check)
  // AND make sure it's not exactly the same class
  return (obj instanceof classDefinition) && (obj.constructor !== classDefinition);
}

// Export the function for use in other modules
module.exports = inheritsFrom;

// Example usage and demonstration:
// class Vehicle {
//   constructor(type) {
//     this.type = type;
//   }
// }
// 
// class Car extends Vehicle {
//   constructor(brand, model) {
//     super('car');
//     this.brand = brand;
//     this.model = model;
//   }
// }
// 
// class ElectricCar extends Car {
//   constructor(brand, model, batteryCapacity) {
//     super(brand, model);
//     this.batteryCapacity = batteryCapacity;
//   }
// }
// 
// const vehicle = new Vehicle('generic');
// const car = new Car('Toyota', 'Camry');
// const electricCar = new ElectricCar('Tesla', 'Model 3', '75kWh');
// 
// console.log(inheritsFrom(vehicle, Vehicle)); // false - exact instance, not inherited
// console.log(inheritsFrom(car, Vehicle)); // true - Car inherits from Vehicle
// console.log(inheritsFrom(car, Car)); // false - exact instance of Car
// console.log(inheritsFrom(electricCar, Vehicle)); // true - ElectricCar inherits from Vehicle
// console.log(inheritsFrom(electricCar, Car)); // true - ElectricCar inherits from Car
// console.log(inheritsFrom(electricCar, ElectricCar)); // false - exact instance of ElectricCar
