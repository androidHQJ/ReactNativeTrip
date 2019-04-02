import React, {Component} from 'react';//PropTypes
import {
    StyleSheet,
    Text,
    Platform,
    StatusBar,
    View
} from 'react-native'
import PropTypes from 'prop-types';//代替 react中的 PropTypes

/**
 * 自定义NavigationBar组件
 */

const NAV_HEIGHT_ANDROID = 50
const NAV_HEIGHT_IOS = 44
const STATUS_BAR_HEIGHT = 20
const StatusBarhap = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.oneOf(['default,light-content,dark-content']),
    hide: PropTypes.bool
}

export default class CustomNavigationBar extends Component {
    static propTypes = {
        // style: View.propTypes.style, 报错： undefined is not an object (evaluating ‘a.View.propTypes.style’)
        style: PropTypes.object,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar: PropTypes.shape(StatusBarhap)
    }
    static defaultProps = {
        statusBar: {
            barStyle: 'light-content',
            hide: false
        }
    }

    render() {
        let status = (
            <View style={styles.statusBar}>
                <StatusBar {...this.props.statusBar} />
            </View>
        )
        let titleView = this.props.titleView ? (
            this.props.titleView
        ) : (
            <Text style={styles.title}>{this.props.title}</Text>
        )
        let content = (
            <View style={styles.navbar}>
                {this.props.leftButton}
                <View style={styles.titleViewContainer}>{titleView}</View>
                {this.props.rightButton}
            </View>
        )
        return (
            <View style={[styles.container, this.props.style]}>
                {status}
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray'
    },
    statusBar: {
        height: Platform.OS == 'ios' ? STATUS_BAR_HEIGHT : 0
    },
    navbar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS == 'ios' ? NAV_HEIGHT_IOS : NAV_HEIGHT_ANDROID,
        // backgroundColor:'red',
        flexDirection: 'row'
    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: 'white'
    }
})
