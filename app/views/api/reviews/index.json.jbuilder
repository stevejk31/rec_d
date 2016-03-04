json.key_format! camelize: :lower
json.array! @reviews, :id, :store, :user, :rating, :review
