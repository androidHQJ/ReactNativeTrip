package com.heqijun.rnhybridandroid.ui;

import android.content.Context;
import android.content.Intent;

import com.facebook.react.ReactActivity;

public class ReactPageActivity extends ReactActivity {

    private static String MOUDLE_NAME;

    public static void start(Context context, String moudleName){
        ReactPageActivity.MOUDLE_NAME = moudleName;
        Intent intent=new Intent(context,ReactPageActivity.class);
        context.startActivity(intent);
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return MOUDLE_NAME;
    }


}
