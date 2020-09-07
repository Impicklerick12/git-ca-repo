class PagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def home
    p "I am the home methods put statement"
    render html: "<h1>Honey I am home</h1>".html_safe
  end

  def data
    p params
    redirect_to root_path
  end

  def pages_params
    params.require(:user).permit(:status, :id)
  end
end
