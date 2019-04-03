import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import QRCodeScreen from "./QRCodeScreen";
import ScannerScreen from "./ScannerScreen";
import {AppStackNavigator} from "../component/navigator/reactNavigation/navigators/AppNavigators";

const rootParams = {
    QRCode: {screen: QRCodeScreen},
    Scan: {screen: ScannerScreen}
};

const navigationOptions = {
    headerBackTitle: null,
    headerTintColor: 'black',
    headerStyle: {backgroundColor: 'white'},
    headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
    showIcon: true,
};

const QRRootNavigator=createAppContainer(
    createStackNavigator(
        rootParams,
        {
            defaultNavigationOptions:navigationOptions,
            initialRouteName:'QRCode',
            headerMode: 'screen'
        }
    )
);

export default class QRRoot extends React.Component {

    handleNavigationChange(prevState, newState, action){
        console.info('QRRoot',prevState,newState,action);
    }

    render(){
        return (
            <QRRootNavigator
                onNavigationStateChange={this.handleNavigationChange}
            />
        )
    }
}