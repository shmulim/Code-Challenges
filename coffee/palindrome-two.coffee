palindromeTwo = (str) ->
  str = str.split('').filter (i) ->
   i.match(/[A-Za-z]/)
  str = str.join('').toLowerCase()

  if str == str.split('').reverse().join('')
    true
  else false

palindromeTwo 'Noel - sees Leon' # true
