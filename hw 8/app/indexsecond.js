function randomNumber() {
    var arr = [];
    console.log(arr);

    return function randomiser () {

        if (arr.length === maxNumber) {
            console.log ("The array is fulfilled = " + arr);
        }

        var maxNumber = 100;
        var randomNumber = Math.floor(Math.random() * maxNumber);


        if (arr.includes(randomNumber)) {
            return randomiser ();
        } else {
            arr.push(randomNumber);
            return randomNumber;
        }
        
    }
}

var randomNum = randomNumber();

for (var i = 0; i <= 100; i++) {
    console.log(randomNum());
}