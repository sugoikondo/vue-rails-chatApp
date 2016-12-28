Rails.application.routes.draw do
  resources :chat_rooms do
    resources :chats
  end
end
