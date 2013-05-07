

# TODO port of database from config.local.js
mkdir "./temp/mongodb/"
start mongod --dbpath "./temp/mongodb/" --port 27017

# start nodejs app server
start node ./app.js