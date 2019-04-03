import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props = {};
export default class Page1 extends Component<Props> {
    render() {
        const {navigation}=this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    this is Page1
                </Text>
                <Button
                    title='Go Back'
                    onPress={()=>{
                        navigation.goBack();
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