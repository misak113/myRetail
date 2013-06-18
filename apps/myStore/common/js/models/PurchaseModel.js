/**
 * 
 */

var PurchaseModel = function ($http, config) {
	
	this.getPurchases = function (cb) {
		$http.get(config.serverUrl+'/purchases').success(function(res) {
            cb(res);
        });
	};
	
	this.getPurchase = function (id, cb) {
		this.getPurchases(function (purchases) {
			var returnPurchase = null;
			angular.forEach(purchases, function (purchase) {
				if (purchase._id == id) {
					returnPurchase = purchase;
				}
			});
			if (returnPurchase !== null) {
				cb(returnPurchase);
			}
		});
	};
	
	this.getPurchaseItem = function (id, cb) {
		this.getPurchase(1864686, function (purchase) {
			cb(purchase.items[0]); // @todo
		});
	};
};

myRetail.factory('purchaseModel', function ($http, config) {
	var purchaseModel = new PurchaseModel($http, config);
	return purchaseModel;
});