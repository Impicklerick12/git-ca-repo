# MODEL
# check balance
# deposit money
# witdraw money
# pin?

class AtmModel

    attr_accessor :gold

    def initialize(gold)
        @gold = gold
    end

    def balance
        return @gold
    end

    def deposit(deposit_amount)
        @gold += deposit_amount    
    end

    def withdraw(withdraw_amount)
        if balance >= withdraw_amount
            @gold -= withdraw_amount
            return true
        else
            return false
        end
    end
    
end