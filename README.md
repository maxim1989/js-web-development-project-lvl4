### Hexlet tests and linter status:
[![Actions Status](https://github.com/maxim1989/js-web-development-project-lvl4/workflows/hexlet-check/badge.svg)](https://github.com/maxim1989/js-web-development-project-lvl4/actions)

Heroku: https://js-web-development-project-lvl.herokuapp.com/

-----------

Create docker container with postgres and adminer to manage postgres: ```docker-compose -f docker_compose.yml up -d```

-----------

Adminer url - - it helps manage local db: http://localhost:8888/

-----------
Migration on heroku with knex (npm package).

Make it from bash:
1) ```heroku run knex migrate:latest --app js-web-development-project-lvl```
2) If you have got an error - ```error: no pg_hba.conf entry for host```, then you shoud try to switch off ssl by command in terminal ```heroku config:set PGSSLMODE=no-verify --app js-web-development-project-lvl``` (use ```sslmode=require``` to get back) and repeat point 1.

------------
With ```sslmode=require``` it doesn't work.
Use permanently ```heroku config:set PGSSLMODE=no-verify --app js-web-development-project-lvl```
