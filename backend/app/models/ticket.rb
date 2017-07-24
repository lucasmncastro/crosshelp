class Ticket < ApplicationRecord
  extend Enumerize
  
  enumerize :status, in: %w(open closed), default: :open

  belongs_to :user
  has_many :comments, dependent: :delete_all

  scope :with_status, -> (status) { where(status: status) }

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
end
