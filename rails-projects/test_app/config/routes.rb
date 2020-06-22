Rails.application.routes.draw do

  get "/movies", to: "movies#index", as: "movies"
  post "/movies", to: "movies#create"
  get "/movies/new", to: "movies#new", as: "new_movie"
  get "/movies/:id", to: "movies#show", as:"movie"
  put "/movies/:id", to: "movies#update"
  patch "/movies/:id", to: "movies#update"
  get "/movies/:id/edit", to: "movies#edit", as:"edit_movie"
  
  # Home/landing page
  root "home#index"

  # Celebrities
  get "/celebrities/index", to: "celebrities#index", as: "celebrities_index"
  get "/celebrities/show/:id", to: "celebrities#show", as: "show"
  put "/celebrities/create", to: "celebrities#create", as: "create"
  patch "/celebrities/update", to: "celebrities#update", as: "update"

  # Pokemon
  get "/pokemon", to: "pokemon#index", as: "pokemon_index"
  post "/pokemon(/:name(/:type(/:level)))", to: "pokemon#show", as: "pokemon_show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
