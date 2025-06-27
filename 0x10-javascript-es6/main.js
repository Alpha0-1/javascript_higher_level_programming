// main.js
import ModuleClass, { moduleName, sayHello } from './102-modules.js';

console.log(moduleName); // ES6 Features
console.log(sayHello('Dev')); // Hello, Dev!

const instance = new ModuleClass('Test');
console.log(instance.name); // Test
