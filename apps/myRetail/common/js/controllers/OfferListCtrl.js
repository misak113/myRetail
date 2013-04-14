/**
 * 
 */

function OfferListCtrl($scope, offerModel) {
	$scope.offers = [];

	offerModel.getOffers(function (offers) {
		$scope.offers = offers;
		$scope.$apply();
	});
	
	$scope.unwanted = function (offer) {
		var index = $scope.offers.indexOf(offer);
		$scope.offers.splice(index, 1);
		offerModel.markAsUnwanted(offer);
	};

};