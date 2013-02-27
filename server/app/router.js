
var express = require('express');

var config = require('./config/config');

var allowCrossDomain = require('./plugins/allowCrossDomain');

// Controllers
var OfferCtrl = require('./controllers/OfferCtrl');
var PurchaseCtrl = require('./controllers/PurchaseCtrl');


exports.route = function (app) {
	
	app.configure(function () {
		// Allow cross domain requests by AJAX (server is on other domain)
		app.use(allowCrossDomain);
		// set simple routing from express
		app.use(app.router);
		// set static routing on mobile application frontend
		app.use(express.static(config.path.frontendBasePath));
	});

	// simple routing on controller and action (like MVC)
	app.all('/offers', OfferCtrl.offers);
	app.all('/purchases', PurchaseCtrl.purchases);
};