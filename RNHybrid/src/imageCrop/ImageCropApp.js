import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    TextInput,
    Platform,
    ToastAndroid
} from 'react-native';
import ImageCrop from './ImageCrop'
import PermissionUtil from '../utils/PermissionUtil'

/**
 * 图片剪裁
 * @type {string}
 */
const ASPECT_X="2";
const ASPECT_Y="1";
export default class ImageCropApp extends Component {
    state = {
        result: ''
    }

    onSelectCrop() {
        this.show("获取权限成功！");
        let x=this.aspectX?this.aspectX:ASPECT_X;
        let y=this.aspectY?this.aspectY:ASPECT_Y;
        ImageCrop.selectWithCrop(parseInt(x),parseInt(y)).then(result=> {
            this.show("剪切成功！");
            this.setState({
                result: result['imageUrl']?result['imageUrl']:result
            })
        }).catch(e=> {
            this.show("剪切失败！");
            this.setState({
                result: e
            })
        });
    }

    render() {
        let imgUrl =Platform.OS==='android'? 'file:///' + this.state.result:this.state.result;
        let imageView=this.state.result===""?null:
            <Image
                resizeMode='contain'
                style={{height:200,width:200}}
                source={{uri: imgUrl}}/>
        return (
            <View style={styles.container}>
                <View
                    style={styles.row}
                >
                    <Text>宽:</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={ASPECT_X}
                        onChangeText={aspectX=>this.aspectX=aspectX}
                    />
                    <Text>比 高:</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={ASPECT_Y}
                        onChangeText={aspectY=>this.aspectY=aspectY}
                    />
                    <Button
                        onPress={()=> PermissionUtil
                            .checkPermission(()=>{
                                this.onSelectCrop()
                            },null,["storage"])}
                        title="裁切图片"
                        color="grey"
                    />
                </View>
                <Text>{imgUrl}</Text>
                {imageView}
            </View>
        );
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
        height:40,
        width:40,
        borderBottomColor: 'red',
        borderBottomWidth: 1
    }
});