digitize = (n) ->
  n.toString().split('').map( (i) ->
    parseInt(i)
  )

digitize 423423 # [4, 2, 3, 4, 2, 3]
