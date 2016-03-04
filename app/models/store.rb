# == Schema Information
#
# Table name: stores
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  lat          :float            not null
#  lon          :float            not null
#  street       :string           not null
#  city         :string           not null
#  phone        :integer          not null
#  rating       :float            not null
#  review_count :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Store < ActiveRecord::Base
  has_many :reviews
  has_many :tags

  validates(
    :name,
    :lat,
    :lon,
    :neighborhood,
    :city,
    :phone,
    :rating,
    :review_count,
    :image_url,
    presence: true
  )

  validates :street, presence:true, uniqueness: true

  has_one :business_info

  has_many :hours,
    foreign_key: :store_id,
    primary_key: :id,
    class_name: "StoreHour"

  before_save :fix_rating


  def self.in_bounds(bounds)
    self.where("lat BETWEEN ? AND ?", (bounds[:southWest][:lat].to_f + (0.002 * 0.0000000014/(bounds[:zoom].to_f * 0.000000001))),
                                      (bounds[:northEast][:lat].to_f - (0.002 * 0.0000000014/(bounds[:zoom].to_f * 0.000000001))))
        .where("lon BETWEEN ? AND ?", (bounds[:southWest][:lng].to_f + (0.002 * 0.0000000014/(bounds[:zoom].to_f * 0.000000001))),
                                      (bounds[:northEast][:lng].to_f - (0.002 * 0.0000000014/(bounds[:zoom].to_f * 0.000000001))))
  end

  def self.current_time
    current_time = "#{ Time.new.hour}#{Time.new.min}".to_i
    day_of_week = Time.new.day
    day_of_week = "Sun" if day_of_week == 0
    day_of_week = "Mon" if day_of_week == 1
    day_of_week = "Tues" if day_of_week == 2
    day_of_week = "Wed" if day_of_week == 3
    day_of_week = "Thurs" if day_of_week == 4
    day_of_week = "Fri" if day_of_week == 5
    day_of_week = "Sat" if day_of_week == 6
    [day_of_week, current_time]
    day_of_week, current_time = Store.current_time
    # Store.joins(:hours)
    #  .joins(:tags)
    #  .where("day_of_week = ?", day_of_week)
    #  .where("CAST(time_open AS INT) < ?", current_time)
    #  .where("CAST(time_closed AS INT) > ?", current_time)
    #  .where("tag = ?", params[:params][:tag])

  end

  def update_ratings(new_review)
    self.review_count += 1
    num_reviews = self.review_count
    temp_rating = (self.rating * num_reviews) + new_review[:rating]
    self.rating = (temp_rating/num_reviews)
    self.save!
  end

  def fix_rating
    self.rating = self.rating.round(1)
  end

end
