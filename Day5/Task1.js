
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);  

const obj = { name: 'John', age: 30 };
const { name, age } = obj;
console.log(name, age); 

console.log(obj.name); 

console.log(obj['name']); 
for (const key in obj) {
  console.log(key, obj[key]);
}
