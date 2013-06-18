
/* JavaScript content from js/controllers/NavCtrl.js in folder common */

function NavCtrl($scope, $window, notificationModel, $timeout) {

	// message count
	notificationModel.bindNotRead(function (notRead) {
		// pokud nastane změna, rovnou se to změní realtime
		$scope.countNotReadMessages = notRead.length;
		$scope.typeMessagesInfo = _.all(notRead, function (n) { return n.type === 'info'; });
		$scope.typeMessagesError = _.all(notRead, function (n) { return n.type === 'error'; });
		$scope.typeMessagesWarning = _.all(notRead, function (n) { return n.type === 'warning'; });
		$scope.$apply();
	});
	notificationModel.bindNewNotifications(function (notifications) {
		// pokud nastane změna, rovnou se to změní realtime
		$scope.newMessages = [];
		_.forEach(notifications, function (not) {
			not.isError = not.type === 'error';
			not.isInfo = not.type === 'info';
			not.isSuccess = not.type === 'success';
			if (_.contains(['error', 'warning', 'success'], not.type))
				$scope.newMessages.push(not);
		});
		if (notifications.length > 0)
			$timeout(function () {
				notificationModel.setAsOld(notifications);
			}, 5000);
		$scope.$apply();
	});



 	$scope.goBack = function($event) {
 		$event.preventDefault();
		$window.history.back(); // @todo předělat na angular $location
	};
};