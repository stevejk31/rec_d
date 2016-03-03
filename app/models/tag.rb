class Tag < ActiveRecord::Base
  belongs_to :store
  validate :no_same_tags
  validates(
   :store_id,
   presence: true
 )
  validates :tag, inclusion: {in: ["coffee", "burgers", "sandwiches", "bikes", "newamerican", "beer_and_wine", "french", "desserts", "bakeries", "donuts", "delis", "cafes", "bagels", "breakfast_brunch", "mideastern", "brazilian", "icecream", "wine_bars", "chocolate", "internetcafe", "tea", "bubbletea", "juicebars", "chinese", "foodstands", "convenience", "restaurants", "italian", "russian", "creperies", "japanese", "bike_repair_maintenance", "cantonese", "dimsum", "gourmet", "asianfusion", "shavedice", "drycleaninglaundry", "grocery", "tradamerican", "venues", "souvenirs", "belgian", "scandinavian", "vegan", "gelato", "candy", "gluten_free", "hotdogs", "mediterranean", "salad", "british", "galleries", "vegetarian", "florists", "giftshops", "flowers", "vietnamese", "mexican", "accessories", "bespoke", "ethnicmarkets", "hawaiian", "diners", "thai", "cakeshop", "catering", "organic_stores", "greek", "fondue", "korean", "tobaccoshops", "fooddeliveryservices", "hookah_bars"]}

  def no_same_tags
    if self.store.tags.any? {|tag| tag.tag == self.tag}
      errors.add(:no_same_tags, "")
    end
  end
end
