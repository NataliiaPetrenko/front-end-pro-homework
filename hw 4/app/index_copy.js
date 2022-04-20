var line = '';

for (var i = 0; i < 7; i++) {
    if (i == 0) {
        line += '*';
    } 

    if (i == 1) {
        for (var j = 0; j < 2; j++){
            line += '*';
        }
    }

    if (i == 2) {
        for (var j = 0; j < 3; j++){
            line += '*';
        }
    }

    if (i == 3) {
        for (var j = 0; j < 4; j++){
            line += '*';
        }
    }

    if (i == 4) {
        for (var j = 0; j < 5; j++){
            line += '*';
        }
    }

    if (i == 5) {
        for (var j = 0; j < 6; j++){
            line += '*';
        }
    }

    if (i == 6) {
        for (var j = 0; j < 7; j++){
            line += '*';
        }
    }

    line = line + ' \n'; 
}

console.log(line);