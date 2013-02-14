
/**
 * AngularJS setup
 * 	Routes
 */
var myRetail = angular.module('myRetail', ['filters', 'ui']);
myRetail.
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home', {templateUrl: 'templates/home.html',   controller: HomeCtrl}).
			when('/menu', {templateUrl: 'templates/menu.html',   controller: MenuCtrl}).
			when('/messages', {templateUrl: 'templates/messages.html',   controller: MessagesCtrl}).
			when('/offer-list', {templateUrl: 'templates/offerList.html', controller: OfferListCtrl}).
			when('/offer/:offerId', {templateUrl: 'templates/offer.html', controller: OfferCtrl}).
			when('/order-list', {templateUrl: 'templates/orderList.html', controller: OrderListCtrl}).
			otherwise({redirectTo: '/home'});
	}]);








//Worklight comes with the jQuery framework bundled inside. If you do not want to use it, please comment out the line below.
//window.$ = window.jQuery = WLJQ;

function wlCommonInit(){
	// Common initialization code goes here
}

