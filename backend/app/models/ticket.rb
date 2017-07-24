class Ticket < ApplicationRecord
  belongs_to :user

  scope :with_status, -> (status) { where(status: status) }

  before_create :set_status_open

  has_many :comments, dependent: :delete_all

  def as_json(options={})
    {
      id: id,
      title: title,
      message: message,
      status: status,
      customer: user.customer.try(:name),
      opened_at: created_at,
      author: user.name,
      comments: comments
    }
  end

  def set_status_open
    self.status = "open"
  end
end
