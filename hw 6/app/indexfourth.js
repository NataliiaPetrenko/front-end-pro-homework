var matrix = []

function createMatrix(row, col) {

    for (i = 0; i < row; i++) {
        matrix[i] = [];

        for (j = 0; j < col; j++) {
            var random = Math.ceil(Math.random()*100)
            matrix[i].push(random);
        }
    }

    return matrix;
}

console.log(createMatrix(prompt('Kindly specify how many rows you want to have in your matrix?'), prompt('Kindly specify how many columns you want to have in your matrix?')))
