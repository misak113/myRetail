
/* JavaScript content from js/controllers/OfferListCtrl.js in folder common */
/**
 * 
 */

function OfferListCtrl($scope, offerModel) {
	var testPlugin = new TestPlugin();
	testPlugin.test('AHOJ', function (e, mes) {console.log({e: e,mes: mes}); alert(mes);});

	offerModel.getOffers(function (offers) {
		$scope.offers = offers;
	}); // @todo
	
	$scope.unwanted = function (offer) {
		var index = $scope.offers.indexOf(offer);
		$scope.offers.splice(index, 1);
		offerModel.markAsUnwanted(offer);
	};

};