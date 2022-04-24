function getNumber (firstNumber, secondNumber) {

    if ((firstNumber % 2 == 0) && (secondNumber % 2 == 0)) {
        console.log('The result is: ' + (firstNumber * secondNumber));
    } else if ((firstNumber % 2 != 0) || (secondNumber % 2 != 0)) {
        console.log('The result is: ' + (firstNumber + secondNumber));
    } else if (firstNumber > secondNumber) {
        console.log('The result is: ' + firstNumber);
    } else if (firstNumber < secondNumber) {
        console.log('The result is: ' + secondNumber);
    }
}

console.log(getNumber(+prompt('Kindly enter the first number: '), +prompt('Kindly enter the second number: ')));