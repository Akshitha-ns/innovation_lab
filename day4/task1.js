
const numbers = [5, 12, 8, 130, 44];
const strings = ['hello', 'world', '!'];


const filteredNumbers = numbers.filter(num => num > 10);
console.log(filteredNumbers); 

const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); 

const concatenatedStrings = strings.reduce((acc, current) => acc + ' ' + current, '');
console.log(concatenatedStrings); // Output: " hello world !"


const slicedNumbers = numbers.slice(1, 3);
console.log(slicedNumbers);
console.log(numbers); 

// 4. Use splice() to remove and/or add elements in an array
const removed = numbers.splice(2, 1); // Remove 1 element at index 2
console.log(numbers); // Output: [5, 12, 130, 44]
console.log(removed); // Output: [8]

// 5. Use the spread operator to clone an array and merge two arrays
const clonedNumbers = [...numbers];
console.log(clonedNumbers); // Output: [5, 12, 130, 44]

const mergedArray = [...numbers, ...strings];
console.log(mergedArray); // Output: [5, 12, 130, 44, 'hello', 'world', '!']
