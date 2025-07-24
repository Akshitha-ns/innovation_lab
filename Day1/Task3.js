console.log("--- 1. Arithmetic Operators ---");
let a = 12;
let b = 2;

console.log(`a = ${a}, b = ${b}`);
console.log(`a + b (Addition)       : ${a + b}`);     
console.log(`a - b (Subtraction)    : ${a - b}`);     
console.log(`a * b (Multiplication) : ${a * b}`);     
console.log(`a / b (Division)       : ${a / b}`);     
console.log(`a % b (Modulus)        : ${a % b}`);     
console.log(`a ** b (Exponentiation): ${a ** b}`);    
    
console.log("--- 2. Relational (Comparison) Operators ---");
    let x = 6;
    let y = 7;
    let z = 6;

console.log(`x = ${x}, y = ${y}, z = ${z}`);
console.log(`x == z (Equal)         : ${x == z}`);     
console.log(`x != y (Not Equal)     : ${x != y}`);     
console.log(`x < y (Less Than)      : ${x < y}`);    
console.log(`x > y (Greater Than)   : ${x > y}`);    
console.log(`x <= z (Less Than Eq.) : ${x <= z}`);   
console.log(`y >= z (Greater Than Eq.): ${y >= z}`);  

console.log("--- 3. Assignment Operators ---");
let val =10;
console.log(`Initial val = ${val}`);

val +=4; 
console.log(`val += 4: ${val}`);     

val -= 10;
console.log(`val -= 10: ${val}`);    


console.log("--- 4. Logical Operators ---");
let isAdult = true;
let hasLicense = false;
let hasCar = true;

console.log(`isAdult = ${isAdult}, hasLicense = ${hasLicense}, hasCar = ${hasCar}`);
console.log(`isAdult && hasLicense (AND) : ${isAdult && hasLicense}`); 
console.log(`isAdult || hasLicense (OR)  : ${isAdult || hasLicense}`);  
console.log(`!hasLicense (NOT)           : ${!hasLicense}`);         

console.log("--- 5. Conditional (Ternary) Operator ---");
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(`Age = ${age}. Can vote?  : ${canVote}`);
age = 16;
canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(`Age = ${age}. Can vote?  : ${canVote}`);

console.log("--- 6. Bitwise Operators ---");
let num1 = 5; 
let num2 = 3; 

console.log(`num1 = ${num1} (binary: ${num1.toString(2)}), num2 = ${num2} (binary: ${num2.toString(2)})`);
console.log(`num1 & num2 (AND)      : ${num1 & num2}`);   
console.log(`num1 | num2 (OR)       : ${num1 | num2}`); 
console.log(`num1 ^ num2 (XOR)      : ${num1 ^ num2}`); 
console.log(`~num1 (NOT)            : ${~num1}`);         
console.log(`num1 << 1 (Left Shift) : ${num1 << 1}`);   
console.log(`num1 >> 1 (Right Shift): ${num1 >> 1}`);   
console.log(`-5 >>> 1 (Zero-fill RS): ${-5 >>> 1}`);    

console.log("--- 7. Increment and Decrement Operators ---");
let counter = 1;
console.log(`Initial counter = ${counter}`);
console.log(`counter++ (Post-inc)   : ${counter++}`); 
console.log(`counter (after post-inc): ${counter}`);    
console.log(`++counter (Pre-inc)    : ${++counter}`);   
console.log(`counter (after pre-inc): ${counter}`);   
console.log(`counter-- (Post-dec)   : ${counter--}`);   
console.log(`counter (after post-dec): ${counter}`);    
console.log(`--counter (Pre-dec)    : ${--counter}`);   
console.log(`counter (after pre-dec): ${counter}`);     

