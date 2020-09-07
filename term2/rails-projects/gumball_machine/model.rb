# MODEL
# Check the stock
# Dispense a gumball
# refill of the gumball machine

class GumballModel

    attr_accessor :gumballs

    def initialize(gumballs)
        @gumballs = gumballs
    end

    #check the stock
    def check_stock
        return @gumballs
    end

    #dispense a gumball
    def dispense_gumball
        if check_stock > 0
            @gumballs -= 1
            return true
        else
            return false
        end
    end

    #refill the gumballs
    def refill_gumballs(refill)
        @gumballs += refill
        return @gumballs
    end

end