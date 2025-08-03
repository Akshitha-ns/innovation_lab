const person = { name: 'Alan', age: 25 };
const { name, age } = person;
console.log(name); 
console.log(age); 
const person = { name: 'John' };
const { name, age = 30 } = person;
console.log(name); 
console.log(age); 

const nestedPerson = { info: { name: 'Sam', age: 20 } };
const { info: { name, age } } = nestedPerson;
console.log(name); 
console.log(age); 
const original = { a: 1, b: 2 };
const clone = { ...original };
console.log(clone);

const merged = { ...original, c: 3 };
console.log(merged); 
