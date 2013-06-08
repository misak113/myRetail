
var UserModel = function (socket, $timeout) {
	var self = this;
	var timeToLogout = 20*60;

	this.WRONG_CREDENTIALS = 1;

	setInterval(function () {
		timeToLogout--;
	}, 1000);
	
	this.login = function (username, password, remember, callback) {
		$timeout(function () {
			if (username == 'franta' && password == 'abc') {
				timeToLogout = 20*60;
				callback(null, {});
			} else {
				var e = new Error('Špatné jméno nebo heslo');
				e.code = self.WRONG_CREDENTIALS;
				callback(e);
			}
		}, 2000, false);
	};

	this.isLoggedIn = function (callback) {
		var isLoggedIn = timeToLogout > 0;
		if (typeof callback === 'function') {
			callback(isLoggedIn);
		}
		return isLoggedIn;
	};

};

myRetail.factory('userModel', function (socket, $timeout) {
	var userModel = new UserModel(socket, $timeout);
	return userModel;
});