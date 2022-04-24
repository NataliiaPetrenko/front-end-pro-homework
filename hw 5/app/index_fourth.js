function calcRectangular (x1, y1, x2, y2, x3, y3, x4, y4) {
    if ((x1 == x4 || x2 == x3) && (y1 == y2 || y4 == y3)) {
        console.log ("The figure is a rectangular!")
        return;
    } else {
        console.log("The figure isn't a rectangular!");
        return;
    }
}

console.log(calcRectangular(
    +prompt("Kindly enter x1: "),
    +prompt("Kindly enter y1: "),
    +prompt("Kindly enter x2: "),
    +prompt("Kindly enter y2: "),
    +prompt("Kindly enter x3: "),
    +prompt("Kindly enter y3: "),
    +prompt("Kindly enter x4: "),
    +prompt("Kindly enter y4: "),

));