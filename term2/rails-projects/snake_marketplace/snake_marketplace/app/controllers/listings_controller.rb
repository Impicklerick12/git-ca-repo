class ListingsController < ApplicationController
    before_action :set_listing, only: [:show, :edit, :update, :destroy]
    def index
        # show all listings
        @listings = Listing.all
    end

    def new
    end

    def show
    end

    def create
    end

    def update
    end

    def edit
    end

    def destroy
    end

    private

    def set_listing
        id = params[:id]
        @listing = Listing.find(id)
    end
end