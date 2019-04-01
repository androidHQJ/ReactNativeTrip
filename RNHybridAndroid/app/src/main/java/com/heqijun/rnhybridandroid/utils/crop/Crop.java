package com.heqijun.rnhybridandroid.utils.crop;

import com.facebook.react.bridge.Promise;

/**
 * @author heqijun
 * @description
 * @date 2019/4/1 1:57 PM
 */
public interface Crop {
    /**
     * 选择并裁切照片
     * @param outputX
     * @param outputY
     * @param promise
     */
    void selectWithCrop(int outputX, int outputY, Promise promise);
}
