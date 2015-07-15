def letter_capitalize(str)
    str.split(" ").map { |a| a.capitalize }.join(" ") 
end

letter_capitalize("ade is a boy")

# "Ade Is A Boy"
