class CreateChats < ActiveRecord::Migration[5.0]
  def change
    create_table :chats do |t|
      t.string :body, null: false
      t.references :chat_room, index: true, foreign_key: true, null: false

      t.timestamps null: false
    end
  end
end
