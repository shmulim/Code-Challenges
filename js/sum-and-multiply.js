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

sum([1, 2, 3, 4, 5]); // 15
multiply([1, 2, 3, 4, 5]); // 120
