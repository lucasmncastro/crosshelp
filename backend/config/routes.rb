Rails.application.routes.draw do
  devise_for :users
  resources :comments
  resources :tickets
  resources :users
  resources :customers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
