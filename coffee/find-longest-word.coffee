array = ['wordOne', 'wordTwo', 'wordThree']

findLongestWord = (arr) ->
  arr = arr.map (i) ->
    i.length
  Math.max.apply(null, arr)

findLongestWord array # 9
