function wordCount($str){
  $exploded_arr = (explode(' ', $str));
  print count($exploded_arr);	
}

wordCount('hello world'); // 2
wordCount('one two three'); // 3
