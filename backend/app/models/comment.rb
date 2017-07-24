class Comment < ApplicationRecord
  belongs_to :ticket
  belongs_to :user

  def as_json(options={})
    {
      id: id,
      message: message,
      action: action,
      author: user.name,
      created_at: created_at
    }
  end
end
