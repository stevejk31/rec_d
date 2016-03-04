class StoreHour < ActiveRecord::Base
  belongs_to :store
  validates :store, presence: true
  validates(
    :day_of_week,
    presence: true,
    inclusion: { in: %w(Mon Tues Wed Thurs Fri Sat Sun)}
    )

  validates(
    :time_open,
    :time_closed,
    length: { is: 4 }
  )
  validate :correct_time


  private
  def correct_time
    num_time_open = self.time_open.to_i
    num_time_closed = self.time_closed.to_i
    num_time_open >= 0000 && num_time_open <= 2400 && num_time_closed >= 0000 && num_time_closed <= 2400
  end

end
