# == Route Map
#
#   Prefix Verb   URI Pattern             Controller#Action
#     root GET    /                       static_pages#root
#     user POST   /user(.:format)         users#create
#          PATCH  /user(.:format)         users#update
#          PUT    /user(.:format)         users#update
#          DELETE /user(.:format)         users#destroy
#   signup GET    /signup(.:format)       users#new
#    login GET    /login(.:format)        sessions#new
# sessions POST   /sessions(.:format)     sessions#create
#  session DELETE /sessions/:id(.:format) sessions#destroy
#

Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :stores, only: [:index, :show]
    resources :reviews, only: [:index, :show, :create, :destroy]
    resource :current, only: [:show, :destroy]
  end
  resource :user, only: [:create, :update, :destroy]
  get 'signup', :to => 'users#new'
  get 'login', :to => 'sessions#new'
  resource :session, only: [:create, :destroy]
end
