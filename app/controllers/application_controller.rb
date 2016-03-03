class ApplicationController < ActionController::Base
  helper_method :current_user
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login_in?
    if current_user != nil && current_user.session_token == session[:session_token]
      redirect_to root_url
    end
  end

end
