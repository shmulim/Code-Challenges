array = ['wordOne', 'wordTwo', 'wordThree'];

function findLongestWord(arr) {
    arr = arr.map(function(index) {
        return index.length;
    });
    return Math.max.apply(null, arr);
}

findLongestWord(array); // 9