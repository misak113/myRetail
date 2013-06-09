
function NavCtrl($scope, $window, notificationModel) {

	// message count
	notificationModel.getNotRead(function (notRead) {
		// pokud nastane změna, rovnou se to změní realtime
		$scope.countNotReadMessages = notRead.length;
		$scope.typeMessagesInfo = _.all(notRead, function (n) { return n.type === 'info'; });
		$scope.typeMessagesError = _.all(notRead, function (n) { return n.type === 'error'; });
		$scope.typeMessagesWarning = _.all(notRead, function (n) { return n.type === 'warning'; });
		$scope.$apply();
	});



 	$scope.goBack = function($event) {
 		$event.preventDefault();
		$window.history.back(); // @todo předělat na angular $location
	};
};