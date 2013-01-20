
var allowCrossDomain = require('./plugins/allowCrossDomain');

var OfferCtrl = require('./controllers/OfferCtrl');


exports.route = function (app) {
	
	app.configure(function () {
		app.use(allowCrossDomain);
		app.use(app.router);
	});

	app.all('/offers', OfferCtrl.offers);
};