
// tento controller je spuštěn vždy, proto je využíván jako spouštěč všech must-run služeb
function AppCtrl($scope, pullDown, $timeout, userModel, $location, messageDisp, $route, $window) {
	var loginCtrls = ['LoginCtrl'];
	var allowedCtrls = ['LoginCtrl', 'MenuCtrl'];

	// funkce, která checkuje, zda je přihlášen
	var checkAuth = function (next) {
		var loggedIn = userModel.isLoggedIn();
		if (loggedIn === false) {
			var currentCtrl = typeof $route.current !== 'undefined' && 
				typeof $route.current.$route !== 'undefined' ?$route.current.$route.controller.name :null;
			
			if (!_.contains(allowedCtrls, currentCtrl)) {
				$location.path('/login');
				messageDisp.flash('Byl jste automaticky odhlášen. Přihlaste se znovu.', 'warning');
				$scope.$apply();
			}
		}
		if (typeof next === 'function')
			next(loggedIn);		
	};

	// každou vteřinu kontroluje, zda je přihlášen. Pokud ne, vrátí na logovací stránku
	var interval;
	interval = function (fn, time) {
		$timeout(function () {
			fn(function () { 
				interval(fn, time); 
			});
		}, time);
	};
	interval(checkAuth, 2000);

	// při načtení jiné stránky @todo moc se mi to takhle nelíbí
	$scope.$on('$routeChangeSuccess', function(ngEv, current, previous) { 
 		var previousCtrl = typeof previous !== 'undefined' 
			&& typeof previous.$route !== 'undefined' ?previous.$route.controller.name :null;
		var currentCtrl = typeof current !== 'undefined' 
			&& typeof current.$route !== 'undefined' ?current.$route.controller.name :null;
		
		var loggedIn = userModel.isLoggedIn();
		if (loggedIn !== false) {
			if (_.contains(loginCtrls, currentCtrl)) {
				$location.path('/home');
			}
		} else {
			if (_.contains(allowedCtrls, currentCtrl)) return;

			$location.path('/login');
			if (_.contains(allowedCtrls, previousCtrl)) {
				messageDisp.flash('Není možné používat aplikaci, pokud nejste přihlášen.', 'warning');
			} else if (!_.contains(allowedCtrls, currentCtrl)) {
				messageDisp.flash('Byl jste automaticky odhlášen. Přihlaste se znovu.', 'warning');
			}
		}
 	});



 	$scope.goBack = function($event) {
 		$event.preventDefault();
		$window.history.back(); // @todo předělat na angular $location
	};
};
