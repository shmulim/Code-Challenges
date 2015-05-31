function numberSearch(str) {
  var numbers, letters;
  numbers = str.split('').filter(function(i) {
    if (!isNaN(i)){ return i }
  });
  numbers = numbers.reduce(function(a, b) {
    return parseInt(a) + parseInt(b);
  });
  letters = str.split('').filter(function(i) {
    if (i.match(/[A-Za-z]/)){ return i }
  });
  return Math.round(numbers / letters.length);
}

numberSearch('H3ello9-9'); // 4
