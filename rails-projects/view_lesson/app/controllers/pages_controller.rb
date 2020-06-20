class PagesController < ApplicationController
    def home
        # render returns data back to the browser
        # render plain: "working"
        # html code should always be in a view folder
        # render html: "<h1>Hello World!</h1>".html_safe
        # render "home"
        # will render the view which matches the controller name and method file by default
        
        # always use instance variables
        # the value for this variable should ideally be returned from the model
        @names = params[:names]
        # render "home"
        @user = "Tyler"
    end

    def contact
        @user = "Tyler"
    end
end