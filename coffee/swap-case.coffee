swapCase = (str) ->
 str = str.split('').map( (i) ->
  if i == i.toUpperCase()
   i.toLowerCase()
  else i.toUpperCase()
 )
 str.join('')

swapCase 'Hello-LOL' # hELLO-lol
