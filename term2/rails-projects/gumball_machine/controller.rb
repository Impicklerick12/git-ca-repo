# The user input from view is sent to the controller and the data from the model is sent back to view

require_relative "model.rb"
require_relative "view.rb"

class GumballController

    def initialize()
        @model = GumballModel.new(0)
        @view = GumballView.new
    end

    def run

        @view.welcome_message

        while true

            action = @view.make_selection

            case action
            when 1
                clear
                @model.dispense_gumball ? @view.gumball_taken : @view.no_gumballs

            when 2
                clear
                @view.check_stock(@model.check_stock)

            when 3
                refill = @view.refill
                @model.refill_gumballs(refill)
                @view.refill_confirmation

            when 4
            clear
            @view.goodbye_message
            return false

            end
        end
    end

    def clear
        system("clear")
    end
end