function numberSearch(str) {
  numbers = str.split('').filter(function(i) {
    return (!isNaN(i)) ? i : null;
  });
  numbers = numbers.reduce(function(a, b) {
    return parseInt(a) + parseInt(b);
  });
  letters = str.split('').filter(function(i) {
    return (i.match(/[A-Za-z]/)) ? i : null;
  });
  return Math.round(numbers / letters.length);
}

numberSearch('H3ello9-9'); // 4