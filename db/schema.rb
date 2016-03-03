# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160229225137) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "business_infos", force: :cascade do |t|
    t.integer  "store_id",                       null: false
    t.string   "accepts_credit",  default: "No", null: false
    t.string   "accepts_cash",    default: "No", null: false
    t.string   "accepts_android", default: "No", null: false
    t.string   "accepts_apple",   default: "No", null: false
    t.string   "parking",                        null: false
    t.string   "bike_parking",    default: "No", null: false
    t.string   "noise_level",                    null: false
    t.string   "outdoor_seating", default: "No", null: false
    t.string   "wifi",            default: "No", null: false
    t.string   "has_tv",          default: "No", null: false
    t.string   "waiter_service",  default: "No", null: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  add_index "business_infos", ["store_id"], name: "index_business_infos_on_store_id", unique: true, using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "store_id",   null: false
    t.integer  "rating",     null: false
    t.text     "review",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["store_id"], name: "index_reviews_on_store_id", using: :btree
  add_index "reviews", ["user_id", "store_id"], name: "index_reviews_on_user_id_and_store_id", unique: true, using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "store_hours", force: :cascade do |t|
    t.integer  "store_id",    null: false
    t.string   "day_of_week", null: false
    t.string   "time_open",   null: false
    t.string   "time_closed", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "store_hours", ["store_id"], name: "index_store_hours_on_store_id", using: :btree

  create_table "stores", force: :cascade do |t|
    t.string   "name",         null: false
    t.float    "lat",          null: false
    t.float    "lon",          null: false
    t.string   "street",       null: false
    t.string   "neighborhood", null: false
    t.string   "city",         null: false
    t.string   "phone",        null: false
    t.string   "image_url",    null: false
    t.float    "rating",       null: false
    t.integer  "review_count", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "tags", force: :cascade do |t|
    t.integer  "store_id",   null: false
    t.string   "tag",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["store_id"], name: "index_tags_on_store_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
