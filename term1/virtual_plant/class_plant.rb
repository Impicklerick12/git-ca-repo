class Plant
	
	attr_accessor :name, :sing, :feed, :water, :spray
	
	@@happiness = 0
	@@hunger = 0
	@@thirst = 0
	@@bug_count = 0
	
	
	# # WRONG NUMBER OF ARGUMENTS? EXPECTING 5
	# def initialize(name)
	# 	@name = name
		# @sing = sing
		# @feed = feed
		# @water = water
		# @spray = spray
	# end
	
	def rename
		puts "What would you like to change your plants name to?"
		rename = gets.strip
		@name = rename
		puts "You have successfully renamed your plant: #{@name}!"
		sleep(2)
		clear_welcome
		return @name
	end
	
	# def name(rename)
	# 	name = rename
	# 	return name
	# end
	
	# def sing
	# 	puts "You have sung a lovely song, and made your plant happy!"
	# 	@@happiness += 1
	# 	puts "You have increased your plants happiness level to #{@@happiness}!"
	# 	sleep(2)
	# 	clear_welcome
	# end
	
	def feed
		@@hunger -= 1
		@@thirst += 1
		@@bug_count += 1
		puts @@hunger >= -3 ? "Yummy! You have fed your plant" : "Your planty is too full! Please chose another option!"
		show_variables
	end
	
	def water
		@@thirst -= 1
		@@hunger += 1
		@@bug_count += 1
		puts @@thirst >= -3 ? "Thirst quenching! You have watered your plant" : "Your planty is watered enough. Please chose another option!"
		show_variables
	end
	
	def spray
		@@bug_count -= 1
		@@hunger += 1
		@@thirst += 1
		puts @@bug_count >= -3 ? "Healthy! You have srpayed your plant with bug remover" : "There are no bugs left on your plant. Please chose another option!"
		show_variables
	end
	
	def show_variables
		puts "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
		puts "Your current plant levels are - "
		puts "Hunger: #{@@hunger}"
		puts "Thirst: #{@@thirst}"
		puts "Bug Count : #{@@bug_count}"
		puts "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
	end

end