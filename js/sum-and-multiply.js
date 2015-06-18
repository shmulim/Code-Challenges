array = [1, 2, 3, 4, 5];

function sum(array) {
    return array.reduce(function(x, y) {
        return x + y;
    });
}

function multiply(array) {
    return array.reduce(function(x, y) {
        return x * y;
    });
}

sum(array); // 15
multiply(array); // 120
