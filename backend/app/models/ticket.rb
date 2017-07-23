class Ticket < ApplicationRecord
  belongs_to :user

  scope :with_status, -> (status) { where(status: status) }

  def as_json(options={})
    {
      id: id,
      title: title,
      message: message,
      status: status,
      customer: user.customer.name,
      opened_at: created_at,
      author: user.name
    }
  end
end
