function palindromeTwo(str) {
  str = str.split('').filter(function(i) {
    return i.match(/[A-Za-z]/);
  }).join('').toLowerCase();

  if (str === str.split('').reverse().join('')) {
    return true;
  }
  return false;
}

palindromeTwo('Noel - sees Leon'); // true
