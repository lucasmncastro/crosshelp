class Api::V1::SessionsController < ApplicationController
  def create
    user = User.where("lower(trim(email)) = ?",  params[:email].downcase.strip).first

    if user and user.valid_password?(params[:password])
      hash = {
        token:  user.create_auth_token!,
        email:  user.email,
        name:   user.name
      }
      render json: hash, status: :ok
    else
      render json: {}, status: :unauthorized
    end
  end
end
