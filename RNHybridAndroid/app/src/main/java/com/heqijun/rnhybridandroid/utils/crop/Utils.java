package com.heqijun.rnhybridandroid.utils.crop;

import android.os.Environment;

import java.io.File;

/**
 * @author heqijun
 * @description
 * @date 2019/4/1 4:54 PM
 */
public class Utils {
    /**
     * 获取一个临时文件
     * @param fileName
     * @return
     */
    public static File getPhotoCacheDir(String fileName) {
        return new File(Environment.getExternalStorageDirectory().getAbsoluteFile(),fileName);
    }
}
