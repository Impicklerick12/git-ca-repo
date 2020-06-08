# VIEW
# Display user options ( options for the user to choose from)
# Let user know that there are no more gumballs left
# Let the user know that a gumball has been dispensed
# Let the user know the current count of gumballs
# Ask user for a refill

class GumballView

    def welcome_message
        clear
        puts "| Welcome to your own Gumball Machine! |"
        puts
    end

    #order process and validation
    def make_selection
        menu_options
        action = gets.strip.to_i
        validate_selection(action)
    end

    #display menu options
    def menu_options
        puts "What would you like to do today? \n"
        puts "[1] Retrieve a Gumball \n"
        puts "[2] View total Gumball amount \n"
        puts "[3] Refil the Gumballs \n"
        puts "[4] Quit"
    end

    #order validation
    def validate_selection(action)
        until [1,2,3,4].include?(action)
            puts "That doesn't seem to be an option"
            puts "Please select another option"
            menu_options
            action = gets.chomp.to_i
        end
        return action
    end

    #check available gumball stock
    def check_stock(gumballs)
        puts "You currently have #{gumballs} Gumballs available"
        puts
    end

    #display error message when 0 gumballs
    def no_gumballs
        puts "Sorry, there are no Gumballs to dispense right now. Please refill"
        puts
    end

    #confirmation message after gumball is dispensed, as well as the total remaining gumballs
    def gumball_taken
        puts "Your Gumball has been dispensed."
        puts
    end

    def refill
        clear
        puts "How many Gumballs would you like to refill?"
        gets.strip.to_i
    end

    def refill_confirmation
        puts "You have successfully refilled your Gumball machine!"
        puts
    end

    def goodbye_message
        puts "Hope you enjoyed your Gumballs. See you soon!"
        puts
    end

    def clear
        system("clear")
    end
end