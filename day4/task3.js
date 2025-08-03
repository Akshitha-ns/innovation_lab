const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name); // Output: "Alice"
console.log(age); // Output: 25
const person = { name: 'Bob' };
const { name, age = 30 } = person;
console.log(name); // Output: "Bob"
console.log(age); // Output: 30

const nestedPerson = { info: { name: 'Charlie', age: 20 } };
const { info: { name, age } } = nestedPerson;
console.log(name); // Output: "Charlie"
console.log(age); // Output: 20
const original = { a: 1, b: 2 };
const clone = { ...original };
console.log(clone); // Output: { a: 1, b: 2 }

const merged = { ...original, c: 3 };
console.log(merged); // Output: { a: 1, b: 2, c: 3 }