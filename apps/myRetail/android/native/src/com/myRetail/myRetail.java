package com.myRetail;

import android.os.Bundle;

import com.worklight.androidgap.WLDroidGap;

public class myRetail extends WLDroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
	   super.onCreate(savedInstanceState);
	   //DeviceAuthManager.getInstance().setProvisioningDelegate(<Use default ProvisioningDelegateImpl class or replace with your IProvisioningDelegate implementation>);
	   super.loadUrl(getWebMainFilePath());
	}		
}


