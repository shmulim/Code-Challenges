letterCapitalize = (str) ->
  str.split(' ').map( (i) -> 
    i[0].toUpperCase() + i.slice(1).toLowerCase() 
  ).join(' ')

letterCapitalize 'ade is a boy' # Ade Is A Boy
