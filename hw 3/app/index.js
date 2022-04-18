const actionAdd = "+";
const actionMinus = "-";
const actionMultipl = "*";
const actionDivision = "/";

do {
    var userAction = prompt(`What kind of action you'd like to do? (only: ${actionAdd}, ${actionMinus}, ${actionMultipl}, ${actionDivision})`);

} while (!(userAction == actionAdd || userAction == actionMinus || userAction == actionMultipl || userAction == actionDivision));

do {
    var userOperand = Number(prompt("How many operands you'd like to use?"));

} while (!(userOperand > 1));

var firstOperand = Number(prompt("Kindly specify the first operand: "));
var secondOperand = Number(prompt("Kindly specify the second operand: "));

var result;

switch (userAction) {
    case "+":
        result = firstOperand + secondOperand;
        break;
    case "-":
        result = firstOperand - secondOperand;
        break;
    case "*":
        result = firstOperand * secondOperand;
        break;
    case "/":
        result = firstOperand / secondOperand;
        break;
}

alert("The result is: " + result);