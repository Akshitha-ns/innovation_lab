function calculator() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let operator = prompt("Enter the operator (+, -, *, /):");
  let num2 = parseFloat(prompt("Enter the second number:"));

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        alert("Error: Division by zero is not allowed.");
        return;
      }
      break;
    default:
      alert("Error: Invalid operator.");
      return;
  }

  alert(`The result is: ${result}`);
}

calculator();
