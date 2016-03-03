class BusinessInfo < ActiveRecord::Base
  belongs_to :store
  validates :store, presence: true
  validates(
    :accepts_credit,
    :accepts_cash,
    :accepts_android,
    :accepts_apple,
    :parking,
    :bike_parking,
    :outdoor_seating,
    :wifi,
    :has_tv,
    :waiter_service,
    inclusion: {in: ["Yes", "No"]}
  )

  validates :noise_level, inclusion: { in: %w(Quiet Medium Loud),
    message: "%{value} is not a valid noise level" }



end
