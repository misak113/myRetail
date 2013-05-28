
/* JavaScript content from js/myRetail.js in folder common */

/**
 * AngularJS setup
 * 	Routes
 */
var myRetail = angular.module('myRetail', ['filters']);
myRetail.
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home', {templateUrl: 'templates/home.html',   controller: HomeCtrl}).
			when('/menu', {templateUrl: 'templates/menu.html',   controller: MenuCtrl}).
			when('/messages', {templateUrl: 'templates/messages.html',   controller: MessagesCtrl}).
			when('/offer-list', {templateUrl: 'templates/offerList.html', controller: OfferListCtrl}).
			when('/offer/:offerId', {templateUrl: 'templates/offer.html', controller: OfferCtrl}).
			when('/purchase-list', {templateUrl: 'templates/purchaseList.html', controller: PurchaseListCtrl}).
			when('/purchase/:purchaseId', {templateUrl: 'templates/purchase.html', controller: PurchaseCtrl}).
			when('/product/:productId', {templateUrl: 'templates/product.html', controller: ProductCtrl}).
			otherwise({redirectTo: '/home'});
	}]);


// init socket.io as angular service
myRetail.factory('socket', function () {
	var socket = io.connect(config.serverUrl);
	return socket;
});




//Worklight comes with the jQuery framework bundled inside. If you do not want to use it, please comment out the line below.
//window.$ = window.jQuery = WLJQ;

function wlCommonInit(){
	// Common initialization code goes here
};


/* JavaScript content from js/myRetail.js in folder android */

// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}