// // Function to get a random number between min and max (inclusive)
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Faulty calculator function
// function faultyCalculator(num1, num2, operator) {
//     // 10% chance to perform wrong operation
    const shouldBeFaulty = getRandomNumber(1, 10) === 1; // ~10% probability
    
    if (shouldBeFaulty) {
        // Perform wrong operations
        switch (operator) {
            case '+':
                return num1 - num2; // + becomes -
            case '*':
                return num1 + num2; // * becomes +
            case '-':
                return num1 / num2; // - becomes /
            case '/':
                return num1 ** num2; // / becomes ** (exponentiation)
            default:
                return "Invalid operator";
        }
    } else {
        // Perform correct operations
        switch (operator) {
            case '+':
                return num1 + num2;
            case '*':
                return num1 * num2;
            case '-':
                return num1 - num2;
            case '/':
                return num1 / num2;
            default:
                return "Invalid operator";
        }
    }


// Get user input
const num1 = parseFloat(prompt("Enter first number:"));
const num2 = parseFloat(prompt("Enter second number:"));
const operator = prompt("Enter operator (+, -, *, /):");

// Calculate and display result
const result = faultyCalculator(num1, num2, operator);
console.log(`Result: ${result}`);
alert(`Result: ${result}`);
