

function MessagesCtrl($scope, notificationModel, $timeout) {
	
	notificationModel.getNotifications(function (notifications) {
		$scope.messages = notifications;
		$timeout(function () {
			notificationModel.setAsRead(notifications);
		}, 4000);
		$scope.$apply();
	});
};