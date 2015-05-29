function secondGreatLow(arr) {
  var secondToLowest, secondToHighest;
  if (arr.length == 2) {
    return arr.toString().replace(/,/g, " ");
  } else {
    arr = arr.sort(function(a, b) {return a - b});
    arr.shift();
    arr.pop();
    secondToLowest = arr.shift();
    secondToHighest = arr.pop();
    return secondToLowest + ' ' + secondToHighest;
  }
}

secondGreatLow([4, 90]); // 4 90
secondGreatLow([1, 42, 42, 180]); // 42 42
