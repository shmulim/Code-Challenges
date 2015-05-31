function additivePersistance(num){
  function process(){
   num = num.toString().split('').map(function(i){
     return parseInt(i);
   }); 
   num = num.reduce(function(a, b){
     return a + b;
   });
  }
  while (num >= 10){ process() }
  if (num < 10) { return num }
}

additivePersistance(2718); // 9