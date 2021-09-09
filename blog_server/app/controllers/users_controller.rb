class UsersController < ApplicationController
  before_action :find_user, only: [:edit, :update, :edit_password, :update_password, :destroy]
  before_action :find_posts

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: "Logged In!"
    else
      render :new
    end
  end

  def edit
    if @user.id != session[:user_id]
        redirect_to root_path, notice: "Not Aurthorized, Access Denied!"
    end
  end

  def update
    if params[:user][:current_password].blank?
      if @user.update params.require(:user).permit(:first_name, :last_name, :email)
          redirect_to posts_path, notice: 'Your Name and Email Updated!'
      else
          render :edit, alert: 'Please Try Again!'
      end
    else
      if @user&.authenticate params[:user][:current_password]
        @user.password = params[:user][:new_password]
        if @user.password == params[:user][:new_password_confirmation]
            if @user.update params.require(:user).permit(:password_digest)
              redirect_to root_path, notice: "Password Has Been Changed!"
            else
              flash[:alert] = "Please Try Again!"
              render :edit_password
            end
        else
            flash[:alert] = "Password Does Not Match!"
            render :edit_password
        end
      else
        flash[:alert] = "Current Password is Wrong!"
        render :edit_password
      end
    end
  end

  def edit_password
  end

  def destroy
    session[:user_id] = nil
    @user.destroy
    redirect_to root_path
  end

  private
  def find_posts
      @posts = Post.all
  end

  def find_user
    @user = User.find_by(id: current_user.id)
  end

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation
    )
  end
end