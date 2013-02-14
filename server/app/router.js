
var express = require('express');

var config = require('./config/config');

var allowCrossDomain = require('./plugins/allowCrossDomain');

// Controllers
var OfferCtrl = require('./controllers/OfferCtrl');
var OrderCtrl = require('./controllers/OrderCtrl');


exports.route = function (app) {
	
	app.configure(function () {
		app.use(allowCrossDomain);
		app.use(app.router);
		app.use(express.static(config.path.frontendBasePath));
	});

	app.all('/offers', OfferCtrl.offers);
	app.all('/orders', OrderCtrl.orders);
};