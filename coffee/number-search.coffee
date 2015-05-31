numberSearch = (str) ->
  numbers = str.split('').filter( (i) ->
   if (!isNaN(i))
    i
   )
  numbers = numbers.reduce( (a, b) ->
     parseInt(a) + parseInt(b)
   )
  letters = str.split('').filter( (i) ->
   if (i.match(/[A-Za-z]/))
    i
   )
  Math.round( numbers / letters.length )


alert numberSearch 'H3ello9-9' # 4
