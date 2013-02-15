
function OrderCtrl($scope, $routeParams, orderModel) {
	var id = $routeParams.orderId;
	
	orderModel.getOrders(function (orders) {
		orders.pop();
		$scope.order = orders.pop(); // @todo
		
		angular.forEach($scope.order.items, function (item, key) {
			if (item.product === null && item.price < 0) {
				$scope.order.items[key].product = {
					name: _t('Odečtení slevy'),
					image: {
						small: config.baseUrl+'/images/sale.png'
					}
				};
			}
			if (item.offer === null) {
				$scope.order.items[key].hideSalePrice = true;
			}
		});
	});
};