var userTime = prompt("When do you need to wake up?", '22:30');
var updUserTime = userTime.split(":");

var userClock = setInterval (function () {
    var date = new Date ();
    var time = date.toLocaleTimeString();
    var updTime = time.split(":");

    document.getElementById('block').innerHTML = time;

    if (updUserTime[0] === updTime [0] && updUserTime[1] === updTime[1]) {
        alert ("Wake up!");
        clearInterval(userClock);
    }
}, 1000);


