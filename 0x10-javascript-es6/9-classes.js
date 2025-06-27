// 9-classes.js — Defining classes in ES6

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  // Method
  present() {
    return `I have a ${this.brand}.`;
  }

  // Getter
  get carBrand() {
    return this.brand;
  }

  // Setter
  set carBrand(newBrand) {
    this.brand = newBrand;
  }
}

const myCar = new Car('Ford');
console.log(myCar.present()); // I have a Ford.

myCar.carBrand = 'Tesla';
console.log(myCar.carBrand); // Tesla
