#! /bin/bash
yarn build:server
heroku container:push --app=gps-usagers web
heroku container:release --app=gps-usagers web