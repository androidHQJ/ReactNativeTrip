import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import CustomNavigationBar from './CustomNavigationBar.js'

export default class Girl extends Component {
    renderButton(image) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigator.pop()
                }}
            >
                <Image style={{width: 22, height: 22, margin: 5}} source={image}/>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomNavigationBar
                    title={'Girl'}
                    style={{backgroundColor: '#ee6363'}}
                    statusBar={{backgroundColor: '#ee6363'}}
                    leftButton={this.renderButton(
                        require('./../../../../res/images/ic_arrow_back_white_36pt.png')
                    )}
                    rightButton={this.renderButton(require('./../../../../res/images/ic_star.png'))}
                />
                <Text style={styles.text}>I am girl</Text>
                <Text style={styles.text}>
                    我收到了男孩送的：
                    {this.props.word}
                </Text>
                <Text
                    style={styles.text}
                    onPress={() => {
                        this.props.onCallBack('回赠男孩一盒巧克力')
                        this.props.navigator.pop()
                    }}
                >
                    回赠巧克力
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        //   justifyContent:'center',
    },
    text: {
        fontSize: 18
    }
})
