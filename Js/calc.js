
let a = parseFloat(prompt("Enter the First Number:"));
let b = parseFloat(prompt("Enter the Second Number:"));

let choice = prompt("Enter your choice (+, -, *, /, %):");

switch (choice) {
    case '+':
        console.log("The Sum is: " + (a + b));
        break;

    case '-':
        console.log("The Difference is: " + (a - b));
        break;

    case '*':
        console.log("The Product is: " + (a * b));
        break;

    case '/':
        if (b !== 0) {
            console.log("The Division is: " + (a / b));
        } else {
            console.log("Error: Division by zero is not allowed!");
        }
        break;

    case '%':
        if (b !== 0) {
            console.log("The Remainder is: " + (a % b));
        } else {
            console.log("Error: Modulo by zero is not allowed!");
        }
        break;

    default:
        console.log("Invalid Choice!");
        break;
}
