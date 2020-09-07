class MoviesController < ApplicationController
  # only for testing purposes
  # never have this code in production
  # skip_before_action: verify_authenticity_token


  def index
    @movies = session[:movies]
  end

  def create
    puts "-------------"
    puts params

    # store the data coming from the form into rails session named movies
    if session[:movies] == nil
      session[:movies] = []
    end
    session[:movies].push(params[:movie])

    # redirect to show html page
    redirect_to movie_path(session[:movies].length)
  end

  def new
  end

  def show
    @movie = session[:movies][params[:id].to_i - 1]
    puts "--- show method"
    puts @movie
  end

  def edit
    # prepopulate the movie variable that needs to be edited
    @movie = session[:movies][params[:id].to_i - 1]
  end

  def update
    # find the movie item in the array that requires an update with the incoming data
    session[:movies][params[:id].to_i - 1] = params[:movie]
    redirect_to movie_path(params[:id].to_i)
  end
  
  def delete
    
  end
end
