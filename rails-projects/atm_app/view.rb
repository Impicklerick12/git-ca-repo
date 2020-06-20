# VIEW
# display atm options to user
# display balance
# deposit amount?
# withdrawal amount?
# message when balance is insufficient
# confirmation message when withdraw
# confirmation message when deposit
# welcome and goodbye message

class AtmView

    def welcome_message
        clear
        puts "|----- Welcome to the Iron Bank of Bravos -----|"
        puts
    end

    def input_password
        puts "Please enter your password to access your gold"
    end

    def make_selection
        menu_options
        action = gets.strip.to_i
        validate_selection(action)
    end

    def menu_options
        puts "What would you like to do today? \n"
        puts
        puts "[1] Check Balance \n"
        puts "[2] Deposit Gold \n"
        puts "[3] Withdraw Gold \n"
        puts "[4] Quit"
    end

    def validate_selection(action)
        until [1,2,3,4].include?(action)
            clear
            puts "That doesn't seem to be an option"
            puts
            menu_options
            action = gets.chomp.to_i
        end
        return action
    end

    def display_balance(gold)
        puts "You currently have #{gold} bars of gold in your account"
        puts
    end

    def deposit
        puts "How many bars of gold would you like to deposit today?"
        return gets.strip.to_i
    end

    def deposit_confirmation(deposit_amount)
        clear
        puts "You have successfully deposited #{deposit_amount} bars of gold."
        puts
    end

    def withdraw
        puts "How many bars of gold would you like to withdraw today?"
        gets.strip.to_i
    end

    def insufficient_balance
        clear
        puts "Sorry, the amount you are trying to withdraw exceeds your balance"
        puts
    end

    def withdraw_confirmation(withdraw_amount)
        clear
        puts "You have successfully withdrawn #{withdraw_amount} bars of gold"
        puts
    end

    def goodbye_message
        puts "Thank you for visiting the Iron Bank of Bravos. We hope you find safe passage back to Westeros."
        puts "Valar Morgulis"
        puts
    end

    def clear
        system("clear")
    end
end