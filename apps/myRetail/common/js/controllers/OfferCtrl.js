


function OfferCtrl ($scope, $routeParams, offerModel, $window) {
	
	var id = $routeParams.offerId;
	
	offerModel.getOffer(id, function (offer) {
		$scope.offer = offer;
		$scope.$apply();
	});
	
	$scope.goBack = function() {
		$window.history.back(); // @todo předělat na angular $location
	};
};