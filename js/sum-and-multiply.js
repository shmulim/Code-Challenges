array = [1, 2, 3, 4, 5]

function sum(array) {
    var arr = array.reduce(function(x, y) {
        return x + y;
    });
    return arr;
}

function multiply(array) {
    var arr = array.reduce(function(x, y) {
        return x * y;
    });
    return arr;
}

sum(array); // 15
multiply(array) // 120