Rails.application.routes.draw do
  get 'home/index'
  get 'pokemon/index'
  get 'pokemon/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/", to: "home#index", as: "root"
  get "/celebrities/index", to: "celebrities#index", as: "celebrities_index"
  get "/celebrities/show/:id", to: "celebrities#show", as: "show"
  put "/celebrities/create", to: "celebrities#create", as: "create"
  patch "/celebrities/update", to: "celebrities#update", as: "update"
  get "/pokemon", to: "pokemon#index", as: "pokemon"
  post "/pokemon/:name", to: "pokemon#show"
end
