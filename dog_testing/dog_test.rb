require "test/unit"
require_relative "dog_class.rb"


class DogTest < Test::Unit::TestCase

    def test_dog_name
        doggo = Dog.new('Rover', 2, "America")
        assert_equal("Rover", doggo.dog_name)

        # doggo1 = Dog.new("  ", 2, "America")
        # assert_equal("  ", doggo1.dog_name)
    end
end