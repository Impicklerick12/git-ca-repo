phonebook = [
	{:name => "Alex Holder", :number => "+6100000000", :address => "118 Walker St, North Sydney, NSW 2060"},
	{:name => "Ubisoft Australia", :number => "+6100000001", :address => "14 Mountain St, Ultimo, NSW 2007"},
	{:name => "Saad Saaed", :number => "+6100000002", :address => "118 Walker St, North Sydney, NSW 2060"}
]

def menu_view phonebook
	#add break in between entries
	puts "---------------------------------------"
	#puts phone book entries in organised display
	phonebook.each  { |entry| 
		#for each entry, puts the name, number and address. [] must be used as it is an array. \n creates line break between information
		puts "#{entry[:name]}\nNumber: #{entry[:number]}\nAddress: #{entry[:address]}" 
		puts "---------------------------------------"
	}	
end

def menu_add phonebook
	
	#asking for input from user, gets response, capitalize(.split.map(&:capitalize).join(' ') turns first letter of each word to capital)
	puts "Please enter the full name: "
	name = gets.strip.split.map(&:capitalize).join(' ')
	
	puts "Please enter the phone number of #{name}: "
	number = gets.strip
	
	puts "Please enter the address of #{name}: "
	address = gets.strip.split.map(&:capitalize).join(' ')
	system("clear")
	
	#successful add message
	puts "You have successfully added #{name} to your PhoneBook App"
	puts "---------------------------------------"
	puts "#{name}\nNumber: #{number}\nAddress: #{address}"
	puts "---------------------------------------"
	
	#new hash creation with input provided from user
	#adding new hash to phonebook 
	phonebook << {:name => name, :number => number, :address => address}
end

def menu_remove phonebook
	
	#ask for name of contact to remove
	puts "Please enter the full name of the contact you would like to remove: "
	name = gets.strip.split.map(&:capitalize).join(' ')
	
	#wanting to display the contact information before deleting
	# puts "---------------------------------------"
	# puts "#{name}\nNumber: #{number}\nAddress: #{address}"
	# puts "---------------------------------------"
	
	#loop to search for matching key in phonebook
	for key in phonebook
		#if key matches the name input
		if key.has_value?(name)
			
			#ask user to confirm the removal of the contact
			puts "Are you sure you want to remove the contact information for #{name}? Y/N"
			remove_answer = gets.strip.downcase
			
			#another loop to determine the outcomes from the question
			#possibly change to a while loop? like in case methods
			if remove_answer == "y"
				phonebook.delete(key)
				puts "The contact information has been removed"
			elsif
				remove_answer == "n"
				puts "#{name}'s contact information has not been removed."
				puts "---------------------------------------"
			else
				puts "Sorry, that's an invalid response. No action has been taken."
			end
		end
	end
end
	
def phone_book_app phonebook
	
	#loop asking user if they want to keep using app
	answer = "y"
	while answer == "y"
	
		#welcome message
		puts "---- Welcome to your your PhoneBook App! -----"
		
		#ask user for input on options
		puts "What would you like to do today?"
		puts "---- View all entries (view)"
		puts "---- Add an entry (add)"
		puts "---- Remove an entry (remove)"
		option = gets.strip.downcase
		system("clear")
	
		#until loop to make sure option input is viable
		until option == "add" or option == "view" or option =="remove"
			puts "That doesn't seem to be an option."
			puts "What would you like to do today?"
			puts "---- View all entries (view)"
			puts "---- Add an entry (add)"
			puts "---- Remove an entry (remove)"
			option = gets.strip.downcase
		end
		
		#case option to run one of the menu methods
		case option
			when "add"
			menu_add phonebook
		
			when "view"
			menu_view phonebook
			
			when "remove"
			menu_remove phonebook

			else
		end
	
	puts "Is there something else you would like to do with PhoneBook App? Y/N"
	answer = gets.strip.downcase
	system("clear")
	end

end

phone_book_app phonebook