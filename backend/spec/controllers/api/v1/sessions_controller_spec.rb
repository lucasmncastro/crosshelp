require 'rails_helper'

RSpec.describe Api::V1::SessionsController, type: :controller do
  fixtures :all

  describe "POST /" do
    describe "when invalid credentials" do
      it "should answer status :unauthorized" do
        post :create, params: { email: 'invalid@email', password: '123' }
        expect(response).to have_http_status(:unauthorized)
      end
    end

    describe "when valid credentials" do
      it "answers status :ok" do
        alex = users(:alex)
        old_token = alex.auth_token

        post :create, params: { email: alex.email, password: 'password' }
        expect(response).to have_http_status(:ok)
      end

      it "should generate a new auth token" do
        alex = users(:alex)
        old_token = alex.auth_token

        post :create, params: { email: alex.email, password: 'password' }
        alex.reload

        expect(alex.auth_token).not_to equal old_token
      end

      it "should get a json with user attributes" do
        alex = users(:alex)
        old_token = alex.auth_token

        post :create, params: { email: alex.email, password: 'password' }
        alex.reload

        expected_hash = {
          token: alex.auth_token,
          email: alex.email,
          name: alex.name,
          role: alex.role,
          customerName: alex.customer.try(:name)
        }.to_json

        expect(response.body).to eq expected_hash
      end
    end

  end

end
