import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Button, ToastAndroid
} from 'react-native';
import QRCode from 'react-native-qrcode-svg'

/**
 * 二维码生成页面
 */
type Props = {};
export default class QRCodeImage extends Component<Props> {

    state = {
        qrCodeView: null,
        qrScanResult:''
    }

    createQRImage() {
        let qrCodeView;
        if (this.qrCode===""){
            this.show("二维码内容为空！");
            qrCodeView=null;
        }else {
            qrCodeView=<QRCode value={this.state.qrCode} size={140}/>
        }
        this.state({
            qrCodeView:qrCodeView
        });
        this.show("二维码已生成！");
    }

    render() {
        return (
            <View style={styles.container}>
                <View
                    style={styles.row}
                >
                    <TextInput
                        style={styles.input}
                        placeholder='请输入二维码内容'
                        onChangeText={qrCode=>this.qrCode=qrCode}
                    />
                    <Button
                        onPress={()=>{this.createQRImage()}}
                        title="生成二维码"
                        color="grey"
                    />
                </View>
                {this.state.qrCodeView}
            </View>
        )
    }

    show(data) {
        ToastAndroid.showWithGravity(data,ToastAndroid.SHORT,ToastAndroid.CENTER)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
        width:100,
        borderBottomColor: 'red',
        borderBottomWidth: 1
    }
});