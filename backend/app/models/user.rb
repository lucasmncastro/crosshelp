class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Only used if the user is a customer user.
  belongs_to :customer, optional: true

  # The tickets that user opened.
  has_many :tickets
end
