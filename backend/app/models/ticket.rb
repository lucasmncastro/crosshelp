class Ticket < ApplicationRecord
  extend Enumerize
  
  enumerize :status, in: %w(open closed), default: :open

  belongs_to :user
  has_many :comments, dependent: :delete_all

  validates :title, presence: true

  scope :with_status,  -> (status)  { where(status: status) }
  scope :with_user_id, -> (user_id) { where(user_id: user_id) }
  scope :with_month,   -> (month)   { where("month(closed_at) = ?", month) }
  scope :with_year,    -> (year)    { where("year(closed_at)  = ?", year) }


  def close!
    update!(status: 'closed', closed_at: Time.now)
  end

  def reopen!
    update!(status: 'open', closed_at: nil)
  end

  def as_json(options={})
    {
      id: id,
      title: title,
      message: message,
      status: status,
      user: user,
      customer: user.customer.try(:name),
      opened_at: created_at,
      closed_at: closed_at,
      author: user.name,
      comments: comments
    }
  end
end
