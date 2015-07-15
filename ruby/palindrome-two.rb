def is_palindrome(str)
    str.gsub(' ', '').reverse == str.gsub(' ', '')
end
    
is_palindrome('race car')
# true

is_palindrome('hello world');
# false
