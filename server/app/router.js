

var OfferCtrl = require('./controllers/OfferCtrl');


exports.route = function (app) {
	
	app.configure(function () {
		app.use(app.router);
	});

	app.get('/', OfferCtrl.render);
};