function swapCase(str) {
  str = str.split('').map(function(i) {
    return (i == i.toUpperCase()) ? i.toLowerCase() : i.toUpperCase();
  });
  return str.join('');
}

swapCase('Hello-LOL'); // hELLO-lol