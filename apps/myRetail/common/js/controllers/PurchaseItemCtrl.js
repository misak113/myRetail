
function PurchaseItemCtrl($scope, $routeParams, $location, purchaseModel) {
	var id = $routeParams.purchaseItemId;
	
	purchaseModel.getPurchaseItem(id, function (purchaseItem) {
		$scope.purchaseItem = purchaseItem;
		if (purchaseItem.offer != null) {
			$location.path('/offer/'+purchaseItem.offer.id);
		} else if (purchaseItem.product != null) {
			$location.path('/product/'+purchaseItem.product.id);
		} else {
			window.history.back(); // @todo předělat na angular $location
		}
	});
};