class CreateBusinessInfos < ActiveRecord::Migration
  def change
    create_table :business_infos do |t|
      t.integer :store_id, null: false
      t.string :accepts_credit, null: false, default: "No"
      t.string :accepts_cash, null: false, default: "No"
      t.string :accepts_android, null: false, default: "No"
      t.string :accepts_apple, null: false, default: "No"
      t.string :parking, null: false
      t.string :bike_parking, null: false, default: "No"
      t.string :noise_level, null: false
      t.string :outdoor_seating, null: false, default: "No"
      t.string :wifi, null: false, default: "No"
      t.string :has_tv, null: false, default: "No"
      t.string :waiter_service, null: false, default: "No"
      t.timestamps null: false
    end

    add_index :business_infos, :store_id, unique: true
  end
end
