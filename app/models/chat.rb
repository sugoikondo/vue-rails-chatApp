class Chat < ApplicationRecord
  belongs_to :chat_room

  validates :body, presence: true
end
