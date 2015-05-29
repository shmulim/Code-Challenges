function firstFactorial(num) {
    var numArr = [];
    for (var i = 1; i < num + 1; i++) {
        numArr.push(i);
    }
    return numArr.reduce(function(a, b) {
        return a * b;
    });
}

firstFactorial(8); // 40320