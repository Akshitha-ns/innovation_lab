const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];
console.log(users[0].name); 

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); 
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); 

function greet({ name }) {
  console.log(`Hello, ${name}!`);
}
greet({ name: 'John' }); 

