const numbers = [11,12,13,14,15];
const strings = ['computer', 'science', 'Datascience'];


const filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers); 

const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); 

const concatenatedStrings = strings.reduce((acc, current) => acc + ' ' + current, '');
console.log(concatenatedStrings); 


const slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers);
console.log(numbers); 

const removed = numbers.splice(2, 1); 
console.log(numbers); 
console.log(removed); 

const clonedNumbers = [...numbers];
console.log(clonedNumbers); 

const mergedArray = [...numbers, ...strings];
console.log(mergedArray); 
