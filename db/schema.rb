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

ActiveRecord::Schema.define(version: 20160819171042) do

  create_table "albums", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.date     "start"
    t.date     "end"
    t.string   "make"
    t.string   "model"
    t.datetime "created_at",                                   null: false
    t.datetime "updated_at",                                   null: false
    t.string   "country"
    t.string   "city"
    t.string   "photo_ids",  limit: 1024, default: "--- []\n"
    t.string   "album_type"
    t.string   "tags",                    default: "--- []\n"
    t.boolean  "like"
  end

  create_table "catalogs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "path"
    t.boolean  "default"
    t.text     "watch_path",        limit: 65535
    t.string   "type"
    t.string   "sync_from_albums"
    t.integer  "sync_from_catalog"
    t.string   "ext_store_data",    limit: 1024
    t.boolean  "import_mode"
  end

  create_table "comments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "title",            limit: 50,    default: ""
    t.text     "comment",          limit: 65535
    t.integer  "commentable_id"
    t.string   "commentable_type"
    t.integer  "user_id"
    t.string   "role",                           default: "comments"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["commentable_id"], name: "index_comments_on_commentable_id", using: :btree
    t.index ["commentable_type"], name: "index_comments_on_commentable_type", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "instances", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "photo_id"
    t.integer  "catalog_id"
    t.string   "path"
    t.integer  "size"
    t.datetime "modified"
    t.integer  "status"
    t.string   "rev"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["photo_id", "catalog_id"], name: "index_instances_on_photo_id_and_catalog_id", unique: true, using: :btree
  end

  create_table "jobs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "job_type"
    t.string   "job_error"
    t.string   "arguments"
    t.datetime "completed_at"
    t.string   "queue"
    t.integer  "status"
  end

  create_table "locations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "status"
    t.decimal  "latitude",     precision: 16, scale: 10
    t.decimal  "longitude",    precision: 16, scale: 10
    t.string   "location"
    t.string   "country"
    t.string   "state"
    t.string   "address"
    t.string   "road"
    t.string   "city"
    t.string   "suburb"
    t.string   "postcode"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.integer  "map_image_id"
  end

  create_table "photofiles", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "path",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "status"
    t.string   "size"
    t.string   "filetype"
  end

  create_table "photos", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "filename"
    t.datetime "date_taken"
    t.string   "path"
    t.datetime "created_at",                                            null: false
    t.datetime "updated_at",                                            null: false
    t.string   "file_thumb_path"
    t.string   "file_extension"
    t.integer  "file_size"
    t.integer  "location_id"
    t.string   "make"
    t.string   "model"
    t.integer  "original_height"
    t.integer  "original_width"
    t.decimal  "longitude",       precision: 16, scale: 10
    t.decimal  "latitude",        precision: 16, scale: 10
    t.integer  "status",                                    default: 0
    t.string   "phash"
    t.integer  "org_id"
    t.integer  "lg_id"
    t.integer  "md_id"
    t.integer  "tm_id"
    t.index ["location_id"], name: "index_photos_on_location_id", using: :btree
  end

  create_table "settings", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "var",                      null: false
    t.text     "value",      limit: 65535
    t.integer  "thing_id"
    t.string   "thing_type", limit: 30
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["thing_type", "thing_id", "var"], name: "index_settings_on_thing_type_and_thing_id_and_var", unique: true, using: :btree
  end

  create_table "taggings", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "tag_id"
    t.integer  "taggable_id"
    t.string   "taggable_type"
    t.integer  "tagger_id"
    t.string   "tagger_type"
    t.string   "context",       limit: 128
    t.datetime "created_at"
    t.index ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree
    t.index ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context", using: :btree
  end

  create_table "tags", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string  "name",                       collation: "utf8_bin"
    t.integer "taggings_count", default: 0
    t.index ["name"], name: "index_tags_on_name", unique: true, using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.string   "provider"
    t.string   "uid"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar"
    t.string   "email"
    t.string   "encrypted_password", limit: 128
    t.string   "confirmation_token", limit: 128
    t.string   "remember_token",     limit: 128
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["remember_token"], name: "index_users_on_remember_token", using: :btree
  end

  create_table "votes", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "votable_id"
    t.string   "votable_type"
    t.integer  "voter_id"
    t.string   "voter_type"
    t.boolean  "vote_flag"
    t.string   "vote_scope"
    t.integer  "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope", using: :btree
    t.index ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope", using: :btree
  end

end
