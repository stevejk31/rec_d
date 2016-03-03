class SessionsController < ApplicationController
  before_filter :login_in?
  
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      session[:session_token] = @user.reset_session_token!
      redirect_to root_url
    else
      flash[:errors] = ["Invalid Credentials"]
      redirect_to login_url
    end
  end

end
