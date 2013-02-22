
function OrderItemCtrl($scope, $routeParams, $location, orderModel) {
	var id = $routeParams.orderItemId;
	
	orderModel.getOrderItem(id, function (orderItem) {
		$scope.orderItem = orderItem;
		if (orderItem.offer != null) {
			$location.path('/offer/'+orderItem.offer.id);
		} else if (orderItem.product != null) {
			$location.path('/product/'+orderItem.product.id);
		} else {
			window.history.back(); // @todo předělat na angular $location
		}
	});
};