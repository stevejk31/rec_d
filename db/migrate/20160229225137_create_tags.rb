class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :store_id, null: false
      t.string :tag, null: false
      t.timestamps null: false
    end
    add_index :tags, :store_id
  end
end
