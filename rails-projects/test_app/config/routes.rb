Rails.application.routes.draw do

  # Home/landing page
  get "/", to: "home#index", as: "root"

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
