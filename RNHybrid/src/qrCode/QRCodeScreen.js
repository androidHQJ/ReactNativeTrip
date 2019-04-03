import React, { Component } from 'react';
import {
    StyleSheet, TextInput,
    View, Text, TouchableOpacity
} from 'react-native';
import QRCode from 'react-native-qrcode-svg'
import StringUtil from './../utils/StringUtil'
import PermissionUtil from '../utils/PermissionUtil'
import ToastUtil from '../utils/ToastUtil'

/**
 * 二维码生成页面
 */
type Props = {};
export default class QRCodeScreen extends Component<Props> {

    static navigationOptions={
        title: '二维码',
    };

    constructor(props){
        super(props);
        this.state={
            QRCodeString: "",
            isGenerated:false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={()=> PermissionUtil.checkPermission(()=>{
                        this.onClickScanBtn()
                    },null,["camera"])}>
                    <Text style={styles.buttonTitle}>扫描二维码</Text>
                </TouchableOpacity>
                <Text style={styles.tip}>在文本框中输入字符，点击下面button生成二维码</Text>
                <TextInput
                    style={styles.inputView}
                    returnKeyType='done'
                    numberOfLines={1}
                    placeholder={'请输入内容'}
                    placeholderTextColor='#999999'
                    clearButtonMode={'while-editing'}
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    onChangeText={(text) => this.onTextFieldTextChanged(text)}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickGenerateButton()}>
                    <Text style={styles.buttonTitle}>生成二维码</Text>
                </TouchableOpacity>
                {
                    this.state.isGenerated ?
                        <View style={styles.qrcodeImage}>
                            <QRCode
                                value={this.state.QRCodeString}
                                size={140}
                            />
                        </View> : null
                }
            </View>
        )
    }

    onClickScanBtn(){
        this.props.navigation.navigate('Scan');
    }

    onTextFieldTextChanged(text){
        if (StringUtil.isNotEmpty(text)) {
            this.setState({
                QRCodeString: text
            });
        } else {
            this.setState({
                QRCodeString: text,
                isGenerated: false
            });
        }
    }

    onClickGenerateButton(){
        if (StringUtil.isNotEmpty(this.state.QRCodeString)) {
            this.setState({
                isGenerated: true
            });
        }else {
            ToastUtil.show("请输入内容")
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        flex: 1,
    },
    buttonContainer: {
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 15,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 5
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight:'bold',
        color: 'black',
    },
    tip: {
        marginLeft: 15,
        marginRight: 15
    },
    inputView: {
        height: 44,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        margin: 15,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 5
    },
    qrcodeImage: {
        alignItems:'center',
        justifyContent:'center',
    },
});