const student = {
  name: 'John Doe',
  age: 20,
  displayInfo: function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

student.displayInfo();
console.log(student.name); 
student.age = 21;
console.log(student.age);
