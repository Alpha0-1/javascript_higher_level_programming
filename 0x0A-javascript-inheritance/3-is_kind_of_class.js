/**
 * Function to check if an object is an instance of a specified class or its subclasses.
 * This function checks the entire inheritance chain, unlike isSameClass.
 * It demonstrates how inheritance relationships work in JavaScript.
 * 
 * @param {Object} obj - The object to check
 * @param {Function} classDefinition - The class constructor to check against
 * @returns {boolean} True if obj is an instance of classDefinition or inherits from it
 */
function isKindOfClass(obj, classDefinition) {
  // Check if both parameters are valid
  if (obj === null || obj === undefined || typeof classDefinition !== 'function') {
    return false;
  }

  // Use instanceof operator to check inheritance chain
  // This returns true if the object is an instance of the class or any of its parent classes
  return obj instanceof classDefinition;
}

// Export the function for use in other modules
module.exports = isKindOfClass;

// Example usage and demonstration:
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// 
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
// }
// 
// class Puppy extends Dog {
//   constructor(name, breed, age) {
//     super(name, breed);
//     this.age = age;
//   }
// }
// 
// const animal = new Animal('Generic');
// const dog = new Dog('Buddy', 'Golden Retriever');
// const puppy = new Puppy('Max', 'Labrador', 3);
// 
// console.log(isKindOfClass(animal, Animal)); // true
// console.log(isKindOfClass(dog, Animal)); // true - Dog inherits from Animal
// console.log(isKindOfClass(dog, Dog)); // true
// console.log(isKindOfClass(puppy, Animal)); // true - Puppy inherits from Dog which inherits from Animal
// console.log(isKindOfClass(puppy, Dog)); // true - Puppy inherits from Dog
// console.log(isKindOfClass(puppy, Puppy)); // true
// console.log(isKindOfClass(animal, Dog)); // false - Animal is not a Dog
