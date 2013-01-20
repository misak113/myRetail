
var express = require('express');
var mongoose = require('mongoose');
var l = console;

var config = require('./config/config');
var router = require('./router');

var app = express();

mongoose.connect(config.db.url);
var db = mongoose.connection;

router.route(app);

db.on('open', function () {

	app.listen(config.server.port);
	l.log('Server is running on port '+config.server.port);
});

