
var express = require('express');

var router = require('./router');
var server = require('./server');

var l = require('./services/logDispatcher');

var app = express();

router.route(app);

var db = server.dbConnect();

db.on('open', function () {
	l.info('Database connection opened');
	server.start(app);
});

db.on('close', function () {
	l.error('Database connection closed');
	server.stop(app);
	server.dbReconnect();
});
