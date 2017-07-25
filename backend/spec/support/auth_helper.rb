module AuthHelper
  def login(user)
    token = user.create_auth_token!
    request.headers['authorization'] = 'Token token=' + token
  end  
end
