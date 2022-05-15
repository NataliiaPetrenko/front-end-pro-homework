var arr = [1, [1], [2], [3, [4]]]

function flatten(arr) {

    var test = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];

        if (Array.isArray(item)) {
            test = test.concat(flatten(item));
        } else {
            test.push(item);
        }
    }

    return test;
}

console.log(flatten(arr));
