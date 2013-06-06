
var UserModel = function (socket, $timeout) {
	var self = this;

	this.WRONG_CREDENTIALS = 1;
	
	this.login = function (username, password, remember, callback) {
		$timeout(function () {
			if (username == 'franta' && password == 'abc')
				callback(null, {});
			else {
				var e = new Error('Špatné jméno nebo heslo');
				e.code = self.WRONG_CREDENTIALS;
				callback(e);
			}
		}, 2000, false);
	};

	this.loggedIn = function () {
		return true;
	};

};

myRetail.factory('userModel', function (socket, $timeout) {
	var userModel = new UserModel(socket, $timeout);
	return userModel;
});