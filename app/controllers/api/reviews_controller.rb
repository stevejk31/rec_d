class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.order("rating DESC").first(3)
    render :show
  end
  def show
    @reviews = Review.where("store_id = ?", params[:id])
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.destroy
      @reviews = Review.where("store_id = ?", params[:id])
      render json: [params[:id]]
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :new
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(
      :user_id, :store_id, :rating, :review
    )
  end
end
