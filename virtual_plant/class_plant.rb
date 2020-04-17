class Plant
	
	attr_accessor :name, :sing, :feed, :water, :spray
	
	@@happiness = 0
	@@hunger = 0
	@@thirst = 0
	@@bug_count = 0
	
	
	#WRONG NUMBER OF ARGUMENTS? EXPECTING 5
	# def initialize(name, sing, feed, water, spray)
	# 	@name = name
	# 	@sing = sing
	# 	@feed = feed
	# 	@water = water
	# 	@spray = spray
	# end
	
	def rename
		puts "What would you like to name your plant?"
		rename = gets.strip
		first_name = rename
		puts "You have successfully named your plant: #{rename}!"
		sleep(2)
		clear_welcome
		return rename
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
		puts "Yum! You have fed your plant"
		@@hunger -= 1
		puts "You have decreased your plants hunger level to #{@@hunger}!"
		sleep(2)
		clear_welcome
	end
	
	def water
		puts "Thirst quenching! You have watered your plant"
		@@thirst -= 1
		puts "Your have decreased your plants thirst level to #{@@thirst}!"
		sleep(2)
		clear_welcome
	end
	
	def spray
		puts "Healthy! You have srpayed your plant with bug remover"
		@@bug_count -= 1
		puts "You have decreased your plants bug count to #{@@bug_count}!"
		sleep(2)
		clear_welcome
	end

end