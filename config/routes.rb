TodoApp::Application.routes.draw do
  resources :lists do
    resources :notes, :only => [:index]
  end

  resources :notes, :except => [:index]

  root :to => "static_pages#index"
end
