removeNums = (str) ->
  str = str.split('').filter( (i) ->
   if isNaN(i)
    i
  )
  str.join('')

alert removeNums '1d22f3' # df
