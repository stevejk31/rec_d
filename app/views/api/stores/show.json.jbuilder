json.key_format! camelize: :lower
json.id @store.id
json.basic_info do
  json.partial! 'api/stores/store', locals: {store: @store}
end
# add join information like hours and businessInfo
# json.hours do
#   json.array! @store.hours
# end
json.business_info do
  json.extract!(
    @store.business_info,
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
    :noise_level
  )
end

json.hours do
  @store.hours.each do |hour|
    json.set! hour.day_of_week, [hour.time_open, hour.time_closed]
  end
end
