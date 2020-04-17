# Create an app that lets a user look after a virtual plant.

# The user should be able to do one action per day (where each cyle of a game loop is one day)…

# name or rename the plant
# sing to the plant to increase its happiness
# feed the plant to decrease its hunger
# water the plant to decrease its thirst
# spray the plant with bug repellent to decrease its bug count
# quit the game
# Each of those actions should be a separate method.
# Use a case statement to process the user’s choice and trigger a method.
# At the end of each day, give the user an update on the plants stats:
# name
# happiness
# hunger
# thirst
# bug count
# Remember to use global variables to let the functions modify the variable values!

require_relative "class_plant.rb"
#clear screen and welcome message
def clear_welcome
	
	system("clear")
puts "    _         ___"
puts "  _(_)_    .-'   '-."
puts " (_)@(_)  /         \\  ,,,   _"
puts "   (_),,, \\^^^^|^^^^/ {{{}}_(_)_"
puts "    |{{{}} \\   |   /,  ~Y~(_)@(_)"
puts "    | ~Y~(@)\\  |  /{}} \\|/  (_)"
puts "  (\\|/)| \\Y/ \\ | / ~Y~ \\|/ (\\|/)"
puts "   \\|/\\|/\\|/  \\|/  \\|/\\\\|//\\\\|//"
puts "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
puts "Welcome to your virtual plant app!"
puts "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"

end

# def init_name
	
# 	puts "What would you like to name your planty today?"
# 	first_name = gets.strip
# 	puts "Your new planty #{first_name} is alive and well!"
# 	sleep(2)
# 	clear_welcome
# 	return first_name
# end

# def welcome
	
# 	clear_welcome
# 	init_name
	
# end

#menu options, including case statement
def menu
	
	puts "[R]ename you plant"
	# puts "[$]ing to your plant"
	puts "[F]eed your plant"
	puts "[W]ater your plant"
	puts "[S]pray your plant"
	puts "[H]elp"
	puts "[Q]uit"
	
end

def validate_options
	
	puts "What would you like to do with your plant today?"
	answer = gets.strip.downcase
	
		unless answer == "r" or answer == "$" or answer == "f" or answer == "w" or answer == "s" or answer == "h"
			puts "That doesn't seem to be an option."
			clear_welcome
		end
	
	return answer
	
end

def help
	
	clear_welcome
	puts ""
	
end

def main
	
	garden = Plant.new
	continue = true
	
	clear_welcome
	sleep(2)
	system("clear")
	# init_name
	
	while continue
		
		menu
		answer = validate_options
		
		case answer
			when "r"
			garden.rename
			# when "$"
			# garden.sing
			when "f"
			garden.feed
			when "w"
			garden.water
			when "s"
			garden.spray
			when "h"
			help
			when "q"
			continue = false
		end
	end
end

main
