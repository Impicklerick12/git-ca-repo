class ProductsController < ApplicationController
  def index
    @products = ["Toothbrush", "Sweater", "Waterbottle"]
    @user = "Tyler"
  end
end
