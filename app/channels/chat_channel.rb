class ChatChannel < ApplicationCable::Channel
  identified_by :current_user

  def subscribed
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
