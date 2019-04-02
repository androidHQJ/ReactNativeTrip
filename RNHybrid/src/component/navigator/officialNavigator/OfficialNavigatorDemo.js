import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import { Navigator } from 'react-native-deprecated-custom-components'
import Boy from './Boy'

/**
 * 官方Navigator Demo
 */
export  default class OfficialNavigatorDemo extends Component {
    render () {
        return (
            <View style={styles.container}>
                {/* Navigator的使用 和页面间跳转和数据传递*/}
                <Navigator
                    initialRoute={{ component: Boy }}
                    renderScene={(route, navigator) => {
                        let Component = route.component
                        return <Component navigator={navigator} {...route.params} />
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    page1: {
        flex: 1,
        backgroundColor: 'red'
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    image: {
        width: 22, // RN 中 尺寸无单位
        height: 22
    }
})