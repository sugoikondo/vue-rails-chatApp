class ChatChannel < ApplicationCable::Channel
  # identified_by :current_user

  def subscribed
    stream_from 'chat_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def chat(data)

  end
end
