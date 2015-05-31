function digitize($num){

function numArr($i){
settype($i, 'integer');
return($i);
}

$to_str = (string)$num;
$to_arr = str_split($to_str);
print_r( array_map("numArr", $to_arr) );
}

digitize(432423);

/*
Array
(
    [0] => 4
    [1] => 3
    [2] => 2
    [3] => 4
    [4] => 2
    [5] => 3
)
*/
