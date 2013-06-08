
/**
 * AngularJS setup
 * 	Routes
 */
var myRetail = angular.module('myRetail', ['ngCookies', 'filters']);
myRetail.
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/login', {templateUrl: 'templates/login.html',   controller: LoginCtrl}).
			when('/home', {templateUrl: 'templates/home.html',   controller: HomeCtrl}).
			when('/menu', {templateUrl: 'templates/menu.html',   controller: MenuCtrl}).
			when('/messages', {templateUrl: 'templates/messages.html',   controller: MessagesCtrl}).
			when('/offer-list', {templateUrl: 'templates/offerList.html', controller: OfferListCtrl}).
			when('/offer/:offerId', {templateUrl: 'templates/offer.html', controller: OfferCtrl}).
			when('/purchase-list', {templateUrl: 'templates/purchaseList.html', controller: PurchaseListCtrl}).
			when('/purchase/:purchaseId', {templateUrl: 'templates/purchase.html', controller: PurchaseCtrl}).
			when('/product/:productId', {templateUrl: 'templates/product.html', controller: ProductCtrl}).
			when('/logout', {templateUrl: 'templates/home.html', controller: LogoutCtrl}).
			otherwise({redirectTo: '/login'});
	}]);


// init socket.io as angular service
myRetail.factory('socket', function (config) {
	var socket = io.connect(config.serverUrl);
	return socket;
});
// pullDown service
myRetail.factory('pullDown', function () {
	return $.pullDown.start({container: $('.ng-view')});
});



