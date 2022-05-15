var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];

function filterFalse (arr) {
    var test = arr.filter(function(item){
        return (
            item != NaN &&
            item != false &&
            item != '' &&
            item != undefined &&
            item != null &&
            item > 0
        );
    })

    return test;
}

console.log(filterFalse(arr));