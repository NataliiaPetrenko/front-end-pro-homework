var arr = [15, 90, false, 998, 1006, 'vasya', 'petya', 2022, 15, 05, 17, true, null]

function find (arr, value) {
    var test = []

    for (i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (item === value) {
            test.push(i);
        }
    }

    return test;
}

console.log(find(arr, 1006));