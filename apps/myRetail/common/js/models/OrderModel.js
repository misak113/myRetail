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
	
	this.getOrderItem = function (id, cb) {
		this.getOrder(1864686, function (order) {
			cb(order.items[0]);
		});
	};
};

myRetail.factory('orderModel', function ($http) {
	var orderModel = new OrderModel($http);
	return orderModel;
});