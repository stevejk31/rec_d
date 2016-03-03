json.key_format! camelize: :lower
json.array! @reviews, :id, :store_id, :user, :rating, :review
