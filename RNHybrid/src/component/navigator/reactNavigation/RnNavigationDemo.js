import React, { Component } from 'react';
import {AppStackNavigator} from './navigators/AppNavigators'

/**
 * demo 导航器 基于 react-navigation 3.x
 */
const prefix = 'rnhybrid://';

type Props = {};
export default class RnNavigationDemo extends Component<Props> {

    /**
     * onNavigationStateChange
     * @param prevState 变化之前的state；
     * @param newState 新的state；
     * @param action 导致state变化的action；
     */
    handleNavigationChange(prevState, newState, action){
        console.info('RnNavigationDemo',prevState,newState,action);
    }

    render() {
        /**
         * createAppContainer属性：
         * onNavigationStateChange：每次导航器管理的导航状态发生变化时调用的函数。
         * uriPrefix：深度链接，处理深层链接路径时的方法 https://reactnavigation.org/docs/zh-Hans/deep-linking.html
         */
        return (
            <AppStackNavigator
                onNavigationStateChange={this.handleNavigationChange}
                uriPrefix={prefix}
            />
        );
    }
}