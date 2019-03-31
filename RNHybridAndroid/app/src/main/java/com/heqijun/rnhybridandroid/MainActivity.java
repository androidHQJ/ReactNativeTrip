package com.heqijun.rnhybridandroid;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.RadioGroup;

public class MainActivity extends AppCompatActivity {

    private RadioGroup radioGroup;
    private int userModle=1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        radioGroup = ((RadioGroup) findViewById(R.id.radioGroup));
        radioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                if (checkedId==R.id.radio1){
                    userModle=1;
                }else if (checkedId==R.id.radio2){
                    userModle=2;
                }
            }
        });
    }

    public void jump(View view) {
        if (userModle==1){
            ReactPageActivity.start(this);
        }else if (userModle==2){
            RNPageActivity.start(this);
        }
    }
}
