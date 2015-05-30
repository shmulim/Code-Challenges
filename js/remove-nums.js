function removeNums(str) {
  return str.split('').filter(function(i) {
    return (isNaN(i)) ? i : null;
  }).join('');
}

removeNums('1d22f3'); // df
