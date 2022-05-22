function sumCalc (start, step, end) {
    if (start < 0 || end < 0 || step < 0) {
        return "eror";
    } else if (start > end) {
        return 0;
    } else {
        return start + sumCalc(start + start, step, end)
    }
}

console.log(sumCalc(1,5,9));