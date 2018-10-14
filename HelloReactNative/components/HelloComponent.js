/**
 * 创建组件的三种方式：
 * 1.ES6
 * 2.ES5
 * 3.函数式定义的无状态组件
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

/**
 * 方式一：ES6
 * 推荐
 */
//export default 导出组件
export default class HelloComponent extends Component{
    //组件渲染UI部分的界面
    render(){
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello ES6:{this.props.name}</Text>
    }
 }

 /**
 * 方式三：函数式
 * 无状态不能使用this
 */
// function HelloComponent(props) {
//     return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello World:{props.name}</Text>
// }
// module.exports=HelloComponent;
