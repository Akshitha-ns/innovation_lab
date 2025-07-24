// while loop 
count = 1;
console.log("while loop: Counting")
while count <= 5{
    console.log("Count:"count)
    count += 1 
}
console.log("while loop finished.")

// do while loop

let counter = 0; 
console.log(" do-while Loop Example");
do {
    console.log("Current counter value: "counter);
    counter++; 
} while (counter < 5){
console.log("do-while loop finished. Final counter value: " + counter);
}

// for loop

console.log("for loop: Counting from 0 to 4 ");
for (let i = 0; i < 5; i++) { 
    console.log("Number:"i);
}
console.log("for loop with simple range finished.");

// nested for loop

 rows = 5;
for ( i = 1; i <= rows; i++) { 
     patternRow = "";
    for ( j = 0; j < i; j++) {
        patternRow += "* ";
    }
    console.log(patternRow); 
}
console.log("Star pattern finished.");

