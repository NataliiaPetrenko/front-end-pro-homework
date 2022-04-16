var min = Number(prompt("Kindly write your number from 0 to 59:"));

if (min <= 15) {
    document.write("Your number is in the first quarter hour");
} else if (min > 15 && min <= 30) {
    document.write("Your number is in the second quarter hour");
} else if (min > 30 && min <= 45) {
    document.write("Your number is in the third quarter hour");
} else if (min > 45) {
    document.write ("Your number is in the fourth quarter hour");
}