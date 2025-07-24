function display(){
  console.log("simple calculator");
  console.log("1. Add");
  console.log("2. subtract");
  console.log("3. multiply");
  console.log("4. Divide");
  choice = prompt("Enter your choice: ");
  return choice;
}

function calculator() {
  let num1,num2,result;
  let choice = display();

  switch (choice) {
    case 1:
      result = num1 + num2;
      break;
    case 2 :
      result = num1 - num2;
      break;
    case 3:
      result = num1 * num2;
      break;
    case 4:
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.log("Error: Division by zero is not allowed.");
        return;
      }
      break;
    default:
      console.log("Error: Invalid choice .");
      return;
  }

  alert(`The result is: ${result}`);
}

calculator();
