var start = Number(prompt('Kindly specify your starting number: '));

if (start < 0) {
    start = 0;
}

var step = Number(prompt('Kindly specify the number for increment step: '));

if (step < 1) {
    step = 1;
}

function numberGenerator(start, step){
    var start = start + step;
    console.log(start);
    return;
}

function getSequence (start, step) {
    numberGenerator(start, step);
}

getSequence(start, step);