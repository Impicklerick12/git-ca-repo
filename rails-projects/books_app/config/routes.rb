Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "books#index", as: "root"
  get "/books/:id", to: "books#show"
  post "/create", to: "books#create"
  put "/update", to: "books#update"
  delete "/destroy", to: "books#destroy"
end
