json.key_format! camelize: :lower
json.extract! @current_user, :id, :username
