/**
 * 
 */

var OfferModel = function ($http) {
	
	this.markAsUnwanted = function (offer, config) {
		$http.get('/todo').success(function() {alert('Unwanted');}); // @todo
	};
	
	this.getOffers = function (cb) {
        $http.get(config.serverUrl+'/offers').success(function(res) {
            cb(res);
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

myRetail.factory('offerModel', function ($http) {
	var offerModel = new OfferModel($http);
	return offerModel;
});