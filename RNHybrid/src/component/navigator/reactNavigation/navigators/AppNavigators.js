import {createStackNavigator} from 'react-navigation'
import HomePage from '../pages/HomePage'

//第一步：创建一个StackNavigator类型的导航器(基于 react-navigation 3.x)
export const AppStackNavigator=createStackNavigator({
    HomePage:{
        screen:HomePage
    }

})