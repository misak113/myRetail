/**
 * 
 */

var OrderModel = function ($http) {
	
	this.getOrders = function (cb) {
		$http.get(config.serverUrl+'/orders').success(function(res) {
            cb(res);
        });
	};
};

myRetail.factory('orderModel', function ($http) {
	var orderModel = new OrderModel($http);
	return orderModel;
});