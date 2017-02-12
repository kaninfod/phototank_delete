api: cd ../photoserve/ && RAILS_ENV=development PORT=5001 bundle exec puma -C config/puma.rb #rails server -p 5000
web: RAILS_ENV=development PORT=5000 bundle exec rails server -p 5000
#Resque_worker_utility:   bundle exec rake environment resque:work QUEUE=utility TERM_CHILD=1
#Resque_worker_import:    bundle exec rake environment resque:work QUEUE=import TERM_CHILD=1
#Resque_Scheduler:        rake resque:scheduler
