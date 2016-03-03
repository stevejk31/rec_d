class Api::CurrentsController < ApplicationController

  def show
    @current_user = current_user
    @current_user = {id: nil, username: nil} if @current_user == nil
  end

  def destroy
    current_user.reset_session_token! unless current_user.nil?
    session[:session_token] = nil
    @current_user = {id: nil, username: nil}
  end

end
