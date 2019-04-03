import {createStackNavigator, createAppContainer} from 'react-navigation'
import StackViewStyleInterpolator from
        'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import React from 'react'
import {Button} from 'react-native'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'

/**
 * 导航器配置
 * @type {NavigationContainer}
 */
//3.x后，需要将最外层的包裹形式修改为createAppContainer
export const AppStackNavigator = createAppContainer(
    //创建一个StackNavigator类型的导航器
    createStackNavigator(
        /**
         * 1.RouteConfigs
         * screen(必选)：指定一个 React 组件作为屏幕的主要显示内容，当这个组件被createStackNavigator加载时，它会被分配一个navigation prop。
         * path(可选)：用来设置支持schema跳转时使用，具体使用会在下文的有关Schema章节中讲到；
         * navigationOptions(可选)：用以配置全局的屏幕导航选项如：title、headerRight、headerLeft等；
         */
        {
            HomePage: {
                screen: HomePage,
            },
            Page1: {
                screen: Page1,
                navigationOptions: ({navigation}) => ({
                    title: `${navigation.state.params.name}页面名`,
                })
            },
            Page2: {
                screen: Page2,
                path: 'page2/:value',
                navigationOptions: {
                    title: 'Page2',
                }
            },
            Page3: {
                screen: Page3,
                navigationOptions: (props) => {
                    const {navigation} = props;
                    const {state, setParams} = navigation;
                    const {params} = state;
                    return {
                        title: params.title ? params.title : 'this is page3',
                        headerRight: (
                            <Button
                                title={params.mode === 'edit' ? "保存" : '编辑'}
                                onPress={() => {
                                    setParams({mode: params.mode === 'edit' ? "" : "edit"})
                            }}
                            />
                        )
                    }
                }
            }

        },
        /**
         * 2.StackNavigatorConfig
         *  initialRouteKey,
         *  initialRouteName,
         *  initialRouteParams,
         *  paths,
         *  defaultNavigationOptions:用于屏幕的默认导航选项
         *  disableKeyboardHandling,
         *  getCustomActionCreators
         */
        {
            defaultNavigationOptions: {
                // header:null,
                gesturesEnabled: true
            },
            //android上页面跳转实现ios左右切换的效果
            transitionConfig: () => ({
                //设置横向切换动画
                screenInterpolator: StackViewStyleInterpolator.forHorizontal
            }),
        })
);