function addNestedArray(array){
  var flattened = array.toString().split(',').map(function(i){
    return (!isNaN(i)) ? parseInt(i): i;
  });
  return flattened.reduce(function(a, b){
    return a + b;
  });
}

addNestedArray([1, [2, [3 ,4] , [5,6]]]); // 21
