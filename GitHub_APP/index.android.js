/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Image, Text, View } from 'react-native'
import TabNavigator from 'react-native-tab-navigator' // 底部导航菜单
import { Navigator } from 'react-native-deprecated-custom-components'
import Boy from './js/Boy.js'

export default class GitHub_APP extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'tb_popular'
    }
  }
  render () {
    return (
      <View style={styles.container}>
        {/* 1.底部导航菜单 TabNavigator 的使用 */}
        {/* <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_popular'}
                    selectedTitleStyle={{color:'red'}}
                    title="最热"
                    renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
                    <View style={styles.page1}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_trending'}
                    selectedTitleStyle={{color:'yellow'}}
                    title="趋势"
                    renderIcon={() =>
                        <Image style={styles.image} style={styles.image} source={require('./res/images/ic_trending.png')} />}
                    renderSelectedIcon={() =>
                        <Image style={[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_trending.png')} />}
                    onPress={() =>
                        this.setState({ selectedTab: 'tb_trending' })}>
                    <View style={styles.page2}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_favorite'}
                    selectedTitleStyle={{color: 'red'}}
                    title='收藏'
                    renderIcon={;() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                    renderSelectedIcon={;() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_polular.png')} />}
                    badgeText='1'
                    onPress={;() => this.setState({ selectedTab: 'tb_favorite' })}>
                    <View style={styles.page1}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'tb_my'}
                    selectedTitleStyle={{color:'red'}}
                    title="我的"
                    renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                    renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'tb_my' })}>
                    <View style={styles.page1}></View>
                </TabNavigator.Item>
            </TabNavigator> */}
        {/* 2.Navigator的使用 和页面间跳转和数据传递 */}
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

AppRegistry.registerComponent('GitHub_APP', () => GitHub_APP)
