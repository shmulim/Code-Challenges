def digitize(arr)
    arr.split("").map { |a| a.to_i }
end

digitize("1234")

# [1, 2, 3, 4]
