class Ticket < ApplicationRecord
  extend Enumerize
  
  enumerize :status, in: %w(open closed), default: :open

  belongs_to :user
  has_many :comments, dependent: :delete_all

  validates :title, presence: true

  scope :with_status, -> (status) { where(status: status) }

  def as_json(options={})
    {
      id: id,
      title: title,
      message: message,
      status: status,
      user: user,
      customer: user.customer.try(:name),
      opened_at: created_at,
      author: user.name,
      comments: comments
    }
  end
end
