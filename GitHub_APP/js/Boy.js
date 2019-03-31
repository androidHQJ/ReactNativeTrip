import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Image, Text, View } from 'react-native'
import Girl from './Girl'
import NavigationBar from './NavigationBar.js'

export default class Boy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      word: ''
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <NavigationBar
          statusBar={{ backgroundColor: 'red' }}
          style={{ backgroundColor: 'red' }}
          title={'Boy'}
        />
        <Text style={styles.text}>I am boy</Text>
        <Text
          style={styles.text}
          onPress={() => {
            this.props.navigator.push({
              component: Girl,
              params: {
                word: '一支玫瑰',
                onCallBack: word => {
                  this.setState({
                    word: '收到女孩的：' + word
                  })
                }
              }
            })
          }}
        >
          送给女孩一支玫瑰
        </Text>
        <Text style={styles.text}>{this.state.word}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20
  }
})
