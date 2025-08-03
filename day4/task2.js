// Create objects representing real-world entities
const student = {
  name: 'John Doe',
  age: 20,
  // Add a method to display info
  displayInfo: function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

// Invoke the method
student.displayInfo(); // Output: "Name: John Doe, Age: 20"

// Accessing and modifying object properties
console.log(student.name); // Output: "John Doe"
student.age = 21;
console.log(student.age); // Output: 21