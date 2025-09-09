const currentDate = new Date(); 
const specificDate = new Date('2025-09-09'); 
const anotherDate = new Date(2025, 8, 9, 10, 30); 

console.log('Current Date:', currentDate);
console.log('Day:', currentDate.getDate());
console.log('Month:', currentDate.getMonth() + 1); 
console.log('Year:', currentDate.getFullYear());
console.log('Hours:', currentDate.getHours());
console.log('Minutes:', currentDate.getMinutes());

