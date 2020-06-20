class PokemonController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :test_before
  after_action :test_after

  def index
    
  end

  def show
    p params
    # run the auto fill method to see if params are null or not
    auto_fill(params)
    # render the filled params
    render json: { "name": params[:name], "type": params[:type], "level": params[:level] } 
    @pokemon = params
  end

  private
  # method to generate an auto name
  def auto_name
    random_names = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"]
    random_names.sample
  end
  
  # method to generate an auto type
  def auto_type
    random_type = ["Fire", "Water", "Grass", "Rock"]
    random_type.sample
  end

  # method to generate an auto level
  def auto_level
    random_level = [20, 40, 60, 100]
    random_level.sample
  end

  # method to fill the params
  # provide an auto generate string to param key, if param key does not already exist (i.e param[:name] = null)
  def auto_fill(params)
    params[:name] = auto_name if !params.has_key?(:name)
    params[:type] = auto_type if !params.has_key?(:type)
    params[:level] = auto_level if !params.has_key?(:level)
  end

  def test_before
    puts "Before"
  end

  def test_after
    puts "After"
  end

end
