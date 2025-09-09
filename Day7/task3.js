class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name ",this.name,"and I'm",this.age, "years old.");
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age); 
    this.course = course;
  }

  greet() {
    super.greet();
    console.log("I'm studying ",this.course);
  }

  showCourse() {
    console.log("Course:",this.course);
  }
}

const student1 = new Student('Amit', 20, 'B.Tech');
const student2 = new Student('Sneha', 22, 'MBA');

student1.greet();
student2.greet();
student1.showCourse(); 
student2.showCourse();
