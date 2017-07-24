class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  before_action :authenticate!

  def authenticate!
    authenticate_with_http_token do |token, options|
      @user = User.where(auth_token: token).first
    end
  end

end
