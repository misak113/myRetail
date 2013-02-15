/**
 * 
 */

var OrderModel = function ($http) {
	
	this.getOrders = function (cb) {
		$http.get(config.serverUrl+'/orders').success(function(res) {
            cb(res);
        });
	};
	
	this.getOrder = function (id, cb) {
		this.getOrders(function (orders) {
			var returnOrder = null;
			angular.forEach(orders, function (order) {
				if (order.id == id) {
					returnOrder = order;
				}
			});
			if (returnOrder !== null) {
				cb(returnOrder);
			}
		});
	};
};

myRetail.factory('orderModel', function ($http) {
	var orderModel = new OrderModel($http);
	return orderModel;
});