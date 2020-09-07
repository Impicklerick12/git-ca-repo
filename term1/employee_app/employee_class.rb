#add employee
class Employee
	
	attr_accessor :name, :salary
	@@employee_count = 0
	@@name_and_salary = []
	
# 	def initialize(name, salary)
# 		@name = name
# 		@salary = salary
		
# 	end
	
	def name_and_salary
		puts "What is the name of the employer?"
		name = gets.strip.split.map(&:capitalize).join(' ')
		# sym = name.downcase.to_sym
		
		puts "What is their salary?"
		salary = gets.strip
		#method found to add commas to large numbers. 
		salary = salary.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
		system("clear")
		
		puts "*"*90
		puts "You have successfully added #{name} with a salary of $#{salary} to the employee database"
		puts "*"*90
		#ERROR Fixed! Initially had @@name_and_salary = {} but fixed to <<
		@@name_and_salary << {:name => name, :salary => salary}
		@@employee_count += 1
		
		puts "Would you like to add another employee? Y/N"
		another = gets.strip.downcase
		system("clear")
		
		if another == "y"
			name_and_salary
		elsif another == "n"
			main
		else 
			puts "That is not a option, please enter Y/N"
			another = gets.strip.downcase
		end
		
	end
		
	#display employees
	#HAVING TROUBLES DISPLAYING EACH EMPLOYEE AND THEIR SALARY
	def display_employees
		@@name_and_salary.each do |x|
			puts "Name: #{x[:name]}, Salary: $#{x[:salary]}"
		end
	end
		
	#display all employees
	def employee_count()
		puts "Your total employee count is #{@@employee_count}"
		puts ""
	end
end