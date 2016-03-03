class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :store_id, null: false
      t.integer :rating, null: false
      t.text :review, null: false
      t.timestamps null: false
    end
    add_index :reviews, :user_id
    add_index :reviews, :store_id
    add_index :reviews,  [:user_id, :store_id], unique: true
  end
end
