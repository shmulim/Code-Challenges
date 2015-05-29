exOh = (str) ->
  x = str.split('').filter (i) ->
    i == 'x'
  o = str.split('').filter (i) ->
    i == 'o'

  if x.length == o.length
   true
  else false

exOh 'xoxoox' # true
exOh 'x' # false
