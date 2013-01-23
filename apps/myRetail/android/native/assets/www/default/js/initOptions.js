
/* JavaScript content from js/initOptions.js in folder common */

var wlInitOptions = {
    connectOnStartup : false
};

if (typeof WLJSX !== 'undefined') {
	WLJSX.bind(window, "load", function() {
	    WL.Client.init(wlInitOptions);
	});
}
