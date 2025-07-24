let tasks = [];

const addTask = (task, callback) => {
    tasks.push(task);
    if (callback) callback();
};

const printTasks = () => {
    console.log("Current tasks:");
    tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
};
const addMultipleTasks = (...tasksToAdd) => {
    tasks.push(...tasksToAdd);
    console.log(`Added ${tasksToAdd.length} tasks.`);
};

let globalVar = "I'm global";
function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar); 
    console.log(localVar);  
}
scopeExample();
console.log(globalVar); 

addTask("Buy groceries", () => console.log("Task added: Buy groceries"));
addTask("Do laundry", printTasks);
addMultipleTasks("Clean room", "Study JavaScript", "Exercise");
printTasks();
