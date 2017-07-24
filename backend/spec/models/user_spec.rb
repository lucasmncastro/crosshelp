require 'rails_helper'

RSpec.describe User, type: :model do
  it "#create_auth_token! should generate a auth token" do
    user = User.new(
      email: "example@email.com", 
      password: "12345678",
      password_confirmation: "12345678"
    )
    expect(user.auth_token).to equal nil
    user.save!
    user.create_auth_token!
    expect(user.auth_token).not_to equal nil
  end
end
