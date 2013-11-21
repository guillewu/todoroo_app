TodoApp::Application.routes.draw do
  resources :lists do
    resources :notes, :only => [:index]
  end

  resources :notes, :except => [:index]

  root :to => "static_pages#index"

  get "/guest", :to => "sessions#guest"
  match "/auth/:provider/callback", :to => "sessions#create"
  match "/signout", :to => "sessions#destroy", :as => :signout
end
