while (true) {
    var firstNumber = prompt ('Kindly enter your first number: ');

    if ((!(Number(firstNumber)))) {
        console.log('Первый ввод – не число');
        break;
    }

    var secondNumber = prompt ('Kindly enter your second number: ');

    if ((!(Number(secondNumber)))) {
        console.log('Второй ввод – не число');
        break;
    }

    console.log(compareNumbers(firstNumber, secondNumber));

}

function compareNumbers (firstNumber, secondNumber) {
    if (firstNumber === secondNumber) {
        console.log('Числа равны!');
        return;
    } else if (firstNumber < secondNumber) {
        console.log('Первое число меньше');
        return;
    } else if (firstNumber > secondNumber) {
        console.log('Второе число меньше!')
        return;
    }   
}