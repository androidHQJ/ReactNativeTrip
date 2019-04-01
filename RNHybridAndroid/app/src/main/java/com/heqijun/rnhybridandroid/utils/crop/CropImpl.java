package com.heqijun.rnhybridandroid.utils.crop;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

/**
 * @author heqijun
 * @description
 * @date 2019/4/1 1:57 PM
 */
public class CropImpl implements ActivityEventListener,Crop{
    private final int RC_PICK=50081;
    private final int RC_CROP=50082;
    private final String CODE_ERROR_PICK="用户取消";
    private final String CODE_ERROR_CROP="裁切失败";

    private Promise pickPromise;
    private Uri outPutUri;
    private int aspectX;
    private int aspectY;
    private Activity activity;
    private Callback errorCallback;
    private Callback successCallback;

    public static CropImpl of(Activity activity){
        return new CropImpl(activity);
    }

    private CropImpl(Activity activity) {
        this.activity = activity;
    }
    public void updateActivity(Activity activity){
        this.activity=activity;
    }
    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if(requestCode==RC_PICK){
            if (resultCode == Activity.RESULT_OK && data != null) {//从相册选择照片并裁剪
                outPutUri= Uri.fromFile(Utils.getPhotoCacheDir(System.currentTimeMillis()+".jpg"));
                onCrop(data.getData(),outPutUri);
            } else {
                //原生->js
                pickPromise.reject(CODE_ERROR_PICK,"没有获取到结果");
                //errorCallback.invoke("没有获取到结果");
            }
        }else if(requestCode==RC_CROP){
            if (resultCode == Activity.RESULT_OK) {
                //原生->js
                pickPromise.resolve(outPutUri.getPath());
                //successCallback.invoke(outPutUri.getPath());
            }else {
                //原生->js
                pickPromise.reject(CODE_ERROR_CROP,"裁剪失败");
                //errorCallback.invoke("裁剪失败");
            }
        }
    }

    private void onCrop(Uri targetUri,Uri outputUri){
        this.activity.startActivityForResult(IntentUtils.getCropIntentWith(targetUri,outputUri,aspectX,aspectY),RC_CROP);

    }

    @Override
    public void onNewIntent(Intent intent) {
        if (intent!=null){
            Log.i(getClass().getName(),intent.getDataString());
        }
    }

    /**
     * 原生->js 方式一：Promise
     * @param outputX
     * @param outputY
     * @param promise
     */
    @Override
    public void selectWithCrop(int outputX, int outputY, Promise promise) {
        this.aspectX=outputX;
        this.aspectY=outputY;
        this.pickPromise=promise;
        this.activity.startActivityForResult(IntentUtils.getPickIntentWithGallery(),RC_PICK);
    }

    /**
     * 原生->js 方式二：Callback
     * @param aspectX
     * @param aspectY
     * @param errorCallback
     * @param successCallback
     */
//    @Override
//    public void selectWithCrop(int aspectX, int aspectY, Callback errorCallback, Callback successCallback) {
//        this.errorCallback=errorCallback;
//        this.successCallback=successCallback;
//        this.aspectX=aspectX;
//        this.aspectY=aspectY;
//        this.activity.startActivityForResult(IntentUtils.getPickIntentWithGallery(),RC_PICK);
//    }

}

