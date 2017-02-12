json.photos @photos do |photo|
  json.id           photo.id
  json.date_taken   photo.date_taken_formatted
  json.url          photo.url('tm')
  json.url_org      photo.url('org')
  json.bucket       @bucket.include?photo.id
  # json.count      photo.photos.count
  # json.address    photo.address
end

json.pagi will_paginate

json.bucket @bucket
