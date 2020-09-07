class PagesController < ApplicationController
    def home
        render plain: "home page"
    end

    def not_found
        #doesn't work?!
        render "pages/error_template"
    end
end