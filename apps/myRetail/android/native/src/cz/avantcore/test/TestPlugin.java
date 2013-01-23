package cz.avantcore.test;

import org.apache.cordova.api.Plugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import android.webkit.WebSettings.PluginState;

public class TestPlugin extends Plugin {

	@Override
	public PluginResult execute(String action, JSONArray arguments, String callbackId) {
		PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION);
		
		if (action.equals("test")) {
			try {
				result = new PluginResult(PluginResult.Status.OK, "tested successfuly "+arguments.getString(0));
			} catch (JSONException e) {
				result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
			}
		}
		
		return result;
	}
	
}
