addNestedArray = (array) ->
  flattened = array.toString().split(',').map( (i) ->
   if (!isNaN(i))
    parseInt(i)
   else i
  )
  flattened.reduce( (a, b) ->
   a + b
  )

addNestedArray [1, [2, [3 ,4] , [5,6]]] # 21
