import { AppRegistry } from 'react-native';
import App from './src/common/App';
import App2 from './src/common/App2';
import ImageCropApp from "./src/imageCrop/ImageCropApp";
import RnTabNavigatorDemo from "./src/component/navigator/rnTabNavigator/RnTabNavigatorDemo";
import OfficialNavigatorDemo from "./src/component/navigator/officialNavigator/OfficialNavigatorDemo";
import RNNavigationDemo from "./src/component/navigator/reactNavigation/RnNavigationDemo";

AppRegistry.registerComponent('App1', () => App);
AppRegistry.registerComponent('App2', () => App2);
AppRegistry.registerComponent('ImageCropApp', () => ImageCropApp);
AppRegistry.registerComponent('RnTabNavigatorDemo', () => RnTabNavigatorDemo)
AppRegistry.registerComponent('OfficialNavigatorDemo', () => OfficialNavigatorDemo)
AppRegistry.registerComponent('RNNavigationDemo', () => RNNavigationDemo)


