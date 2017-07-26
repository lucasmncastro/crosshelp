class User < ApplicationRecord
  extend Enumerize

  # Role represents the kind of users:
  #
  # - Admin: can manage all the resource
  # - Customer: can access only his/her tickets
  # - Agent: can answer all the tickets
  enumerize :role, in: %w(admin customer agent), default: :customer, scope: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Only used if the user is a customer user.
  belongs_to :customer, optional: true

  # The tickets that user opened.
  has_many :tickets


  # Generate a new auth_token and save it.
  # It is necessary on front-end authentications.
  def create_auth_token!
    self.auth_token = SecureRandom.base64(50)
    self.save!
    self.auth_token
  end

end
