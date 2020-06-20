# The user input from view is sent to the controller and the data from the model is sent back to view
require_relative "model.rb"
require_relative "view.rb"

class AtmController

    def initialize
        @model = AtmModel.new(0)
        @view = AtmView.new
    end

    def password_checker

        @view.welcome_message
        password = "Password1"
        num_attempts = 3
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

    def run
        @view.welcome_message

        while true

            action = @view.make_selection

            case action

            when 1
                @view.clear
                @view.display_balance(@model.balance)

            when 2
                @view.clear
                deposit_amount = @view.deposit
                @model.deposit(deposit_amount)
                @view.deposit_confirmation(deposit_amount)
                @view.display_balance(@model.balance)

            when 3
                @view.clear
                withdraw_amount = @view.withdraw
                @model.withdraw(withdraw_amount) ? @view.withdraw_confirmation(withdraw_amount) : @view.insufficient_balance
                @view.display_balance(@model.balance)

            when 4
                @view.clear
                @view.goodbye_message
                return false

            end
        end
    end
end