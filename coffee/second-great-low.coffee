secondGreatLow = (arr) ->
 if arr.length == 2
  arr.toString().replace(/,/g, ' ')
 else
  arr.sort( (a, b) -> a - b)
  arr.shift()
  arr.pop()
  secondToLowest = arr.shift();
  secondToHighest = arr.pop()
  secondToLowest + ' ' + secondToHighest

secondGreatLow [4, 90] # 4 90
secondGreatLow [1, 42, 42, 180] # 42 42
