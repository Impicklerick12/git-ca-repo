class BooksController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :setup_data
    before_action :test_before
    after_action :test_after

    def index
        render json: @data
        # render html: "<h1>Honey I am home</h1>".html_safe
    end

    #Show a single book
    def show
        # render json: @data
        render plain: "working"
    end

    #Create a new book
    def create
        p "here"
        puts params
        render plain: "working"
    end

    #Update a book
    def update
    end

    #Remove a book
    def destroy
    end

    def test_before
        puts "Before"
    end

    def test_after
        puts "After"
    end

    private
    def setup_data
        @data = [
            { title: "Harry Potter", author: "J.K Rowling" },
            { title: "Name of the wind", author: "Patrick Rothfuss" }
        ]
    end
end
