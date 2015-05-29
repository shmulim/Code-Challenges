firstFactorial = (num) ->
  numArr = []
  numArr.push (i) for i in [1...num + 1]
  numArr.reduce (a, b) ->
   a * b

firstFactorial 8 # 40320
