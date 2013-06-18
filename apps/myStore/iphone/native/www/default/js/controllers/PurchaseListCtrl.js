
/* JavaScript content from js/controllers/PurchaseListCtrl.js in folder common */


function PurchaseListCtrl($scope, purchaseModel, shoppingCartModel) {
	
	purchaseModel.getPurchases(function (purchases) {
		$scope.purchases = purchases;
	});

	shoppingCartModel.getShoppingCarts(function (shoppingCarts) {
		$scope.shoppingCarts = shoppingCarts;
	});
};