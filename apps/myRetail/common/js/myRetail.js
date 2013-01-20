
/**
 * AngularJS setup
 * 	Routes
 */
var myRetail = angular.module('myRetail', ['filters']);
myRetail.
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/menu', {templateUrl: 'templates/menu.html',   controller: MenuCtrl}).
			when('/offer-list', {templateUrl: 'templates/offerList.html', controller: OfferListCtrl}).
			when('/offer/:offerId', {templateUrl: 'templates/offer.html', controller: OfferCtrl}).
			when('/load-account', {templateUrl: 'templates/loadAccount.html', controller: LoadAccountCtrl}).
			when('/qr-code', {templateUrl: 'templates/qRCode.html', controller: QRCodeCtrl}).
			otherwise({redirectTo: '/menu'});
	}]);

// Services
myRetail.factory('offerModel', function ($http) {
	var offerModel = new OfferModel($http);
	return offerModel;
});








//Worklight comes with the jQuery framework bundled inside. If you do not want to use it, please comment out the line below.
//window.$ = window.jQuery = WLJQ;

function wlCommonInit(){
	// Common initialization code goes here
}

