json.key_format! camelize: :lower
json.extract! @review, :id, :store_id, :user, :rating, :review
