json.key_format! camelize: :lower
json.array! @stores do |store|
  json.id store.id
  json.basic_info do
    @store = store
    json.partial! 'api/stores/store', locals: {store: @store}
  end
end
