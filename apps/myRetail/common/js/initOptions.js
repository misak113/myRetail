
var serverUrl = 'http://localhost:1337';

var wlInitOptions = {
    connectOnStartup : false
};

if (typeof WLJSX !== 'undefined') {
	WLJSX.bind(window, "load", function() {
	    WL.Client.init(wlInitOptions);
	});
}
