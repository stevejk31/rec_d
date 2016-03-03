class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.string :name, null:false
      t.float :lat, null: false
      t.float :lon, null: false
      t.string :street, null: false
      t.string :neighborhood, null: false
      t.string :city, null: false
      t.string :phone, null: false
      t.string :image_url, null: false
      t.float :rating, null: false
      t.integer :review_count, null: false
      t.timestamps null: false
      t.timestamps null: false
    end
  end
end
