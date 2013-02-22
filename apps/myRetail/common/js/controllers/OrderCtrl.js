
function OrderCtrl($scope, $routeParams, orderModel) {
	var id = $routeParams.orderId;
	
	orderModel.getOrder(id, function (order) {
		$scope.order = order;
		angular.forEach(order.items, function (item, key) {
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
	
	$scope.paymentTypes = {
		visa: {
			image: config.baseUrl+'/images/paymentType/visa.png'
		},
		cash: {
			image: config.baseUrl+'/images/paymentType/cash.png'
		}
	};
};