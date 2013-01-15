
/**
 * AngularJS setup
 * 	Routes
 */
angular.module('myRetail', ['filters']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/menu', {templateUrl: 'templates/menu.html',   controller: MenuCtrl}).
			when('/offer-list', {templateUrl: 'templates/offerList.html', controller: OfferListCtrl}).
			when('/load-account', {templateUrl: 'templates/loadAccount.html', controller: LoadAccountCtrl}).
			when('/qr-code', {templateUrl: 'templates/qRCode.html', controller: QRCodeCtrl}).
			otherwise({redirectTo: '/menu'});
	}]);






//Worklight comes with the jQuery framework bundled inside. If you do not want to use it, please comment out the line below.
window.$ = window.jQuery = WLJQ;

function wlCommonInit(){
	// Common initialization code goes here
}

