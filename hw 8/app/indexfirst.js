function makePassword(password) {
    var password = "Mozart27";

    return function (userPassword) {

        var userPassword = prompt("Kindly enter your password: ")

        if (password === userPassword) {
            console.log("True");
        } else {
            console.log("False")
        }
    }
}

var requestPassword = makePassword();
requestPassword();