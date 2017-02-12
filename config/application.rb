require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Photothong
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    # TODO: this should be put into an initializer
    config.active_job.queue_adapter = :resque
    config.x.flickr = config_for(:app_flickr)
    config.x.dropbox = config_for(:app_dropbox)
    config.x.phototank = config_for(:app_phototank)
    
  end
end
