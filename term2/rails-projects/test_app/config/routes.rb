Rails.application.routes.draw do

  get 'polaroids/create'
  get 'polaroids/edit'
  # Home/landing page
  root "home#index"

  # Movies
  get "/movies", to: "movies#index", as: "movies"
  post "/movies", to: "movies#create"
  get "/movies/new", to: "movies#new", as: "new_movie"
  get "/movies/:id", to: "movies#show", as: "movie"
  put "/movies/:id", to: "movies#update"
  patch "/movies/:id", to: "movies#update"
  get "/movies/:id/edit", to: "movies#edit", as: "edit_movie"
  delete "/movies/:id", to: "movies#delete" # NEED TO ADD THIS FEATURE

  # Celebrities
  get "/celebrities/index", to: "celebrities#index", as: "celebrities_index"
  get "/celebrities/show/:id", to: "celebrities#show", as: "show"
  put "/celebrities/create", to: "celebrities#create", as: "create" # NEED TO ADD THIS FEATURE
  patch "/celebrities/update", to: "celebrities#update", as: "update" # NEED TO ADD THIS FEATURE
  delete "/celebrities/:id", to: "celebrities#delete" # NEED TO ADD THIS FEATURE

  # Pokemon
  get "/pokemon", to: "pokemon#index", as: "pokemon_index"
  post "/pokemon(/:name(/:type(/:level)))", to: "pokemon#show", as: "pokemon_show"

  # 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
