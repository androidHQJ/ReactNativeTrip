
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class LifeCycleComponent extends Component{
    constructor(props){
        super(props);
        console.log('--------constructor----------')
    }

    componentWillMount(): void {
        console.log('--------componentWillMount----------')
    }

    componentDidMount(): void {
        console.log('--------componentDidMount----------')
    }


    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        console.log('--------componentWillReceiveProps----------')
    }


    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        console.log('--------shouldComponentUpdate----------')
        return true;
    }


    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {
        console.log('--------componentWillUpdate----------')
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        console.log('--------componentDidUpdate----------')
    }

    componentWillUnmount(): void {
        console.log('--------componentWillUnmount----------')
    }

    render(){
        console.log('--------render----------')
        return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello ReactNative:{this.props.name}</Text>
    }
 }
