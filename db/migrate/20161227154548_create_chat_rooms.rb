class CreateChatRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :chat_rooms do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
