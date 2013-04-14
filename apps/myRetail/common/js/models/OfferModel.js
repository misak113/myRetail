/**
 * 
 */

var OfferModel = function ($http, socket) {
	
	this.markAsUnwanted = function (offer, config) {
		$http.get('/todo').success(function() {alert('Unwanted');}); // @todo
	};
	
	this.getOffers = function (cb) {
		socket.emit('/offers', {}, function (data) {
			cb(data);
		});
	};
	
	this.getOffer = function (id, cb) {
		var returnOffer = null;
		this.getOffers(function (offers) {
			angular.forEach(offers, function (offer) {
				if (offer.id == id) {
					returnOffer = offer;
				}
			});
			cb(returnOffer);
		});
	};
};

myRetail.factory('offerModel', function ($http, socket) {
	var offerModel = new OfferModel($http, socket);
	return offerModel;
});