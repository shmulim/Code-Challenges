arrayAdding = (arr) ->
  arr.sort( (a, b) -> a - b)
  largestNum = arr.pop()
  if (arr.reduce( (x, y) -> x + y) == largestNum)
   true
  else false

arrayAdding [0, 5, -1, 8, 12] # true
