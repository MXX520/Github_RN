/**
 * @format
 */
import {AppRegistry} from 'react-native';
import WelcomePage from './js/page/WelcomePage';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation'
import AppNavigator from './js/navigator/AppNavigator';
const App = createAppContainer(AppNavigator)
AppRegistry.registerComponent(appName, () => App);

