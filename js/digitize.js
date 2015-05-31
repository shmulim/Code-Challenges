function digitize(n) {
  return n.toString().split('').map(function(i) {
    return parseInt(i);
  });
}

digitize(423423); // [4, 2, 3, 4, 2, 3]