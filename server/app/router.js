
var express = require('express');
var socketio = require('socket.io');
var http = require('http');
var path = require('path');
var l = require('log-dispatch');

var config = require('./config/config');

var allowCrossDomain = require('./plugins/allowCrossDomain');

// Controllers
var OfferCtrl = require('./controllers/OfferCtrl');
var PurchaseCtrl = require('./controllers/PurchaseCtrl');
var ShoppingCartCtrl = require('./controllers/ShoppingCartCtrl');


exports.route = function (app) {

	var staticPath = path.normalize(config.path.frontendBasePath);
	
	app.configure(function () {
		// Allow cross domain requests by AJAX (server is on other domain)
		app.use(allowCrossDomain);
		// set simple routing from express
		app.use(app.router);
		// set static routing on mobile application frontend
		app.use(express.static(staticPath));
		// for mockups of mobile app @todo @debug 
		app.use(express.static(path.normalize(staticPath+'/../../../diagrams/mockups')));
	});

	// redirect index.html to myRetail.html
	app.get('/', function (req, res) {
	  res.sendfile(staticPath + 'myRetail.html');
	});

	// simple routing on controller and action (like MVC)
	app.all('/offers', OfferCtrl.offersAction);
	app.all('/purchases', PurchaseCtrl.purchasesAction);


	// Websocket support
	var server = http.createServer(app);
	var io = socketio.listen(server);
	io.sockets.on('connection', function (socket) {
		// vytvoří socket pro každého uživatele a naslouchá
		socket.emit('connection', { status: 'connected' });
		socket.on('/offers', OfferCtrl.offers);
		socket.on('/purchases', PurchaseCtrl.purchases);
		socket.on('/shopping-carts', ShoppingCartCtrl.shoppingCarts);
	});

	// nastaví server a socket.io do globálníh kontextu app
	app.server = server;
	app.io = io;
	// nahrazení původního listen za nový, který se má volat pro socket.io
	app.listen = function (port) {
		return app.server.listen.apply(app.server, arguments);
	};

	// options socket.io
	io.set('log level', config.debug.logLevel);
	//io.set("origins", [config.server.host+':'+config.server.port]);
	io.set('transports', [
		'websocket'
		, 'flashsocket'
		, 'htmlfile'
		, 'xhr-polling'
		, 'jsonp-polling'
	]);
};