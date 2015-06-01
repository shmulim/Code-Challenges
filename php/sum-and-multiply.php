function sum($arr){
	print_r(array_reduce($arr, function($a, $b){return $a + $b;}));
}

function multiply($arr){
	print_r(array_reduce($arr, function($a, $b){return $a * $b;}, 1));
}

sum(array(1, 2, 3, 4, 5)); // 15
multiply(array(1, 2, 3, 4, 5)); // 120
