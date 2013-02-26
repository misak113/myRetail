

function PurchaseListCtrl($scope, purchaseModel) {
	
	purchaseModel.getPurchases(function (purchases) {
		$scope.purchases = purchases;
	});
};