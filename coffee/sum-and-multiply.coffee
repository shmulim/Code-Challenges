array = [1, 2, 3, 4, 5]

sum = (arr) ->
 arr.reduce (x, y) ->
   x + y

multiply = (arr) ->
  arr.reduce (x, y) ->
    x * y

sum array # 15
multiply array # 120
