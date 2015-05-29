function exOh(str) {
  var x, o;
  x = str.split('').filter(function(i) {
    return i === 'x';
  });
  o = str.split('').filter(function(i) {
    return i === 'o';
  });
  return (x.length == o.length) ? true : false;
}

exOh('xooxxo'); // true
exOh('x'); // false
