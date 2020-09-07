def password_checker
	
    password = "Password1"
    num_attempts = 5
    result = false
        
        until num_attempts == 0 or result == true
            print "Please enter your password to continue: "
            attempt = gets.strip
            
            if attempt == password
                system("clear")
                result = true
            else 
                puts "That is incorrect, you have #{num_attempts-1} left"
                num_attempts -= 1
            end
        end
    end
    
    def banking_app
    
    result = true
    balance = 0
    new_balance = balance
        
    # Welcome messages
        puts "Welcome to the Bank of Australia"
        puts "You have $#{balance} (No surprises here)"
    
        answer = "y"
        while answer == "y"
            
    #Options
        puts "What would you like to do? (Options)"
        puts "-- Balance "
        puts "-- Deposit "
        puts "-- Withdraw "
        option = gets.strip.downcase
        system("clear")
            
        while option != "balance" and option != "deposit" and option != "withdraw"
            puts "Unfortunately I don't recognize that option."
            system("clear")
            puts "Please enter a valid option: "
            option = gets.strip.downcase
        end
        
        case option
            when "balance"
            puts "Your balance is $#{new_balance}"
            
            when "deposit"
            print "How much would you like to deposit? $"
            deposit = gets.strip.to_i
            new_balance += deposit
            puts "You have deposited $#{deposit} to your account."
            puts "Your updated balance is $#{new_balance}"
            
            when "withdraw"
            print "How much would you like to withdraw? $"
            withdraw = gets.strip.to_i
            new_balance -= withdraw
            if withdraw > new_balance
                puts "Sorry, you are unable to withdraw more than your balance."
            else
                puts "You have successfully withdrawn $#{withdraw}"
                puts "Your updated balance is: $#{new_balance}"
            end
            
    end
            print "Is there anything else we can help you with? Y/N "
            answer = gets.strip.downcase
            system("clear")
    end
    end
    password_checker
    banking_app