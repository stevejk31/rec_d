class Review < ActiveRecord::Base
  belongs_to :user

  belongs_to :store
  
  validates(
    :user,
    :store,
    :review,
    presence: true
  )
  validates :rating, inclusion: {in: [0, 1, 2, 3, 4, 5]}

  validate :user_may_only_have_one_review_per_store

  after_save :update_store


  def user_may_only_have_one_review_per_store
    reviews = Review.where("store_id = ? AND user_id = ?", self.store_id, self.user_id)

    unless reviews.empty?
      errors.add(:user_may_only_have_one_review_per_store, "!")
    end
  end

  def update_store
    temp_review = Review.last
    temp_review.store.update_ratings(temp_review)
  end

end
