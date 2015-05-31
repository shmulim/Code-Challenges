additivePersistance = (num) ->
  process = ->
    num = num.toString().split('').map( (i) ->
     parseInt(i)
    )
    num = num.reduce( (a,b) ->
     a + b
    )
  while (num >= 10)
   process()
  if (num < 10)
   num

additivePersistance 2718 # 9
