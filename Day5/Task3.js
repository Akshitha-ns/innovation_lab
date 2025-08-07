function greet() {
  console.log(`Hello, ${this.name}!`);
}
const user = { name: 'John' };
greet.call(user); 

function sum(a, b) {
  console.log(a + b);
}
const numbers = [1, 2];
sum.apply(null, numbers); 
const boundGreet = greet.bind(user);
boundGreet(); 
