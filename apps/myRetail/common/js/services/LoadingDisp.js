
var LoadingDisp = function (pullDown) {
	var loading = false;
	
	this.loading = function (status, abortCallback) {
		if (status === true) {
			if (loading === true) return abortCallback();
			
			loading = true;
			pullDown.loading(true);
			pullDown.element.bind('pullDownStopWorking', function (ev) {
				loading = false;
				pullDown.element.unbind('pullDownStopWorking');
				abortCallback();
			})
		} else {
			loading = false;
			pullDown.loading(false);
		}
	};

};

myRetail.factory('loadingDisp', function (pullDown) {
	var loadingDisp = new LoadingDisp(pullDown);
	return loadingDisp;
});
