class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is ",this.name," and I'm ",this.age," years old.");
  }
}

const person1 = new Person('Arun', 23);
const person2 = new Person('Sunitha',24);
person1.greet(); 
person2.greet(); 
