Rails.application.routes.draw do
  devise_for :user

  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create, :destroy]
      resources :tickets do
        resources :comments
      end
      resources :users
      resources :customers
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
