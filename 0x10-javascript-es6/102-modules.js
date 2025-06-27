// 102-modules.js — Exporting and importing modules

// Exporting module
export const moduleName = 'ES6 Features';

export function sayHello(name) {
  return `Hello, ${name}!`;
}

// Default export
export default class ModuleClass {
  constructor(name) {
    this.name = name;
  }
}
