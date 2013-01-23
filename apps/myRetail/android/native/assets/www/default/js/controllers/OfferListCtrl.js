
/* JavaScript content from js/controllers/OfferListCtrl.js in folder common */
/**
 * 
 */

function OfferListCtrl($scope, offerModel) {

	offerModel.getOffers(function (offers) {
		$scope.offers = offers;
	}); // @todo
	
	$scope.unwanted = function (offer) {
		var index = $scope.offers.indexOf(offer);
		$scope.offers.splice(index, 1);
		offerModel.markAsUnwanted(offer);
	};

};