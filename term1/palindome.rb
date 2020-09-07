puts "----------------------"
puts "PALINDROME CHECKER APP"
puts "----------------------"

print "Please enter a word to see if it's a palindrome: "
answer = gets.strip
string = answer.downcase

def palindrome_checker(string)
	
	if string == string.reverse
		puts "That word is a palindrome!"
		
	else 
		puts "That word is not a palindrome!"
		
	end
	
end

palindrome_checker(string)