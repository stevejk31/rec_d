class CreateStoreHours < ActiveRecord::Migration
  def change
    create_table :store_hours do |t|
      t.integer :store_id, null: false
      t.string :day_of_week, null: false
      t.string :time_open, null: false
      t.string :time_closed, null: false
      t.timestamps null: false
    end
    add_index :store_hours, :store_id
  end
end
