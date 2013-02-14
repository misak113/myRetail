

function OrderListCtrl($scope, orderModel) {
	
	orderModel.getOrders(function (orders) {
		$scope.orders = orders;
	});
}