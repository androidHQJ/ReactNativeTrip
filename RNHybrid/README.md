### RNHybrid &&  RNHybridAndroid
    android原生和rn混合开发 实践
参考：[mrarronz/react-native-blog-examples](https://github.com/mrarronz/react-native-blog-examples)
#### 基本组件开发实战:
- Navigator
    - 官方组件 Navigator
    - 底部导航框架 react-native-tab-navigator
    - 自定义NavigationBar:顶部导航栏
    - 全新导航器 react-navigation
- TODO:动画Animated使用示例
- TODO:列表相关
    - TODO:使用FlatList实现豆瓣电影列表
    - TODO:使用SectionList改造电影列表
    - TODO:自定义下拉刷新上拉加载的列表
    - TODO:Redux的集成和使用，实现简单登录和电影列表加载

#### 原生模块开发实战:

- 从相册获取照片并裁切照片的实战项目

#### 常见的应用场景实战:

- 二维码的生成和扫描:

    [React Native二维码的生成和扫描](https://www.jianshu.com/p/bfad4c158f07)
    
    [react-native-camera](https://github.com/react-native-community/react-native-camera)

        1.二维码生成库：react-native-qrcode-svg
        npm install --save react-native-qrcode-svg
        //react-native-svg是react-native-qrcode-svg的基础库必须安装，由react-native-community开源，可靠性更高。
        npm install --save react-native-svg

        2.二维码扫描库：react-native-camera
        npm install --save react-native-camera
       
    [React Native 交互管理器InteractionManager](https://blog.csdn.net/gongch0604/article/details/80095164)

- TODO：视频播放器功能
