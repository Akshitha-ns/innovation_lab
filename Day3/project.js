// Task manager module
let tasks = [];

const addTask = (task, callback) => {
    tasks.push(task);
    if (callback) callback();
};

const printTasks = () => {
    console.log("Current tasks:");
    tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
};

// Demonstrate use of arbitrary arguments
const addMultipleTasks = (...tasksToAdd) => {
    tasks.push(...tasksToAdd);
    console.log(`Added ${tasksToAdd.length} tasks.`);
};

// Illustrate variable scopes
let globalVar = "I'm global";
function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);   // Accessible
}
scopeExample();
console.log(globalVar); // Accessible
// console.log(localVar); // Not accessible (ReferenceError)

// Example usage
addTask("Buy groceries", () => console.log("Task added: Buy groceries"));
addTask("Do laundry", printTasks);
addMultipleTasks("Clean room", "Study JavaScript", "Exercise");
printTasks();
