Rails.application.routes.draw do
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get "/posts", to: "posts#index", as: "posts"
  get "/elephant", to: "posts#index"
  get "/thomas", to: "posts#new"
end
