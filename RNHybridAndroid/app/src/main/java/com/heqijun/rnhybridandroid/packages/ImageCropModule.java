package com.heqijun.rnhybridandroid.packages;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.heqijun.rnhybridandroid.utils.crop.Crop;
import com.heqijun.rnhybridandroid.utils.crop.CropImpl;

/**
 * @author heqijun
 * @description
 * @date 2019/4/1 1:29 PM
 */
public class ImageCropModule extends ReactContextBaseJavaModule implements Crop{

    private CropImpl cropImpl;

    public ImageCropModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ImageCrop";
    }

    /**
     * js->原生
     * @param aspectX
     * @param aspectY
     * @param promise
     */
    @Override
    @ReactMethod
    public void selectWithCrop(int aspectX, int aspectY, Promise promise) {
        getCrop().selectWithCrop(aspectX,aspectY,promise);
    }

//    @Override
//    @ReactMethod
//    public void selectWithCrop(int aspectX, int aspectY, Callback errorCallback, Callback successCallback) {
//        getCrop().selectWithCrop(aspectX,aspectY,errorCallback,successCallback);
//    }

    private CropImpl getCrop(){
        if(cropImpl==null){
            cropImpl=CropImpl.of(getCurrentActivity());
            getReactApplicationContext().addActivityEventListener(cropImpl);
        }else {
            cropImpl.updateActivity(getCurrentActivity());
        }
        return cropImpl;
    }

}
