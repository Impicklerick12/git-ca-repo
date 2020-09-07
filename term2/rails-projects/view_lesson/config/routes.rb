Rails.application.routes.draw do
  get 'products/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get "/", to: "pages#home", as: "root"
  # alternate syntax
  root to: "pages#home"
  get "pages/:names", to: "pages#home", as: "data"
  get "/contact", to: "pages#contact", as: "contact"
  get "/products", to: "products#index", as: "products"
end
