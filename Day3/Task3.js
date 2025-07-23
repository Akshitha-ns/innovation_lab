function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("sam", sayBye);



var firstvar= "I'm global";

function scopeExample() {
  var functionScoped = "I'm function scoped with var";
  let blockScoped = "I'm block scoped with let";
  const constantVar = "I'm constant";

  if (true) {
    var insideIfVar = "Inside if with var";
    let insideIfLet = "Inside if with let";
    const insideIfConst = "Inside if with const";
    console.log(insideIfLet); 
    console.log(insideIfConst); 
  }



