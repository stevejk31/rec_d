# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class UsersController < ApplicationController
  before_filter :login_in?
  def update
  end

  def destroy
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:session_token] = @user.session_token
      redirect_to root_url
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to signup_url
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end

end
