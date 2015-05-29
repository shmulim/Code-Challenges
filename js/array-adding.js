function arrayAdding(arr){
  arr = arr.sort(function(a, b){return a-b});
  var largestNum = arr.pop();
  return (arr.reduce(function(x, y){return x+y}) == largestNum);
}

arrayAdding([0, 5, -1, 8, 12]); // true