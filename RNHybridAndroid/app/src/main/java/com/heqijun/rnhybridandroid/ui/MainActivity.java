package com.heqijun.rnhybridandroid.ui;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.RadioGroup;

import com.heqijun.rnhybridandroid.R;

public class MainActivity extends AppCompatActivity {

    private RadioGroup radioGroup;
    private int userModle=1;
    private EditText editText;

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
        editText=((EditText) findViewById(R.id.edit));
    }

    public void jump(View view) {
        String moudleName=editText.getText().toString();
        if (userModle==1){
            ReactPageActivity.start(this,moudleName);
        }else if (userModle==2){
            RNPageActivity.start(this,moudleName);
        }
    }

    public void cropImage(View view) {

    }

    public void QRCode(View view) {

    }

    public void navigator(View view) {
        ReactPageActivity.start(this,"RNNavigationDemo");
    }
}
