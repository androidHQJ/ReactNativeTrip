import {ToastAndroid} from 'react-native';

class ToastUtil {
    show(data) {
        ToastAndroid.showWithGravity(data,ToastAndroid.SHORT,ToastAndroid.CENTER)
    }
}

export default new ToastUtil();