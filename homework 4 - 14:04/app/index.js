var line = '';

for (var i = 0; i < 12; i++){
    if (i == 0 || i == 11) {
        for (var j = 0; j <= 27; j++){
            line += '#';
        }
    } 
    
    if (i == 1) {
        for (var j = 0; j <= 27; j++){
            if (j < 5 || j > 21) {
                line += '#';
            } else if (j > 6 || j < 22){
                line += ' ';
            }
        }
    }

    if (i == 2) {
        for (var j = 0; j <= 27; j++){
            if (j < 2 || j > 25) {
                line += '#';
            } else if (j === 3) {
                line += ' ';
            } else if (j === 4) {
                line += ' ';
            } else if (j === 5) {
                line += ' ';
            } else if (j === 6) {
                line += '*';
            } else if (j === 7) {
                line += '*';
            } else if (j === 8) {
                line += '*';
            } else if (j === 25) {
                line += '*';
            } else if (j === 24) {
                line += '*';
            } else {
                line += ' ';
            }
        } 
    }

    if (i == 3) {
        for (var j = 0; j <=27; j++){
            if (j < 1 || j > 25) {
                line += '#';
            } else if (j === 4) {
                line += '*';
            } else if (j === 5 || j === 6) {
                line += '#';
            } else if (j === 7 || j === 8) {
                line += '*';
            } else if (j === 18 || j === 19) {
                line += '*';
            } else if (j === 22) {
                line += 'O';
            } else if (j === 25) {
                line += '*';
            } else {
                line += ' ';
            }
        }
    }

    if (i == 4) {
        for (var j = 0; j <= 27; j++){
            if (j < 1 || j > 25) {
                line += '#';
            } else if (j === 5 || j === 6 || j === 7) {
                line += '*';
            } else if (j === 18 || j === 19) {
                line += '#';
            } else if (j === 20 || j === 21) {
                line += '*';
            } else {
                line += ' ';
            }
        }
    }

    if (i == 5) {
        for (j = 0; j <= 27; j++){
            if (j < 1 || j > 26) {
                line += '#';
            } else if (j === 9) {
                line += 'O';
            } else if (j === 18 || j === 19) {
                line += '#';
            } else if (j === 20 || j === 21 || j === 22) {
                line += '*';
            } else {
                line += ' ';
            }
        }
    }

    if (i === 6) {
        for (j = 0; j <= 27; j++) {
            if (j < 1 || j === 27) {
                line += '#';
            } else if (j === 18 || j === 19) {
                line += '#';
            } else if (j === 20 || j === 21) {
                line += '*';
            } else {
                line += ' ';
            }
        }
    }

    if (i === 7) {
        for (j = 0; j <= 27; j++) {
            if (j < 1 || j === 27) {
                line += '#';
            } else if (j === 4) {
                line += 'O';
            } else if (j === 12) {
                line += '#';
            } else if (j === 13) {
                line += '*';
            } else {
                line += ' ';
            }
        }
    }

    if (i === 8) {
        for (j = 0; j <= 27; j++) {
            if (j < 1 || j === 27) {
                line += '#';
            } else if (j === 1) {
                line += '*';
            } else if (j === 12) {
                line += '#';
            } else if (j === 13 || j === 14) {
                line += '*';
            } else if (j === 22) {
                line += 'O';
            } else {
                line += ' ';
            }
        }
    }

    if (i === 9) {
        for (j = 0; j <= 28; j++) {
            if (j < 1 || j === 27) {
                line += '#';
            } else if (j === 1 || j === 2 || j === 3) {
                line += '*';
            } else if (j === 12 || j === 13) {
                line += '#';
            } else if (j === 14 || j === 15) {
                line += '*';
            } else if (j === 20) {
                line += 'O';
            } else if (j === 25 || j === 26) {
                line += '*';
            }
            else {
                line += ' ';
            }
        }
    }

    if (i === 10) {
        for (j = 0; j <= 27; j++) {
            if (j < 2 || j > 25) {
                line += '#';
            } else if (j === 3 || j === 4 || j === 5) {
                line += '*';
            } else if (j === 11 || j === 12 || j === 13) {
                line += '#';
            } else if (j === 14 || j === 15 || j === 16) {
                line += '*';
            } else if (j === 24) {
                line += '*';
            } else {
                line += ' ';
            }
        }
    }

    line = line + ' \n';
}

console.log(line);
