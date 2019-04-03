import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props = {};
export default class HomePage extends Component<Props> {
    static navigationOptions= {
        title:'Home',
    };
    render() {
        /**
         * Screen Navigation Prop(屏幕的navigation Prop)
         * navigation包含一下功能：
         *   navigate：跳转到其他界面；
         *   state：屏幕的当前state；
         *   setParams：改变路由的params；
         *   goBack：关闭当前屏幕；
         *   dispatch：向路由发送一个action；
         */
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    this is HomePage
                </Text>
                <Button
                    title='Go to Page1'
                    onPress={()=>{
                        navigation.navigate('Page1',{name:'动态的'});
                    }}
                />
                <Button
                    title='Go to Page2'
                    onPress={()=>{
                        navigation.navigate('Page2');
                    }}
                />
                <Button
                    title='Go to Page3'
                    onPress={()=>{
                        navigation.navigate('Page3',{title:'page3'});
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});