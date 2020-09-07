require_relative "employee_app.rb"

#welcome message
def welcome_message
	system("clear")
	puts "-" * 40
	puts "Welcome to your employee database"
	puts "-" * 40
end

#ask what the user would like to do
def options
	puts "[A]dd employee"
	puts "[D]isplay the employee details"
	puts "[Q]uit"
	puts ""
end

def validate_options
	
	puts "What would you like to do today?"
	answer = gets.strip.downcase
	system("clear")
	
		unless answer == "a" or answer == "d" or answer == "q"
			puts "Sorry, that is not a valid option"
			main
		end
	
	return answer
	
end
	
#main
def main()
	
	database = Employee.new
	
	welcome_message
	continue = "y"
	
	while continue == "y"
		
		options
		answer = validate_options
	
		case answer
			
			when "a"
			database.name_and_salary
			
			when "d"
			database.employee_count
			puts "Would you like to see all entries in the employee database? Y/N "
			entries = gets.strip.downcase
			
				if entries == "y"
					puts "*"*90
					database.display_employees
					puts "*"*90
				elsif entries == "n"
					system("clear")
				else
					puts "That was not an option"
				end
			
			when "q"
			continue = "n"
					
		end
		
		#still an issue here with quitting. If you have added an employe even if you type n, it will ask again and then quit
		puts "Is there anything else you would like to do today? Y/N"
		continue = gets.strip.downcase
		
		if continue == "y"
			system("clear")
			main
		elsif continue == "n"
			continue = "n"
		else 
			puts "That is not a valid option"
		end
		
	end
	
end
	
main
