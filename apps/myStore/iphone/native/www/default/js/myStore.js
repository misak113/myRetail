
/* JavaScript content from js/myStore.js in folder common */

// use jQuery

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
	return jQuery.pullDown.start({container: jQuery('.ng-view')});
});




/* JavaScript content from js/myStore.js in folder iphone */
/*
 *  Licensed Materials - Property of IBM
 *  5725-G92 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}