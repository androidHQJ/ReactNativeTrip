### 底部导航菜单开发
#### 1.底部导航框架：
[ptomasroos/react-native-tab-navigator](https://github.com/ptomasroos/react-native-tab-navigator)

#### 2.官方组件 Navigator的基本使用：
    在0.44版本之后就不能使用Navigator。我们可以在reactNative中文文档中看到在0.44之后就不包含了navigator（http://reactnative.cn/）。
- 定义

        导航组件
        传递数据
        页面跳转

- 使用

        1.导入Navigator
        2.render中返回Navigator
        3.调用相关方法

**0.44版本之后使用的话：**

1.安装：
输入下面这个命令:
```
npm install --save https://github.com/facebookarchive/react-native-custom-components.git
```
注意：我在试过了npm install react-native-deprecated-custom-components --save这个方法。总是报错：
```
React-Native – undefined is not an object (“evaluating _react3.default.PropTypes.shape”)
```
如果你已经安装了，使用如下命令卸载：
```
npm uninstall --save react-native-deprecated-custom-components
```
2.导入使用：
```
import { Navigator } from'react-native-deprecated-custom-components';
```
### 自定义NavigationBar:顶部导航栏
[Platform 模块](https://reactnative.cn/docs/platform-specific-code/)

[StatusBar](https://reactnative.cn/docs/statusbar/)

[TouchableOpacity](https://reactnative.cn/docs/touchableopacity/)

### 适配RN 0.55全新导航器 react-navigation
[React Navigation 官网](https://reactnavigation.org/zh-Hans/)

[从navigator到react-navigation进阶教程](https://www.jianshu.com/p/8eaca7d0590f)