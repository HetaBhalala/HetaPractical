/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BottomTab from './src/navigation/BottomTab';

AppRegistry.registerComponent(appName, () => BottomTab);
