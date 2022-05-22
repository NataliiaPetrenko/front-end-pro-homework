var array = [2, 3, 4, 5, 6, 7];
var arrayCopy = array.slice();

function toSum(arrayCopy, sum) {

    var sum = sum || 0;

    if (arrayCopy.length) {
        return toSum(arrayCopy, sum + arrayCopy.pop());
    } else {
        return sum;
    }
} 

console.log(toSum(arrayCopy));